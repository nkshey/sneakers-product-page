function CarouselItem({ image, currentImage, handleThumbnailClick }) {
  return (
    <li>
      <button onClick={() => handleThumbnailClick(image.main, image.id)}>
        <div
          className={`z-50 rounded-[0.625rem] bg-white bg-opacity-100 ${currentImage === image.id ? "outline outline-2 outline-orange" : ""}`}
        >
          <img
            src={image.thumbnail}
            alt={`sneakers thumbnail image ${image.id}`}
            className={`rounded-[0.625rem] transition-all duration-150 hover:opacity-40 ${currentImage === image.id ? "opacity-40" : ""}`}
          />
        </div>
      </button>
    </li>
  );
}

export default CarouselItem;
