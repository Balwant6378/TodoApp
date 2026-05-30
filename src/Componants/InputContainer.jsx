import css from "../Style/InputContainer.module.css";
const InputContainer = ({ handleOnkeyDown }) => {
  return (
    <input
      className={css["input-container"]}
      type="text"
      placeholder="Enter Healthy Food name"
      onKeyDown={handleOnkeyDown}
    />
  );
};

export default InputContainer;
