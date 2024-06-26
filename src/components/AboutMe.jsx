import React from "react";
import Foto from "../assets/about/fotohome.png";
import Resume from "../assets/about/ResumeMercedesRamella.jpg";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-[#cbf3f0] text-[#0f766e]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4 pt-20">
            <p className="text-[#ff9f1c] text-4xl font-bold">
              <ReactTyped
                strings={["About me"]}
                typeSpeed={120}
                backSpeed={1000}
                loop
              ></ReactTyped>
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ml:500">
          <div>
            <div className="sm:text-left text-4xl py-6 font-bold">
              <p>You can call me Mechi...</p>
            </div>
            <div>
              <p className=" text-xl">
                I am <em>Full Stack Developer and an Architect</em> as well.
                <br />
                I did a Bootcamp, in Programming in JavaScript language, in
                September of this year.
                <br />
                I find many similarities between both professions: from the way
                of working, of approaching a project and achieving its
                execution. I discovered that The Technology, also allows me to
                continue doing what I am passionate about: "designing and
                developing experiences to make people's lives easier".
                <br />
                <br />
                This is the beginning of a great path, to keep learning and
                continue challenging myself!
              </p>
              <br />
            </div>
          </div>
          <div className="h-auto m-autoflex items-right justify-right">
            <img src={Foto}  alt="/" />
          </div>
        </div>
        <div className="pb-20 pt-10">
          <a href={Resume} download className="btn">
            <button className="text-[#0f766e] ] bg-[#00df9a] border-[#00df9a] bordergroup border-2 px-6 py-3 my-2 flex justify-center items-center rounded-md text-white hover:bg-[#ff9f1c] hover:border-[#ff9f1c] hover:text-white">
              Download my Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
