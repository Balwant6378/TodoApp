import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import css from "./App.module.css";
import InputContainer from "./Componants/InputContainer";
import Items from "./Componants/Items";
function App() {
  const [foodItems, setfoodItems] = useState([]);

  const handleOnDeleteClick = (itemIndex) => {
    const newFoodItems = foodItems.filter((_, index) => index !== itemIndex);
    setfoodItems(newFoodItems);
  };
  const handleOnkeyDown = (e) => {
    if (e.key === "Enter") {
      let inputValue = e.target.value;
      if (inputValue.trim() !== "") {
        setfoodItems([...foodItems, inputValue]);
        e.target.value = "";
      }
    }
  };

  return (
    <div className={css["main-container"]}>
      <div className={css["container"]}>
        <h1>Healthy Food</h1>
        <InputContainer handleOnkeyDown={handleOnkeyDown} />
        <Items foodItems={foodItems} onDeleteClick={handleOnDeleteClick} />
      </div>
    </div>
  );
}

export default App;
