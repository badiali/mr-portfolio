import React from "react";
import saludo from "../assets/home/saludo.png";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fafaf9]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full">
        <h1 className=" pt-20 text-4xl sm:text-6xl font-bold text-[#00df9a]">
          MERCEDES RAMELLA
        </h1>
        <h2 className="text-4xl py-4 sm:text-5xl font-bold text-[#FF9F1C]">
        Full Stack Developer
        </h2>
        <div>
        </div>
        <div className="h-auto m-autoflex items-button justify-center">
            <img src={saludo} className="rounded-xl" alt="/" />
          </div>
      </div>
 
    </div>
  );
};

export default Home;