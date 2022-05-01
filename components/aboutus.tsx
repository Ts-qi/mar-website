import React , { useRef, useCallback,useState,useContext } from "react";
import Member from './member'
const HeadImgArr = [
  {
    id:'marc',
    name:'Marc',
    socialId:'@mrousavy',
    link: 'https://github.com/mrousavy'
  }
]
const AboutUs :React.FC = () => {
 return (
   <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl `}>
    <div className="container mx-auto px-11">
      <p className="max-w-5xl mx-auto text-4xl leading-tight tracking-tight">
        <strong> We will help you ship better apps,faster. </strong>
        Our team of export enginerrs has created thes best user experience in 
        some of the most popular apps worldwide 
      </p>
    </div>
    <div className="container mx-auto text-center px-11 mt-28">
      <h2 className="font-bold"> Our Team </h2>
      <div className="mt-2"> the spec-ops </div>
      <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-20 ">
           <Member
            id="marc"
            name="Marc"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
           />
          <Member
            id="szymon"
            name="Szymon"
            socialId="@szymon20000"
            link="https://github.com/Szymon20000"
           />
          <Member
           id="thomas"
           name="Thomas"
           socialId="@Thomas"
           link="https://github.com/Thomas"
          />  
          <Member
           id="janic"
           name="Janic"
           socialId="@Thomas"
           link="https://github.com/Thomas"
          />     
          <Member
          id="akinn"
          name="Akinn"
          socialId="@Thomas"
          link="https://github.com/Thomas"
         />     <Member
         id="mo"
         name="Mo"
         socialId="@Thomas"
         link="https://github.com/Thomas"
        />    
         <Member
        id="eric"
        name="Eric"
        socialId="@Thomas"
        link="https://github.com/Thomas"
       />     
        <Member
        id="matei"
        name="Matei"
        socialId="@Thomas"
        link="https://github.com/Thomas"
        /> 
         <Member
            id="viktoria"
            name="Viktoria"
            socialId="@Thomas"
            link="https://github.com/Thomas"
        /> 
      </div>
    </div>
   </section>
 )
}

export default AboutUs;