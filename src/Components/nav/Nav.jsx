import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activenav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Replace with your actual section IDs
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust to fine-tune when sections are considered "in view"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activenav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activenav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activenav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#servieces"
        onClick={() => setActiveNav("#servieces")}
        className={activenav === "#servieces" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activenav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
