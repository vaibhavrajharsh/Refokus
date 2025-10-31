import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover==='true' && "#7443ff" , padding: '25px' }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-120 flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h1>Up Next: Culture</h1>
          <IoIosArrowRoundForward className="text-3xl" />
        </div>
        <h1 className="text-3xl font-medium mt-5">Who We Are</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            <h1 className="text-7xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border mt-5 outline-none border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
