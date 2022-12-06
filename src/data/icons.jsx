import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const icons = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={35} />
      </>
    ),
    href: "https://www.linkedin.com/in/mercedes-ramella",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={35} />
      </>
    ),
    href: "https://github.com/MechiRamella",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={35} />
      </>
    ),
    href: "mailto:ramellamercedes@gmail.com",
  },
];