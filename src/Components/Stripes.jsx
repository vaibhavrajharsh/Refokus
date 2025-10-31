import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    { url: "src/assets/svg/cssdesignaw.svg", num: 48 },
    { url: "src/assets/svg/awwwards.svg", num: 11 },
    { url: "src/assets/svg/nocodeconf.svg", num: 2 },
    { url: "src/assets/svg/cssdesignaw.svg", num: 48 },
    { url: "src/assets/svg/awwwards.svg", num: 11 },
    { url: "src/assets/svg/nocodeconf.svg", num: 2 },
  ];
  return (
    <div className="flex items-center mt-30">
      {data.map((elem, idx) =>(
        <Stripe val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
