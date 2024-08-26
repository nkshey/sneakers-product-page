import CarouselButton from "../../ui/CarouselButton";

function CarouselMobile({ images, currentIndex, handlePrevious, handleNext }) {
  return (
    <section>
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              src={image.main}
              alt={`sneakers image ${index + 1}`}
              key={image.id}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <CarouselButton type="previous" onClick={handlePrevious} />
          <CarouselButton type="next" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
}

export default CarouselMobile;
