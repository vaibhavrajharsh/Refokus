import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl p-6  flex items-center justify-between mx-auto border-b-[1px] border-zinc-700">
      <div className="left flex">
        <div className="logo flex items-center">
          <img className="w-10 invert" src="src/assets/right-up.png" alt="<>" />
          <p>Refokus</p>
        </div>

        <div className="links flex gap-13 ml-20">
          {["Home", "Work", "Culture", "", "Work"].map((elem, index) => (
            <a  className="text-m flex items-center gap-1">
              {index === 1 ? (
                <span
                  style={{ boxShadow: "0 0 0.75em #00FF19" }}
                  className="w-1.5 h-1.5 bg-green-400 inline-block rounded-full"
                ></span>
              ) : null}
              {elem.length === 0 ? (
                <span className="w-0.5 h-7 bg-zinc-700"></span>
              ) : null}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
