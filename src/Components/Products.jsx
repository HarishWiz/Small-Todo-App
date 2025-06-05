import React from "react";
import { data } from "./data";
const Products = ({ handleAdd, cart }) => {
  return (
    <>
      <section className="w-full h-screen bg-gray-500 ">
        <div className="w-full h-full flex items-center justify-center">
          {data.map((product) => (
            <div key={product.id} className="w-1/3 bg-gray-700 p-5 m-5">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-2/3"
                />
              </div>
              <div>
                <h1 className="text-white font-semibold text-lg">
                  {product.title}
                </h1>
                <p className="text-white font-semibold text-lg">
                  {product.description}
                </p>
                <p className="text-white font-semibold text-lg">
                  {product.price}
                </p>
              </div>
              <button
                className="px-6  py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
                onClick={() => (product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
