import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function ShareData() {
  return (
    <main className={styles.container}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScqThgX8Gc0BkfV-P-S_RzulyynZOBXM1iKbLdMSSVrEyXcVg/viewform?embedded=true"
        width="640"
        height="3547"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </main>
  );
}
