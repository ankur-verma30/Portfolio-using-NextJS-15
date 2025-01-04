import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>

      {/* change the profile icon */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi Ankur Verma
        <Image src={assets.hand_icon} className="w-8 py-1" alt="new profile" />{" "}
      </h3>

      {/* add the typed.js property for animation */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a full stack developer from India,I am a fresher with lot of
        enthusiasm and knowledge about several languages and developement tools
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* on the place of contact add the link of the github and linkdeln socials */}
        <a
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          href=""
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />{" "}
        </a>

        {/* add the link of the resume */}
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
