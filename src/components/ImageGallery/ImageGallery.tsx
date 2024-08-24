import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type Props = {
  images: ImageData[];
  handleOpenModal: (url: string) => void;
};

const ImageGallery = ({ images, handleOpenModal }: Props) => {
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
