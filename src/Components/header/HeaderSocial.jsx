import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="http://linkedin.com/in/murtessa-jabesa-a36998295"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/murtessa"
        target="_blank"
        rel="noreferrer noopener"
      >
        {" "}
        <FaGithub />
      </a>
      <a
        href="https://dribbble.com/murtii_ja"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsDribbble />
      </a>
    </div>
  );
};
export default HeaderSocial;
