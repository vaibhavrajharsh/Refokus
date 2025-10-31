import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-30">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-tight leading-none mb-10">
            Refokus.
          </h1>
          {["Privacy Policy","cookies","Terms","impression"].map((item,index)=><a className="text-zinc-500 text-m p-5">{item}</a>)}
        </div>
        <div className="basis-1/2 flex gap-10">
          <div className="basic-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-3 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basic-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["Home", "Work", "Careers","Contact"].map((item, index) => (
              <a className="block mt-3 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-end">
            <p className="text-right basis-1/2">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
        <img className="w-32" src="src/assets/svg/enterprise.svg" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
