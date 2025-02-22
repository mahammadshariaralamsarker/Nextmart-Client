import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner/ProductBanner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/Category";
import { getAllProducts } from "@/services/Product";
import { ICategory } from "@/types";
import React from "react";

const AllProductPage = async () => {
  const { data: categories } = await getAllCategories();
  const { data } = await getAllProducts();

  return (
    <div>
      <NMContainer>
        <ProductBanner title="All Products " path="Home - Products" />

        <h1 className="font-bold text-xl my-10">Feature Collection</h1>
        <div className="grid grid-cols-6 gap-8 my-5">
          {categories?.map((category: ICategory, index: number) => (
            <CategoryCard key={index} category={category}></CategoryCard>
          ))}
        </div>
        <AllProducts products={data} />
      </NMContainer>
    </div>
  );
};

export default AllProductPage;
