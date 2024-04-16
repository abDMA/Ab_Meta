'use client';
import {motion} from 'framer-motion';
import styles from '../styles'
import {fadeIn } from '../utils/motion'
const ExploreCard = ({id,imgUrl,title,index,active,hundleClick}) => (
  <motion.div variants={fadeIn('right','spring',index * 0.5 ,0.75)} className={`relative ${active === id ? 'h-[200px] lg:flex-[1.5] md:flex-[1]   ': 'md:flex-[0.5] flex-[2]'
  }flex items-center justify-center md:min-w-[130px] md:h-[500px] sm:h-[200px] h-[160px] transition-all   duration-[0.7s] ease-out-all 
  cursor-pointer`} onClick={()=>hundleClick(id)}>
    <img src={imgUrl} alt={title} className='absolute w-full h-full rounded-[24px] object-cover'  />
    {active !== id ? (
      <h3 className='font-semibold lg:text-[22px] text-[17px] text-white absolute z-0 sm:bottom-20  bottom-10 left-2 sm:rotate-[-90deg]  sm:origin-[0,0] rotate-[0deg]  '>{title}</h3>
    ):(
      <div className='absolute bottom-0 lg:p-8 md:p-3 p-2  justify-start w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
        <div className={`${styles.flexCenter}  
        lg:w-[60px] lg:h-[60px] h-[30px] w-[30px] rounded-[24px] glassmorphism mb-[16px]`} >
          <img src="/headset.svg" alt="headset" className='lg:w-1/2 lg:h-1/2  w-[50%] h-[50%]object-contain' />

        </div>
        <p className='font-normal lg:text-[14px]  text-[13px] leading-[20px] text-white uppercase'>Enter the Metaverse</p>
        <h2 className='lg:mt-[24px] mt-[6px] font-semibold sm:text-[22px]  text-[15px] text-white'>{title}</h2>
      </div>
    )}
    
   
  </motion.div>
);

export default ExploreCard;
 