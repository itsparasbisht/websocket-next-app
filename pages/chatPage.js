import React, { useEffect, useState } from "react";
import styles from "../styles/ChatPage.module.css";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";

const socketId = uuidv4();
const id = socketId.split("-")[0];

let username = null;
let avatarSrc = null;
let apiUrl = null;

if (process.isClient) {
  username = sessionStorage.getItem("username") + "-" + id;
  avatarSrc = sessionStorage.getItem("avatar");
  apiUrl = "fastapi-chat-websocket.herokuapp.com";
}

let ws = null;
ws = new WebSocket(`ws://${apiUrl}/ws/${username}/${socketId}`);

function ChatPage() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  function connectToSocket() {
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
      setChats((prev) => [...prev, data]);
    };
  }

  useEffect(() => {
    connectToSocket();
  }, []);

  function handleSendMessage() {
    setMessage("");
    const data = JSON.stringify({ username, message, avatarSrc });
    ws.send(data);
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContainer__chats}>
        {chats.length > 0 &&
          chats.map((chat, i) => (
            <div
              key={i}
              className={`${
                chat.username == username
                  ? styles.myMessages
                  : chat.info
                  ? styles.info__chat
                  : styles.chatContainer__chat
              }`}
            >
              {chat?.left ? (
                <p className={styles.chatLeft}>{chat.message}</p>
              ) : chat?.joined ? (
                <p className={styles.chatLeft}>{chat.message}</p>
              ) : (
                <>
                  <img src={chat.avatarSrc} alt={`Hi, my self ${username}`} />
                  <div>
                    <b>{chat.username}</b>
                    <p>{chat.message}</p>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
      <div className={styles.chatContainer__sendMessage}>
        <input
          type="text"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <SendIcon
          sx={{
            color: "#0f5fc7",
            fontSize: "30px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default ChatPage;
