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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aspernatur labore commodi, velit minima illo adipisci cumque veritatis ea laudantium temporibus iure facilis placeat aliquid numquam laboriosam ducimus magnam. Alias ut a sequi accusantium ullam libero ipsa nisi? Magnam officia eligendi natus molestiae, delectus magni quo sapiente reiciendis nostrum vero nemo suscipit ipsam possimus tempore optio minus ab mollitia ad!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
