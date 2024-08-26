import { useState } from "react";
import CarouselItem from "./CarouselItem";
import Lightbox from "../components/Lightbox";

function CarouselDesktop({ images }) {
  const [mainImage, setMainImage] = useState(
    "./images/sneakers/image-product-1.jpg",
  );
  const [currentImage, setCurrentImage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleThumbnailClick = (imageSrc, imageIndex) => {
    if (currentImage === imageIndex) return;

    setMainImage(imageSrc);
    setCurrentImage(imageIndex);
  };

  return (
    <section className="flex select-none flex-col gap-8">
      <img
        src={mainImage}
        alt={`sneakers image ${currentImage}`}
        className="cursor-pointer rounded-[0.875rem]"
        onClick={() => setIsOpen(true)}
      />

      <ul className="flex gap-[1.875rem]">
        {images.map((image) => (
          <CarouselItem
            image={image}
            currentImage={currentImage}
            handleThumbnailClick={handleThumbnailClick}
            key={image.id}
          />
        ))}
      </ul>

      {isOpen && (
        <Lightbox
          images={images}
          mainImage={mainImage}
          setMainImage={setMainImage}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          setIsOpen={setIsOpen}
          handleThumbnailClick={handleThumbnailClick}
        />
      )}
    </section>
  );
}

export default CarouselDesktop;
