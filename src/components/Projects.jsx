import React from "react";
import { data } from "../data/data";
import { ReactTyped } from "react-typed";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="projects" className="w-full  pt-20 pb-20 md:h-auto text-white bg-[#2ec4b6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold">
          <ReactTyped
                strings={["Projects"]}
                typeSpeed={120}
                backSpeed={1000}
                loop
              ></ReactTyped>
          </p>
          <p className="py-8 text-xl">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-10">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#0f766e] group container rounded-md py-4 px-4
              flex justify-center text-sm text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="bg-[#cbf3f0] opacity-0 group-hover:opacity-100 p-5 ">
                <span className="text-2xl font bold text-[#2ec4b6] tracking-wider">
                  <strong>{item.title}</strong>
                </span>
                <br/>
                <div className=" text-[#2ec4b6] text-left p-4">
                <span><strong>Role:</strong> {item.role}</span>
                <br/>
                <span><strong>Methodology:</strong> {item.methodology}</span>
                <br/>
                <span><strong>Description:</strong> {item.description}</span>
                <br/>
                <span><strong>Technologies: </strong> {item.technologies}</span>
                </div>
                <br/>
                <div className="text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.code} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2
                       bg-[#ffbf69] text-[#2ec4b6] font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;