import Input from "@mui/material/Input";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const ariaLabel = { "aria-label": "description" };
export default function Home() {
  const [avatar, setAvatar] = useState(null);
  const avatarText = Math.random() * 1000;

  const [username, setUsername] = useState("");

  const router = useRouter();

  useEffect(() => {
    getAnAvatar();
  }, []);

  async function getAnAvatar() {
    try {
      const data = await fetch(
        `https://avatars.dicebear.com/api/micah/${avatarText}.svg?background=%23ffffff`,
        {
          method: "GET",
        }
      );
      const avatarUrl = data.url;
      setAvatar(avatarUrl);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = () => {
    sessionStorage.setItem("avatar", avatar);
    sessionStorage.setItem("username", username);
    router.push("/ChatPage");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer__sec1}>
        <img src={avatar} alt="hello from someone" />
        <h3>What should we call you?</h3>
        <Input
          placeholder="***"
          sx={{ fontSize: "1.5em", color: "red" }}
          inputProps={ariaLabel}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Button
          disableElevation
          variant="contained"
          size="small"
          sx={{ backgroundColor: "black", marginTop: "10px" }}
          disabled={username.length > 0 ? false : true}
          onClick={handleSubmit}
        >
          {"Let's Go /"}
        </Button>
      </div>
      <div className={styles.homeContainer__sec2}></div>
    </div>
  );
}
