'use client';

import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
const Footer = () => (
  <footer className="relative z-10 ">
    <motion.div
     variants={
      footerVariants}
      initial='hidden'
      whileInView='show'
      className="flex flex-col  h-auto px-10 py-5">
      <div className="flex md:flex-row flex-col  md:items-center items-start itmsjustify-center gap-5  py-10  ">
        <h1 className="lg:text-[64px]  text-[50px] font-bold text-white flex-1 ">Enter the Metaverse</h1>
        <button className="uppercase font-normal bg-[#25618B] px-6 py-5 rounded-[32px] text-white flex gap-2  ">
          <img src="headset.svg" alt="headset" />
          <p>Enter Metaverse</p></button>
      </div>
      <div className="flex md:flex-row flex-col md:items-center items-start border-t-[1px] border-t-white/20 pt-10  mt-[10px] relative gap-5 ">
        <div className="footer-gradient z-0"/>
        <h1 className="font-bold text-white text-[26px]">METAVERSUS</h1>
        <p className="text-secondary-white md:text-[17px] tex-[14px] md:flex-1 md:text-center">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <div className="flex justify-center gap-10"> 
          <img src="twitter.svg" alt="twitter"/>
          <img src="linkedin.svg" alt="linkedin" />
          <img src="instagram.svg" alt="instagram" />
          <img src="facebook.svg" alt="facebook" />
        </div>


      </div>
 
    </motion.div>
  </footer>
);

export default Footer;
