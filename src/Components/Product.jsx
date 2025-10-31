import React from "react";
import Button from "./Button";

function Product({ val , mover , count }) {
  return (
    <div onMouseEnter={()=>{mover(count)}} className="w-full py-20 text-white hover:bg-violet-600 hover:scale-105 transition-all duration-300 ease-in-out">
      <div  className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-5">
            {val.live && <Button />}
            {val.case && <Button title="case study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
