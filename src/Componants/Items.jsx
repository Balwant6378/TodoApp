import css from "../Style/Items.module.css";

const Items = ({ foodItems, onDeleteClick }) => {
  return (
    <ul className={`list-group ${css["items-container"]}`}>
      {foodItems?.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
          <button
            className={`btn btn-danger ${css["btns"]}`}
            onClick={() => onDeleteClick(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Items;
