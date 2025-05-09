import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({setNumber , number}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  function displayNumber(event){
    const targetValue = (event.target.value); 
    if(targetValue === 'C'){
      setNumber("");
    }
    else if(targetValue === '='){
      const result = eval(number);
      setNumber(result);
    }
    else{
        const newValue = number + (event.target.value);
        setNumber(newValue);
    }
    
  }

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button value={buttonName} onClick={(event) => displayNumber(event)} key= {buttonName} className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;