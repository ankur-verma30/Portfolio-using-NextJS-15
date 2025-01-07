import Image from "next/image";
import { CODING_STATS } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<div className=" border-neutral-900 pb-4">
			<motion.h1  whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl"> Coding Statistics</motion.h1>
			<div className="">
				{CODING_STATS.map(({id,title,image,problemsSolved,description,profileLink}) => (
					<div key={id} className="mb-8  flex flex-wrap lg:justify-center">
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full lg:w-1/4">
							<Image
								src={image}
								width={100}
								height={100}
								alt={title}
								className="mb-6 rounded"
							/>
						</motion.div>
						<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 font-semibold">Problem Solved : {problemsSolved}</h6>
                            <p className="mb-4 text-neutral-400">{description}</p>
							<span className="mr-2 mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href={profileLink} target="_blank" rel="noopener noreferrer">Profile Link</a></span>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
