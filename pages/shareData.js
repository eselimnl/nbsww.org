import styles from "../styles/ShareData.module.css";

export default function ShareData() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScqThgX8Gc0BkfV-P-S_RzulyynZOBXM1iKbLdMSSVrEyXcVg/viewform?embedded=true"
        width="740"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
