import ManageCategories from "@/components/modules/shop/category";
import { getAllCategory } from "@/services/Category";
import React from "react";

const ProductCategoryPage = async() => {
  const {data , meta } = await getAllCategory() 
  return (
    <div>
      <ManageCategories  categories={data}/>
      
    </div>
  );
};

export default ProductCategoryPage;
