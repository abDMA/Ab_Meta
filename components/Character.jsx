'use client';
const Character = ({top1,left1, w1,h1,top2,left2,ppl ,src2,top3,left3,w2,h2}) =>(
<div><div className="" >
    <img src='./Union.png' alt="" className={`absolute ${w1} ${h1}  ${top1} ${left1}   object-contain  z-1`}/>
</div> 
<div>
<div className={`${ppl} ${top2} ${left2} z-10 `}/>
<img src={src2} alt="" className={`absolute ${top3} ${left3} ${w2} ${h2}`} />
</div>
</div>
)
export default Character
  

