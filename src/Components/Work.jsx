import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
const Work = () => {
  const [images, setImages] = useState([
    {
      url: "src/assets/images/1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "src/assets/images/2.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "src/assets/images/3.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "src/assets/images/4.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "src/assets/images/5.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "src/assets/images/6.png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImg(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImg([]);
        break;
      case 1:
        showImg([0]);
        break;
      case 2:
        showImg([0, 1]);
        break;
      case 3:
        showImg([0, 1, 2]);
        break;
      case 4:
        showImg([0, 1, 2, 3]);
        break;
      case 6:
        showImg([0, 1, 2, 3, 4]);
        break;
      case 8:
        showImg([0, 1, 2, 3, 4, 6]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative w-min mx-auto text-center">
        <h1 className="text-[30vw] leading-none tracking-tight font-medium">
          Work
        </h1>
        <div className="absolute w-full h-full  top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-70 rounded-md absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
