import React from "react";
import styles from "../styles/ChatPage.module.css";

const avatarSrc =
  "https://avatars.dicebear.com/api/micah/309.84552351888595.svg?background=%23ffffff";
const username = "kisen67";

function chatPage() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContainer__chats}>
        {arr.map((item) => (
          <div key={item} className={styles.chatContainer__chat}>
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
      <div className={styles.chatContainer__sendMessage}></div>
    </div>
  );
}

export default chatPage;
