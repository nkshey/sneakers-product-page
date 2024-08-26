import CloseIcon from "../icons/CloseIcon";

function CloseMenuButton({ onOpen }) {
  return (
    <button
      className="group mb-[2.875rem] grid h-6 w-6 -translate-x-[0.3125rem] place-items-center"
      onClick={() => onOpen(false)}
    >
      <CloseIcon />
    </button>
  );
}

export default CloseMenuButton;
