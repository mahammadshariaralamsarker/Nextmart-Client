import React from "react";
import styles from "../banner/Banner.module.css";
const ProductBanner = ({title, path}:{title:string, path:string}) => {
  return (
    <div className={`${styles.banner} flex justify-center items-center mt-10 border-2 border-white  rounded-lg`}>
      <div className="text-center font-bold">
        <h1 className="text-3xl ">{title}</h1>
        <p>{path}</p>
      </div>
    </div>
  );
};

export default ProductBanner;
