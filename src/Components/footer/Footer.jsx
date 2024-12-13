import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import IMG1 from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        <img src={IMG1} alt="" />
      </a>

      <ul className="personalink">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#servieces">Servieces</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testimonals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/murtessa.jabessa">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/murtessajabessa/">
          <BsInstagram />
        </a>
        <a href="https://x.com/MJabesa98937">
          {" "}
          <BsX />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Web Developer 2024 All Right is Reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
