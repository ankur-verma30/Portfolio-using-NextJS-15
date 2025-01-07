import { RiReactjsLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import {  motion } from "motion/react";

const iconVariants = (duration,y) => ({
	initial: { y: -10 },
	animate: {
		y: [y,-y],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});


const Technologies = () => {
	return (
		<div className=" border-neutral-800 pb:24">
			<motion.h1 whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="text-center text-4xl my-20">Technology</motion.h1>
			<motion.div whileInView={{ opacity: 1 ,x:0}} initial={{ opacity: 0 ,x:-100}}  transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
				<motion.div variants={iconVariants(2.2,9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<CgCPlusPlus size={50} className="text-7xl text-[#00599C]" />
				</motion.div>
				<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiPython size={50} className="text-7xl text-[#3776AB] " />
				</motion.div>
				<motion.div variants={iconVariants(2.1,10)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<TiHtml5 size={50} className="text-7xl text-[#E34F26]" />
				</motion.div>
				<motion.div variants={iconVariants(2.4,8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<IoLogoCss3 size={50} className="text-7xl text-[#1572B6]" />
				</motion.div>
				<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>
				<motion.div variants={iconVariants(2.1,13)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine size={50} className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div variants={iconVariants(2.3,11)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiNextjsFill size={50} className="text-7xl text-[#ffffff]" />
				</motion.div>
				<motion.div variants={iconVariants(2.2,13)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill size={50} className="text-7xl text-cyan-600" />
				</motion.div>
				<motion.div variants={iconVariants(2.4,10)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaBootstrap size={50} className="text-7xl text-[#7952B3]" />
				</motion.div>
				<motion.div variants={iconVariants(2.6,11)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiNodejsFill size={50} className="text-7xl text-[#2da32d]" />
				</motion.div>
				<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiExpress size={50} className="text-7xl text-[#ffffff]" />
				</motion.div>
				<motion.div variants={iconVariants(2.1,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiMongodb size={50} className="text-7xl text-[#04f60487]" />
				</motion.div>
				<motion.div variants={iconVariants(2.4,14)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiFirebaseFill size={60} className="text-7xl text-[#FFCA28]" />
				</motion.div>
			</motion.div>
		</div>
	);
};
export default Technologies;
