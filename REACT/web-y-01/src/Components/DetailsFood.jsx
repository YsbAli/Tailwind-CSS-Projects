import React, { useState } from "react";
import { data } from "../Data/data";

const DetailsFood = () => {
  const [foodData, setFoodData] = useState(data);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-10">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Section */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter Type</p>
          <div className="flex flex-wrap justify-between">
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* Filtered Price */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button className="border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Food Card section */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foodData.map((items, i) => (
          <>
            <div
              key={i}
              className="border shadow-lg hover:scale-105 duration-300"
            >
              <img src={items.image} alt={items.name} />
              <div>
                <p>{items.name}</p>
                <p>
                  <span>{items.price}</span>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DetailsFood;
