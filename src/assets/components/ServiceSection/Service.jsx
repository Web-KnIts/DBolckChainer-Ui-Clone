import React from "react";
import "./Service.css";
import cardData from "./Card/data";
import Card from "../ServiceSection/Card/card"

const Service = () => {
  return (
    <section id="services">
      <div id="about-wrapper">
        <h1 className="text-center text-4xl font-bold">Our Services</h1>
        <p className="pt-3 text-center font-semibold text-xl text-gray-400">
          Offering exemplary personalized Blockchain and DeFi solutions <br />
          to start-ups and enterprises
        </p>

        <div className="card_wrapper mt-16 grid grid-cols-3 gap-6">
        {cardData.map((data) => (
          <Card
            key={data.id}
            img={data.img}
            head={data.head}
            parah={data.parah}
          />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
