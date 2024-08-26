import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

function ChangeQuantityButton({ type, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group grid h-6 w-6 place-items-center rounded-full"
    >
      {type === "decrement" || type === "decrease" || type === "minus" ? (
        <MinusIcon />
      ) : (
        <PlusIcon />
      )}
    </button>
  );
}

export default ChangeQuantityButton;
