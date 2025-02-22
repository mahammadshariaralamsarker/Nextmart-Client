import React from "react";
import styles from "../heroSection/heroSection.module.css";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div
      className={`${styles.banner} container mx-auto border-4 text-white  border-white rounded-3xl mt-10        `}
    >
      <div className="pl-12  text-center space-y-7       ">
        <h1 className="font-bold text-4xl mt-7 ">
          Lorem ipsum dolor sit abet consectetur, adipisicing elit. Sed,
          repellat?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          assumenda, iste, illo explicabo porro sit nesciunt cumque tenetur quam
          blanditiis recusandae deserunt esse quaerat provident quidem nisi
          similique cum? Pariatur.
        </p>
        <div>
          <Button className="mr-12" variant="default">
            Buy Now
          </Button>
          <Button className="text-black" variant="outline">All Products</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
