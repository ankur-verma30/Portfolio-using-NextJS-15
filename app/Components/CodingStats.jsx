import Image from "next/image";
import { CODING_STATS } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<div id="statistics" className=" border-neutral-900 pb-4">
			<motion.h1  whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl font-Ovo"> Coding Statistics</motion.h1>
			<p className="text-center  mx-auto mb-12 mt-5  max-w-2xl font-Ovo ">An overview of my coding journey, showcasing platforms I’ve excelled on, the number of problems I’ve solved, and my commitment to honing problem-solving skills. These stats reflect my passion for continuous learning and tackling challenges across various domains</p>
			<div>
				{CODING_STATS.map(({id,title,image,problemsSolved,description,profileLink}) => (
					<div key={id} className="mb-8  flex flex-wrap lg:justify-center">
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full lg:w-1/4">
							<motion.div whileHover={{scale:1.1}}>
							<Image
								src={image}
								width={100}
								height={100}
								alt={title}
								className="mb-6 rounded-full"
							/>
							</motion.div>
						</motion.div>
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full max-w-xl lg:w-3/4 mb-4">
							<h1 className="font-Outfit text-2xl mb-2">Platform:  {title}</h1>
							<h6 className="mb-2 font-semibold">Problem Solved : {problemsSolved}</h6>
                            <p className=" dark:text-white text-black">{description}</p>
							<span className="mb-4 rounded-full py-1 text-md font-medium text-purple-900"> <a
                  href={profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-purple-600 text-white py-2 px-6 font-medium hover:bg-purple-700 transition-colors duration-300"
                >
                  Profile Link
                </a></span>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
