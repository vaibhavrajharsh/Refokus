import { motion } from "framer-motion";
import React from "react";

function Marquee({ imageurl, direction }) {
  return (
    <div className="flex gap-30 w-fit overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex w-full py-8 gap-30 whitespace-nowrap"
      >
        {imageurl.map((url) => (
          <img src={url} className="shrink-0 w-[6vw]" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex w-full py-8 gap-30 whitespace-nowrap"
      >
        {imageurl.map((url) => (
          <img src={url} className="shrink-0 w-[6vw]" />
        ))}
      </motion.div>
      
    </div>
  );
}

export default Marquee;
