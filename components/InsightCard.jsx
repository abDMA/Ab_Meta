'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({imgUrl,title,subtitle,index}) => (
  <motion.div 
  variants={fadeIn('up','spring',index * 0.5 ,1)} 
  className="flex md:flex-row flex-col w-full justify-between  gap-10 mt-[20px]"
  >
    {/* ---------imgDiv------*/}
    <div className="lg:w-[270px] lg:h-[250px] w-full h-[300px] mt-[10px] ">
      <img src={imgUrl} alt={`planet-${index}`} className="w-full h-full object-cover rounded-[32px]"  />
    </div>
    {/* ---------imgDiv------*/}
    {/* ---------tittleDiv------*/}
    <div className="lg:flex-1 lg:mt-[15px] mt-[5px]lg:max-w-[650px] max-w-[520px]">
      <div className="font-normal py-5 text-white lg:text-[42px] text-[26px] leading-[50px]"><h4>{title}</h4></div>
      <div className=" text-secondary-white text-[20px]"><p>{subtitle}</p></div>
    </div>
    {/* ---------tittleDiv------*/}
    {/* ---------circleeDiv------*/}
    <div className=" lg:flex hidden w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white relative mt-[75px] cursor-pointer">
      <img src="arrow.svg" alt="arrow" className="w-[37px] h-[37px] absolute top-[30%] left-[30%]" />
    </div>
    {/* ---------circleeDiv------*/}



  </motion.div>
);

export default InsightCard;
