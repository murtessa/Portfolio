import React from "react";
import "./testmonial.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.JPG";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "EagleLion System Technologies",
    review:
      "Your project is truly impressive and proves to be quite beneficial in our country. The user interface of your website is remarkably user-friendly, providing a seamless experience for visitors. Additionally, the internal data structure on the backend is exceptionally well-designed.",
  },

  {
    avatar: AVTR2,
    name: "Tech4Good",
    review:
      "Huge congratulations on the success of your project, which has been named the winner among the Tech4Good projects of Seeds for the Future! We truly appreciate and commend the innovative work you've accomplished.  ",
  },

  {
    avatar: AVTR3,
    name: "Tolassa Beka",
    review:
      "The e-commerce system you developed for my shop is exceptionally impressive. It streamlines operations, efficiently manages inventory and sales, and significantly reduces the effort required while addressing key challenges in my business.",
  },
];
const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5> Reveiw from Client</h5>
      <h2>Testmonials</h2>

      <Swiper
        className="container testmonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testmonials">
              <div className="client_avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client_name"> {name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testmonials;
