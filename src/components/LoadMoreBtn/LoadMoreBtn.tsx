import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <button className={s.loadMoreBtn} type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
