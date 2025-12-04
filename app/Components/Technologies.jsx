import { RiJavaFill, RiReactjsLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAnsible, SiApachejmeter, SiDocker, SiEclipseide, SiGit, SiGithub, SiIntellijidea, SiJavascript, SiJenkins, SiJira, SiKubernetes, SiLinux, SiPostman, SiSpring, SiSpringboot, SiVscodium } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import {  motion } from "motion/react";
import { BiLogoVisualStudio } from "react-icons/bi";

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


const Technologies = ({isDarkMode}) => {
	return (
		<div className=" border-neutral-800 pb:24">
			<motion.h1 whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="text-center text-4xl my-20">Technology</motion.h1>
			<motion.div whileInView={{ opacity: 1 ,x:0}} initial={{ opacity: 0 ,x:-100}}  transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
				<motion.div variants={iconVariants(2.2,9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<CgCPlusPlus size={50} className="text-7xl text-[#00599C]" />
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
				<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiTypescript size={50} className="text-7xl text-blue-600" />
				</motion.div>

				<motion.div variants={iconVariants(2.1,13)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine size={50} className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div variants={iconVariants(2.1,13)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiJavaFill size={50} className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div variants={iconVariants(2.3,11)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiNextjsFill size={50} className="dark:text-white text-black" />
				</motion.div>
				<motion.div variants={iconVariants(2.2,13)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill size={50} className="text-7xl text-cyan-600" />
				</motion.div>
				<motion.div variants={iconVariants(2.4,10)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiSpringboot size={50} className="text-7xl text-[#7952B3]" />
				</motion.div>
				<motion.div variants={iconVariants(2.6,11)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiDocker size={50} className="text-7xl text-[#2d54a3]" />
				</motion.div>
				<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiKubernetes size={50} className="text-7xl dark:bg-white text-blue-700" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJenkins size={50} className="text-7xl dark:bg-white bg-black text-red-700" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJira size={50} className="text-7xl dark:bg-white text-blue-700" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiApachejmeter size={50} className="text-7xl dark:bg-white text-blue-700" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiLinux size={50} className="text-7xl dark:bg-white text-black" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiAnsible size={50} className="text-7xl dark:bg-white text-blue-700" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiPostman size={50} className="text-7xl dark:bg-white text-orange-700" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiEclipseide size={50} className="text-7xl dark:bg-white text-blue-950" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiIntellijidea size={50} className="text-7xl dark:bg-white text-red-500" />
				</motion.div>
			<motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<BiLogoVisualStudio size={50} className="text-7xl dark:bg-white text-blue-700" />
				</motion.div><motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiGit size={50} className="text-7xl dark:bg-white text-orange-600" />
				</motion.div><motion.div variants={iconVariants(2.3,12)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiGithub size={50} className="text-7xl dark:bg-white text-black" />
				</motion.div>
			
			</motion.div>
		</div>
	);
};
export default Technologies;
