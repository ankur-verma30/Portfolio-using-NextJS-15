import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg font-Ovo">My PortFolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center mx-auto mb-12 mt-5  max-w-2xl font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        facermollitia. Architecto aliquam porro rerum, labore recusandae non
        illo atque repudiandae nam beatae amet nisi sapiente laboriosam culpa
        ipsa inventore vitae asperiores velit? Atque, rerum. Lorem ipsum dolor
        sitamet consectetur adipisicing elit. Facilis, aliquid.
      </p>
      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map(({ id, title, description, bgImage }) => (
          <div
            key={id}
            style={{ backgroundImage: `url(${bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="absolute bg-white w-10/12 rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-500 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center  gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show More{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />{" "}
      </a>
    </div>
  );
};

export default Work;
