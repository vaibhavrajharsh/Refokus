import React from "react";
import Marquee from "./Marquee";
function Marquees() {
  var images = [
    [
      "src/assets/svg/accel.svg",
      "src/assets/svg/awwwards.svg",
      "src/assets/svg/basf.svg",
      "src/assets/svg/bcg.svg",
      "src/assets/svg/cssdesignaw.svg",
      "src/assets/svg/doxel.svg",
      "src/assets/svg/ypo.svg",
      "src/assets/svg/yahoo.svg",
      "src/assets/svg/weglot.svg",
      "src/assets/svg/spotify.svg",
    ],
    [
      "src/assets/svg/flowcode.svg",
      "src/assets/svg/haufe.svg",
      "src/assets/svg/intenseye.svg",
      "src/assets/svg/lavender.svg",
      "src/assets/svg/manv.svg",
      "src/assets/svg/mural.svg",
      "src/assets/svg/rainfall.svg",
      "src/assets/svg/remind.svg",
      "src/assets/svg/rocketchat.svg",
      "src/assets/svg/singularity.svg",
    ],
  ];
  return (
    <div className="py-10 overflow-hidden">
      {images.map((item, index) => (
        <Marquee imageurl={item} key ={index} direction={index===0?"left":"right"}/>
      ))}
    </div>
  );
}

export default Marquees;
