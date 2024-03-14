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
          <div className="  w-full text-center md:text-left  md:w-[40%] text-[15px]  ">
            <p className="leading-loose">
              Leading Bratt is a highly skilled and experienced incubation team,
              well-versed in the art of launching successful crypto projects.
              With a rich history of navigating the complexities of the crypto
              market, this team possesses the connections, knowledge, and
              expertise necessary to propel Bratt to new heights. Their
              strategic vision combines innovative technology with robust
              community engagement, ensuring Bratt is not just a token but a
              movement. expertise necessary to propel Bratt to new heights.
              Their strategic vision combines innovative technology with robust
              community engagement, ensuring Bratt is not just a token but a
              movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
