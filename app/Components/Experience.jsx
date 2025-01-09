import { EXPERIENCES } from "../assets/assets";
import { motion } from "motion/react";

const Experience = () => {
	return (
		<div id="experience" className=" border-neutral-900 pb-4">
			<motion.h1  whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Experience</motion.h1>
			<div>
				{EXPERIENCES.map((experience, index) => {
					return (
						<div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-3">
							<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full lg:w-1/4">
								<p className="mb-2 text-black font-Ovo text-lg dark:text-white">
									{experience.year}
								</p>
							</motion.div>
							<motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.2 }} className="w-full max-w-xl lg:w-3/4 mb-5 ">
								<h6 className="mb-2 font-Ovo text-lg">
									{experience.role} -{" "}
									<span className=" text-lg text-purple-900">
										{experience.company}
									</span>
								</h6>
								<p className="mb-4 text-black font-Ovo text-sm dark:text-white/70">
									{experience.description}
								</p>
								{experience.technologies.map((technology, index) => {
									return (
										<span
											key={index}
											className="mr-2  mt-4 rounded px-2 py-1 text-md font-semibold ">
											{technology}{" "}
										</span>
									);
								})}
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
