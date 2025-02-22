"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const filterOptions = {
  productTypes: [
    "Laptop & Accessories",
    "Computers-PC",
    "Speakers & Headset",
    "Keyboards & Mouse",
    "Camera",
    "Video Recording",
    "Tablets",
    "Table Lights",
  ],
  brands: ["HP (15)", "Apple (58)", "Dell (64)", "Asus (11)", "Camera"],
  ratings: [5, 4, 3, 2, 1], // Star ratings
  availability: ["In Stock", "Pre Order", "Upcoming"],
};

export default function FilterSidebar() {
  const [price, setPrice] = useState([0]);

  return (
    <aside className="w-64 p-4 bg-white shadow-md rounded-lg">
      {/* Filter By Price */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Filter By Price</h3>
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="text"
            placeholder="Min"
            className="w-16 p-1 border rounded text-sm"
          />
          <input
            type="text"
            placeholder="Max"
            className="w-16 p-1 border rounded text-sm"
          />
        </div>
        <Slider
          defaultValue={[0]}
          max={1000}
          step={10}
          className="mt-3"
          onValueChange={(val) => setPrice(val)}
        />
        <p className="text-sm mt-1">${price[0]}</p>
      </div>

      {/* Dynamic Filter Sections */}
      {Object.entries(filterOptions).map(([category, options]) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-semibold">
            {category.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase */}
          </h3>
          {Array.isArray(options) &&
            options.map((option) => (
              <label key={option.toString()} className="flex items-center mt-2 text-sm">
                <Checkbox id={option.toString()} />
                <span className="ml-2">
                  {category === "ratings" ? (
                    <span className="flex">
                      {"★".repeat(Number(option))}
                      {"☆".repeat(5 - Number(option))}
                    </span>
                  ) : (
                    option
                  )}
                </span>
              </label>
            ))}
        </div>
      ))}
    </aside>
  );
}
