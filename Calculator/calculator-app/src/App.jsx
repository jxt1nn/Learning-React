import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [number , setNumber] = useState("");



  return (
    <div className={styles.calculator}>
      <Display number={number}  />
      <ButtonsContainer setNumber={setNumber} number={number}  ></ButtonsContainer>
    </div>
  );
}

export default App;