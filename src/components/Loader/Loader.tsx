import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
