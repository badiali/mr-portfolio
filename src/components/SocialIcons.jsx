import React from "react";
import {icons} from "../data/icons";

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {icons.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[20px] duration-300"
          >
            <a
              className="flex justify-between items-center w-full text-[#0f766e]"
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;