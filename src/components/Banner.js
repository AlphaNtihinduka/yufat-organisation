import React from "react";
import Typewriter from 'typewriter-effect'

const Banner = () => (
  
  <div className="banner">
  <div className='sub-banner'>
  <h1 className='banner-title'> YOUTH UNITED FOR AFRICAN TRANSFORMATION</h1>
   <p className='banner-para'>Join the Community that believes 
   <Typewriter options= {{
       autoStart: true,
       loop: true,
       delay: 40,
       strings: [
         "Disabity is not inablility",
         "Digital literacy is improtant in education",
         "Technology has no gender difference",
         "Refugees are capable in digital community",
       ]
     }} />
   </p>
  </div>
</div>
)

export default Banner