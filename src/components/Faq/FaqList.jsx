import React from "react";
import FaqItem from "./FaqItems.jsx";
import { faqs } from "../../data/faqs.js";
import { useState } from "react";

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ marginTop: "38px", marginBottom: "38px" }}>
      {faqs.map((faq, index) => (
        <FaqItem
          faq={faq}
          key={index}
          isOpen={index === openIndex}
          toggleAction={() => toggleItem(index)}
          style={{ marginTop: index === 0 ? "0" : "20px" }}
        />
      ))}
    </div>
  );
};

export default FaqList;
