import React, { useState, useEffect } from "react";
export default function ProductTable() {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setProductData(data);
      } catch (error) {
        console.log("Api Failed", error.message);
      }
    };

    getProductData();
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setCategoryData(["all", ...data]);
    } catch (error) {
      console.log("Api Failed", error.message);
    }
  };
  const filteredProducts = productData.filter(
    (item) => categorySelected === "all" || item.category === categorySelected
  );

  return (
    <div className="w-full">
      <div className="w-full flex flex-row items-center text-base text-white ">
        <div className="text-indigo-500 px-2">Select Category:</div>
        <select
          className="bg-indigo-500 p-3 rounded-xl cursor-pointer"
          onChange={(e) => {
            setCategorySelected(e.target.value);
          }}
        >
          {categoryData.map((item, index) => {
            return (
              <option value={item} key={index} className="bg-black">
                {capitalizeFirstLetter(item)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-2 justify-center lg:justify-start my-6 items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div
              className={`w-1/2 md:w-2/5 lg:w-1/5 flex flex-col justify-between items-center p-2.5 rounded-2xl border border-teal-500 shadow-xl `}
              key={index}
              style={{ height: "250px" }}
            >
              <div className="w-1/2 m-auto">
                <img
                  src={item?.image}
                  alt={item?.id}
                  className="w-24 h-24 object-cover"
                />
              </div>
              <div
                className="text-base text-center"
               
              >
                {item?.title}
              </div>
              <div className="text-base text-center font-bold">
                ₹{item?.price}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-amber-500 font-bold">
            No data found
          </div>
        )}
      </div>
    </div>
  );
}
