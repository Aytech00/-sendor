import React from 'react'
import img from "../../assets/icon.webp";
import img2 from "../../assets/1.png";
export default function AboutCoin() {
  return (
    <section className=" text-white  flex justify-center container">
      <div className="  py-20">
        <div className="flex items-center flex-col md:flex-row md:gap-x-20 justify-center ">
          <div className=" w-full mb-10 md:mb-0 md:w-[40%]  ">
            <img className=" " src={img2} alt="" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
