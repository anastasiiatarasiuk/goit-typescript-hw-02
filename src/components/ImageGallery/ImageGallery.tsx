import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.imagesContainer}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s.imagesItem}>
            <ImageCard imageData={image} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
