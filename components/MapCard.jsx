'use client';
import { motion } from "framer-motion";
import { planetVariants } from "../utils/motion";
const MapCard = ({position,right,top,src,gradient ,title}) => (
    <motion.div variants={planetVariants(position)}
     className={`lg:w-[196px] lg:h-[150px] md:w-[160px] md:h-[110px] sm:rounded-[28px]   lg:rounded-[32px] rounded-[20px] absolute ${right} ${top} map-gradient flex justify-center items-center z-10 `}>
      <div className={`${gradient}`} />
      <img src={src} alt=""  className='w-[90%] h-[90%] object-cover  rounded-[32px] '/> 
      <h1 className="absolute left-[18px]  md:bottom-[12px] bottom-[-10px] font-normal text-white capitalize lg:text-[19px] md:text-[15px] text-[5px]  ">{title}</h1>

    </motion.div >
)

export default MapCard
