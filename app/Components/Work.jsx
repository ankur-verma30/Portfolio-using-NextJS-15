import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration: 1}}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <motion.h4
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{ duration: 0.5,delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo">My PortFolio</motion.h4>
      <motion.h2
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{ duration: 0.5,delay:0.5}}
      className="text-center text-5xl font-Ovo">My Latest Work</motion.h2>
      <motion.p
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{ duration: 0.5,delay:0.7}}
      className="text-center  mx-auto mb-12 mt-5  max-w-2xl font-Ovo">
       Showcasing a collection of innovative and problem-solving projects that highlight my technical expertise and passion for coding. From developing dynamic web applications to solving complex algorithms, each project demonstrates my skills in modern technologies and commitment to creating impactful solutions. Explore the details and achievements through my coding journey.
      </motion.p>
      <motion.div
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{ duration: 0.6,delay:0.9}}
      className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map(({ id, title,link, bgImage }) => (
          <motion.div
          whileHover={{scale:1.1}}
          transition={{ duration: 0.3}}
            key={id}
            style={{ backgroundImage: `url(${bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="absolute bg-white w-10/12 rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{title}</h2>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-500 transition">
             <a href={link} target="_blank">
             <Image src={assets.send_icon} alt="send icon" className="w-5" />
             </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{ duration: 0.5,delay:1.1}}
        href="https://github.com/ankur-verma30"
        className="w-max flex items-center justify-center  gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More{" "}
        <Image
          src={isDarkMode ?assets.right_arrow_bold_dark:assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />{" "}
      </motion.a>
    </motion.div>
  );
};

export default Work;
