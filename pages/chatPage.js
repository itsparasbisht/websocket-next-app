import React from "react";
import styles from "../styles/ChatPage.module.css";

const avatarSrc =
  "https://avatars.dicebear.com/api/micah/309.84552351888595.svg?background=%23ffffff";
const username = "kisen67";

function chatPage() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContainer__chats}>
        <div className={styles.chatContainer__chat}>
          <img src={avatarSrc} alt={`Hi, my self ${username}`} />
          <div>
            <b>username</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              cum?
            </p>
          </div>
        </div>
      </div>
      <div className={styles.chatContainer__sendMessage}></div>
    </div>
  );
}

export default chatPage;
