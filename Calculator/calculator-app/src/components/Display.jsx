import styles from "./Display.module.css";

const Display = (props) => {
  return <input className={styles.display} type="text" value={props.number} readOnly/>;
};

export default Display;