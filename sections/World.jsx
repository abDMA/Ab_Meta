'use client';
import {motion} from 'framer-motion';
import styles from '../styles'
import {staggerContainer,fadeIn} from '../utils/motion'
import {MapCard,Character,TitleText,TypingText } from '../components';


const  World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once:false ,amount:0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col justify-center leading-[50px] capitalize` }>
    <TypingText textStyle='text-center' title='| people on the world'/>
    <TitleText textStyle='text-center' title={(<>Track friends around you and invite them to play together in the same world</>)}/>
    <motion.div
    variants={fadeIn('up','tween',0.3 ,1)} className='relative mt-[68px] flex w-full h-[550px] '>
      <img src="map.png" alt="map"  className='w-full h-full object-contain '/> 
    <MapCard position='right' right='lg:right-[238px] sm:right-[80px]  right-[60px]' top='lg:top-[47px] top-[210px] sm:top-[180px] ' src='map-1.svg' gradient='icon-gradient' title='hawkins labs' />
    {/*--------------------------------------------*/}
    <MapCard position='left' right='lg:right-[820px] sm:right-[400px] md:right-[470px] right-[220px]' top='lg:top-[210px] md:top-[270px] top-[250px]' src='map-2.svg' 
    gradient='icon-gradient2' title='the upside down'  />
    
    {/*---------------------------------*/}
    <Character  w1='lg:w-[103px] md:w-[50px] w-[33px]' h1='lg:h-[105px] md:h-[55px] h-[35px]' top1='lg:top-[35px] md:top-[130px] top-[210px]' left1='lg:left-[116px] md:left-[70px] left-[25px]' ppl='ppl' top2='lg:top-[40px] md:top-[113px] top-[213px]' left2='lg:left-[137px] md:left-[75px] left-[33px]' src2='p1.svg' top3='lg:top-[18px] md:top-[135px] top-[214px]' left3='lg:left-[144px] md:left-[82px] left-[34px]' w2='lg:w-[48px] md:w-[25px] w-[15px]' h2='lg:h-[105px] md:h-[25px] h-[15px]'/>
    {/*-----------------------------------*/}
    <Character  w1='lg:w-[103px] md:w-[50px] w-[33px]' h1='lg:h-[105px] md:h-[55px] h-[35px]' top1='lg:top-[225px] md;top-[130px] top-[257px]' left1='lg:left-[606px] md:left-[330px] left-[145px]' ppl='ppl1' top2='lg:top-[230px] md:top-[253px] top-[260px]' left2='lg:left-[628px] md:left-[330px] left-[152px]' src2='p2.svg' top3='lg:top-[208px] md:top-[262px] top-[261px]' left3='lg:left-[634px] md:left-[342px] left-[154px] ' w2='lg:w-[48px] md:w-[25px] w-[15px]' h2='lg:h-[105px] md:h-[25px] h-[15px]'/>
    {/*-------------------------------------*/}
    <Character  w1='lg:w-[103px] md:w-[50px] w-[33px]' h1='lg:h-[105px] md:h-[55px] h-[35px]' top1='lg:top-[350px] md:top-[330px] top-[295px]' left1='lg:left-[1026px] md:left-[595px] left-[270px]' ppl='ppl2' top2='lg:top-[355px] md:top-[329px] top-[298px]' left2='lg:left-[1048px] md:left-[590px] left-[278px] ' src2='p3.svg' top3='lg:top-[333px] md:top-[336px] top-[299px]' left3='lg:left-[1054px] md:left-[608px] left-[279px]' w2='lg:w-[48px] md:w-[25px] w-[15px]' h2='lg:h-[105px] md:h-[25px] h-[15px]'/>
    </motion.div>
   

    

    

  </motion.div>
  </section>
);

export default World;
