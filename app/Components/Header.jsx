import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
        // add your profile imagee
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </motion.div>

      {/* change the profile icon */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi Ankur Verma
        <Image
          src={assets.hand_icon}
          className="w-8 py-1"
          alt="new profile"
        />{" "}
      </motion.h3>
      <div className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        <ReactTyped
          strings={[
            "Software Engineer",
            "C++ Programmer",
            "Python Programmer",
            "Full Stack Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a full stack developer from India,I am a fresher with lot of
        enthusiasm and knowledge about several languages and developement tools
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* on the place of contact add the link of the github and linkdeln socials */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 border border-white rounded-full bg-black text-2xl text-white flex items-center gap-2 dark:bg-transparent"
          href="https://www.linkedin.com/in/ankur-verma30/"
        >
          Linkedln
          <Image src={assets.right_arrow_white} alt="" className="w-4" />{" "}
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="https://drive.google.com/file/d/1DFjoxjLrWUWDWqvkn9zDrgzOcOZzntP8/view?usp=sharing"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />{" "}
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
