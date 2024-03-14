import React from 'react'

import img2 from "../../assets/3.png";

export default function Narative() {
  return (
    <section className="container mt-20 text-white  flex justify-center ">
      <div className="">
        <div className="mb-14 text-center md:mb-14">
         <h1 className=' text-3xl md:text-5xl font-bold mb-10 underline'>HOW TO BUY</h1>
         <p className='mb-5 text-xl'>0xt5566667778</p>
         <p className='font-semibold italic'>Copy</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
          <div className=" w-full md:w-[700px] text-center md:text-left ">
            <p className="mb-5 leading-loose">
              Because serious investors look for a strong narrative before
              buying in, right? ​ Well, here you go! ​ Brett is pepe's college
              roommate and best friend. Once humid, summer morning and desperate
              for some relief from the hot sun, Brett made his way to the public
              pool to take a dip.
            </p>
            <p className="mb-5 leading-loose">
              He found himself alone there... alone and, as usual, horny. So he
              did what he usually does. The kid introduced himself as brett's
              long lost son, Bratt. Brett was confused. Bratt told him the story
              
            </p>

           
          </div>
          <div className="mb-5 md:mb-0 ">
            <img  className='w-[300px] md:h-full md:w-[500px]' src={img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
