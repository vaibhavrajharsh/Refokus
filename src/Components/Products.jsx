import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var data = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae reiciendis hic asperiores perspiciatis quibusdam! Delectus, magni.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae reiciendis hic asperiores perspiciatis quibusdam! Delectus, magni.",
      live: true,
      case: true,
    },
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae reiciendis hic asperiores perspiciatis quibusdam! Delectus, magni.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae reiciendis hic asperiores perspiciatis quibusdam! Delectus, magni.",
      live: true,
      case: false,
    },
    {
      title: "yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae reiciendis hic asperiores perspiciatis quibusdam! Delectus, magni.",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 100);
  };
  return (
    <div className="mt-20 relative mb-10 overflow-hidden">
      {data.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}
      <div className="w-full h-full  absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-75%" }}
          animate={{ y: pos + "%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="absolute h-1/5 w-[20vw] min-w-[200px]  left-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `%` }}
            transition={{ease: [0.76, 0, 0.24, 1]}}
            className=" h-full w-full"
          ><video autoPlay muted loop className="rounded-4xl" src="/src/assets/Videos/arqitel.mp4" ></video></motion.div>
          <motion.div
            animate={{ y: -pos + `%` }}
            transition={{ease: [0.76, 0, 0.24, 1]}}
            className=" h-full w-full"
          ><video autoPlay muted loop className="rounded-4xl" src="/src/assets/Videos/rainfall.mp4" ></video></motion.div>
          <motion.div
            animate={{ y: -pos + `%` }}
            transition={{ease: [0.76, 0, 0.24, 1]}}
            className=" h-full w-full"
          ><video autoPlay muted loop className="rounded-4xl" src="/src/assets/Videos/ttr.mp4" ></video></motion.div>
          <motion.div
            animate={{ y: -pos + `%` }}
            transition={{ease: [0.76, 0, 0.24, 1]}}
            className=" h-full w-full"
          ><video autoPlay muted loop className="rounded-4xl" src="/src/assets/Videos/yahoo.mp4" ></video></motion.div>
          <motion.div
            animate={{ y: -pos + `%` }}
            transition={{ease: [0.76, 0, 0.24, 1]}}
            className=" h-full w-full"
          ><video autoPlay muted loop className="rounded-4xl" src="/src/assets/Videos/yir.mp4" ></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
