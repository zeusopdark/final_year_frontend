import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/serviceCard.css";

const ServiceCard = (item) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="service-card" key={item.id}>
      <h2>{name}</h2>
      <p>{desc}</p>

      <div className="flex-container">
        <Link
          to="/doctors"
          className="arrow-link"
        >
          <BsArrowRight className="arrow-icon" />
        </Link>

        <span
          className="badge"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
          }}
        >
          {item.id}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
