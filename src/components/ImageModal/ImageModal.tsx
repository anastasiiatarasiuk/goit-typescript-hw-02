import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

type Props = {
  handleCloseModal: () => void;
  isOpen: boolean;
  modalData: string | null;
};

const ImageModal = ({ handleCloseModal, isOpen, modalData }: Props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      padding: "0",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "90vw",
      maxHeight: "90vh",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <button className={s.closeModalBtn} onClick={handleCloseModal}>
        <IoClose size={15} />
      </button>
      {modalData && <img src={modalData} alt="Modal content" />}
    </Modal>
  );
};

export default ImageModal;
