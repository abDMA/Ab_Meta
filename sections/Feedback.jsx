'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
const Feedback = () => (
  <section className="relative z-10">
    <motion.div 
    variants={ staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:'false',amount:'0.25'}} 
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 p-[40px]`}>
      <motion.div variants={fadeIn('right','tween',0.2,1)} className="flex-[0.5] lg:max-w-[370px]  flex justify-end flex-col gradient-05 p-8  rounded-[32px] border-[1px] border-[#6a6a6a] relative" >
        <div className="feedback-gradient"></div>
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[35px] text-white">Samantha</h4>
          <p className="mt-[8px ] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white" >Founder | Metaversus</p>
        </div>
        <p className="mt-[24px ] font-normal sm:text-[18px] text-[12px] sm:leading-[44px] leading-[39px] text-white">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        <a href="#explore">
        <motion.img   animate={{
        rotate: [360,0],
      }}
      transition={
        {duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
         }
      } 
        src="stamp.png"  className="lg:w-[155px] lg:h-[155px] w-[140px] h-[140px] absolute lg:top-[55px] lg:left-[300px] md:bottom-[185px] md:left-[129px] sm:mt-[51px] sm:mr-[-270px] sm:top-[165px] sm:right-[550px] z-10 rotate-[-20deg]" />
        </a>
       
      </motion.div>
      <motion.div variants={fadeIn('left','tween',0.2 ,1 )} className=" relative flex-1 flex justify-center items-center">
        <img src="planet-09.svg" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] " />

      </motion.div>

</motion.div>

  </section>
  );

export default Feedback;
