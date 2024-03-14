import React from "react";

import img2 from "../../assets/2.png";


export default function Who() {
  return (
    <div className=" ">
      <div className="container text-white md:py-14">
        <div>
          <div className="flex flex-col-reverse md:flex-row  items-center ">
            <img
              className=" w-[400px] md:w-[600px] md:h-[540px]"
              src={img2}
              alt=""
            />
            <div className=" ">
              <h1 className=" text-center md:text-left text-3xl md:text-5xl underline font-semibold mb-5 md:mb-10">
                ABOUT
              </h1>
              <p className="leading-loose md:text-left text-center md:textle">
            NO TAXES, NO TEAM SUPPLY, NO ANYTHING, ONLY SEND THIS
                COIN WAS MADE BY THE COMMUNITY FOR THE COMMUNITY LETS BREAK 100
                MILLION MARKET CAP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
