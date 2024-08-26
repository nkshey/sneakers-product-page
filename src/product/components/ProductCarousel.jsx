import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CarouselMobile from "../mobile/CarouselMobile";
import CarouselDesktop from "../desktop/CarouselDesktop";

const images = [
  {
    id: 1,
    main: "./images/sneakers/image-product-1.jpg",
    thumbnail: "./images/sneakers/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    main: "./images/sneakers/image-product-2.jpg",
    thumbnail: "./images/sneakers/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    main: "./images/sneakers/image-product-3.jpg",
    thumbnail: "./images/sneakers/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    main: "./images/sneakers/image-product-4.jpg",
    thumbnail: "./images/sneakers/image-product-4-thumbnail.jpg",
  },
];

function ProductCarousel() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const handleNext = () => {
    setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
      {isDesktop ? (
        <CarouselDesktop images={images} />
      ) : (
        <CarouselMobile
          images={images}
          currentIndex={currentIndex}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </>
  );
}

export default ProductCarousel;
