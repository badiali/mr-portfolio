import React from "react";
import Typed from "react-typed";
import mapa from "../assets/contact/contact.png";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-auto bg-[#fafaf9] text-[#FF9F1C]">
      <div className="flex flex-col justify-center items-center w-full h-full pb-10 ">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ml:500 ">
          <form
            method="POST"
            action="https://getform.io/f/e9a3b601-5caa-4924-8809-d2cfaa0adc88"
            className="flex flex-col max-w-[600px] w-full"
          >
            <p className="text-[#FF9F1C] text-4xl font-bold pt-20">
              <Typed
                strings={["Contact me"]}
                typeSpeed={120}
                backSpeed={1000}
                loop
              ></Typed>
            </p>
            <p className="text-[#FF9F1C] py-8 text-xl ">
              Submit the form below or shoot me an email:
              <br />
              <em>ramellamercedes@gmail.com</em>
            </p>
            <input
              className="p-2 bg-transparent border-2 rounded-md text-[#0f766e] focus:outline-none border-[#ffbf69]"
              type="text"
              placeholder="Name..."
              name="name"
              required
            />
            <input
              className="my-4 p-2 bg-transparent border-2 rounded-md text-[#0f766e] border-[#ffbf69]"
              type="email"
              placeholder="Email..."
              name="email"
              required
            />
            <textarea
              className=" p-2 bg-transparent border-2 rounded-md text-[#0f766e] focus:outline-none border-[#ffbf69]"
              name="message"
              rows="8"
              placeholder="Message..."
              required
            ></textarea>
            <button className="text-white bg-[#00df9a] rounded-md  hover:bg-[#FF9F1C] hover:border-[#FF9F1C] px-4 py-3 my-8 mx-auto flex items-center">
              Let's in Contact
            </button>
          </form>

          <div className=" pt-20 h-auto m-auto items-right justify-center">
            <img src={mapa} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
