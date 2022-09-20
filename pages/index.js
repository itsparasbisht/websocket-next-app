import TextField from "@mui/material/TextField";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer__sec1}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div className={styles.homeContainer__sec2}></div>
    </div>
  );
}
