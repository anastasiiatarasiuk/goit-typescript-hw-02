import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import fetchImages from "../services/Api";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetchImages(query, page, 5);

        setImages((prev) =>
          page === 1 ? response.results : [...prev, ...response.results]
        );
        setTotal(response.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  function handleOpenModal(image) {
    setModal({ isOpen: true, modalData: image });
  }

  function handleCloseModal() {
    setModal({ isOpen: false, modalData: null });
  }

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      {total > page && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        handleCloseModal={handleCloseModal}
        modalData={modal.modalData}
        isOpen={modal.isOpen}
      />
    </>
  );
}

export default App;
