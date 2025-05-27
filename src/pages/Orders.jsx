import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { product, currency } = useContext(ShopContext);
  return (
    <div className="lg:px-20 px-4 mb-44">
      <div>
        <h2 className="text-2xl text-amber-800 my-7 playwrite-hu"> My orders</h2>
      </div>
      <div>
        {product.slice(1, 4).map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between border-b border-b-gray-300 p-4">
              <div className="flex lg:flex-row flex-col gap-2  items-center">
                <img src={item.image} className="lg:w-25 w-18" />
                <div className="flex flex-col lg:w-md">
                  <p className="lg:text-xl text-amber-700">{item.name}</p>
                  <div className="flex flex-row gap-2">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity:1</p>
                  </div>
                  <p className="text-gray-500">Date:25 May 2025</p>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <p>Ready to ship</p>
              </div>
              <div className="flex items-center"><button className="border border-gray-400 p-2 cursor-pointer ">Track order</button></div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
