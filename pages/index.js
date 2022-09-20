import Input from "@mui/material/Input";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import styles from "../styles/Home.module.css";

const ariaLabel = { "aria-label": "description" };
export default function Home() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAnAvatar();
  }, []);

  async function getAnAvatar() {
    try {
      const data = await fetch(
        "https://avatars.dicebear.com/api/micah/dsgt.svg?background=%23ffffff",
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

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer__sec1}>
        <img src={avatar} alt="hello from someone" />
        <h3>What should we call you?</h3>
        <Input
          placeholder="***"
          sx={{ fontSize: "1.5em" }}
          inputProps={ariaLabel}
        />
        <Button
          disableElevation
          variant="contained"
          size="small"
          sx={{ backgroundColor: "black", marginTop: "10px" }}
        >
          {"I'm In"}
        </Button>
      </div>
      <div className={styles.homeContainer__sec2}></div>
    </div>
  );
}
