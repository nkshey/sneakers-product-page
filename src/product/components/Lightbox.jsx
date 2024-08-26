import CarouselItem from "../desktop/CarouselItem";
import CarouselButton from "../../ui/CarouselButton";
import CloseIcon from "../../icons/CloseIcon";

function Lightbox({
  images,
  mainImage,
  setMainImage,
  setIsOpen,
  currentImage,
  setCurrentImage,
  handleThumbnailClick,
}) {
  const handlePreviousClick = () => {
    const newIndex = currentImage === 1 ? images.length : currentImage - 1;
    setCurrentImage(newIndex);
    setMainImage(images[newIndex - 1].main);
  };

  const handleNextClick = () => {
    const newIndex = currentImage === images.length ? 1 : currentImage + 1;
    setCurrentImage(newIndex);
    setMainImage(images[newIndex - 1].main);
  };

  return (
    <section className="absolute inset-0 grid place-items-center py-[83px]">
      <div className="z-[999] flex max-w-[34.375rem] flex-col items-center justify-center gap-10">
        <button
          className="group -mb-[1.125rem] self-end"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>

        <div className="relative">
          <img
            src={mainImage}
            alt="sneakers image"
            className="rounded-[0.875rem]"
          />

          <div className="absolute top-0 flex h-full w-full items-center justify-between">
            <CarouselButton type="previous" onClick={handlePreviousClick} />
            <CarouselButton type="next" onClick={handleNextClick} />
          </div>
        </div>

        <ul className="flex max-w-[34.375rem] gap-[1.875rem] px-[3.25rem]">
          {images.map((image) => (
            <CarouselItem
              image={image}
              currentImage={currentImage}
              handleThumbnailClick={handleThumbnailClick}
              key={image.id}
            />
          ))}
        </ul>
      </div>

      {/* background overlay */}
      <div
        className="fixed inset-0 bg-black/75"
        onClick={() => setIsOpen(false)}
      ></div>
    </section>
  );
}

export default Lightbox;
