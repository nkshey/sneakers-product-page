import LeftChevronIcon from "../icons/LeftChevronIcon";
import RightChevronIcon from "../icons/RightChevronIcon";

function CarouselButton({ type, onClick }) {
  const styles = {
    previous:
      "group grid h-10 w-10 place-items-center rounded-full bg-white md:h-[3.625rem] md:w-[3.625rem] md:hover:bg-opacity-100  hover:bg-opacity-85 transition-all duration-150 shadow-custom md:-translate-x-[1.8125rem]",
    next: "group grid h-10 w-10 place-items-center rounded-full bg-white md:h-[3.625rem] md:w-[3.625rem] md:hover:bg-opacity-100 hover:bg-opacity-85 transition-all duration-150 shadow-custom md:translate-x-[1.8125rem]",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {type === "previous" ? <LeftChevronIcon /> : <RightChevronIcon />}
    </button>
  );
}

export default CarouselButton;
