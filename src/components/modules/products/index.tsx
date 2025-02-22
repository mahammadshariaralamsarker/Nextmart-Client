import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types/product";
import React from "react";
import FilterSidebar from "./filterSidebar";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex gap-8 my-10">
      <div><FilterSidebar/></div>
      <div className="grid grid-cols-3 gap-8  ">
        {products?.map((product: IProduct, index: number) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
