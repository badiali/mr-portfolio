import {tecnologies} from "../data/tecnologies";
import Typed from "react-typed";


const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-auto bg-[#fafaf9]  pt-20 pb-20 text-[#0f766e]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full">
        <div>
          <p className="text-4xl font-bold">
          <Typed
                strings={[" My Skills"]}
                typeSpeed={120}
                backSpeed={1000}
                loop
              ></Typed>
          </p>
          <p className="py-8 text-xl">
            These are the technologies I've worked with...
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
          {tecnologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;