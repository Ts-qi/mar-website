import React, { useContext, useRef } from "react";
import s from '../styles/skills.module.css'
import { ScrollContext } from "../utils/scroll-observer";
const opacityForBlock = (sectionProgress: number, bolckNo: number) => {
  const progress = sectionProgress - bolckNo;
  if (progress >=0 && progress < 1) return 1
  return 0.2
}
const Skills :React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  const numOfPage = 3 
  let progress = 0
  const { current: elContainer } = refContainer;
  if(elContainer) {
    const { clientHeight,offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH/2
    const percentY = Math.min(
      clientHeight + halfH,
      Math.max(-screenH,scrollY - offsetTop) + halfH
    )/ clientHeight;
    progress = Math.min(numOfPage - 0.5 ,Math.max(0.5,percentY * numOfPage))
    console.log(scrollY,'scrollY');
    console.log(screenH,'screenH');
    console.log(halfH,'halfH');
    console.log(percentY,'percentY');
    console.log(progress,'progress');
    
  }
  return (
    <div className="text-white bg-black" ref={refContainer}>
      <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen px-10 py-24 mx-auto text-4xl font-semibold tracking-tight lg:px-20 md:py-28 lg:py-36 md:text-6xl lg:text-7xl">
        <div className="leading-[1.15]">
         <div className={s.skillText} style={{
           opacity: opacityForBlock(progress,0)
         }}> We know our tools inside out.</div>
          <span className={`${s.skillText} inline-block after: content-['_']`} 
           style={{
            opacity: opacityForBlock(progress,1)
          }}> Our team has contributed 123 commits to React Native core,
            powering thousands of apps worldwide.
          </span>
          <span className={`${s.skillText} inline-block`}
           style={{
            opacity: opacityForBlock(progress,2)
          }}>
          We're maintaining some of the most popular open-source 
          projects, with over <strong>1,234</strong> million downloads.
          </span>
        </div>
      </div>
    </div>
  )
}
export default Skills