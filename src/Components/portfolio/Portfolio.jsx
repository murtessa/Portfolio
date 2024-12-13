import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/portfolio1.png";

import IMG1 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "AI Desease Detection Healthcare",
    github:
      "https://github.com/murtessa/Symptom-Based-Disease-Diagnosis-Web-App-Machine-Learning-Project",
    demo: "https://dribbble.com/shots/16953669-Forex-Brokerage-Landing-Page",
  },

  {
    id: 2,
    image: IMG2,
    title: "Event Management System",
    github: "https://github.com/lalisabl/eventManagement",
    demo: "https://dribbble.com/shots/15634674-Rental-service",
  },

  {
    id: 3,
    image: IMG3,
    title: "Wedshop e-commerce Platform",
    github: "http://github.com/murtessa",
    demo: "https://dribbble.com/shots/19696436-Health-Wellness-App",
  },

  {
    id: 4,
    image: IMG4,
    title: "Food Donation System ",
    github:
      "https://github.com/murtessa/Waste-Food-management-and-donation-system",
    demo: "https://dribbble.com/shots/22894081-Employee-management-HRM-Web-application-system",
  },
  {
    id: 5,
    image: IMG5,
    title: "Online brokerage system",
    github: "https://github.com/murtessa/Brokerage-system",
    demo: "https://dribbble.com/shots/19990575-Pharmacy-logo",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href = {demo} className='btn btn-primary'
                     target='_blank'>Live Demo</a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
