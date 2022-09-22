import React, { useEffect, useState } from "react";
import styles from "../styles/ChatPage.module.css";
import SendIcon from "@mui/icons-material/Send";

const avatarSrc =
  "https://avatars.dicebear.com/api/micah/309.84552351888595.svg?background=%23ffffff";
const username = "kisen67";

let ws = null;

function ChatPage() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  function connectToSocket() {
    ws = new WebSocket("ws://localhost:8000/ws");
    ws.onopen = () => ws.send("connected");
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
    };
  }

  useEffect(() => {
    connectToSocket();
  }, []);

  function handleSendMessage() {
    const data = JSON.stringify({ username, message });
    ws.send(data);
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContainer__chats}>
        {arr.map((item) => (
          <div
            key={item}
            className={`${styles.chatContainer__chat} ${
              item == 2 && styles.myMessages
            }`}
          >
            <img src={avatarSrc} alt={`Hi, my self ${username}`} />
            <div>
              <b>username</b>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                eum excepturi omnis accusantium quaerat similique quisquam sint
                incidunt veritatis voluptates.
              </p>
            </div>
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
