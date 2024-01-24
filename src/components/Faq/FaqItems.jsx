import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../../styles/faqitem.css";

const FaqItems = ({ faq, isOpen, toggleAction }) => {
  return (
    <div className={`faq-container ${isOpen ? "open" : ""}`} onClick={toggleAction}>
      <div className="faq-header">
        <h4>{faq.question}</h4>
        <div className={`faq-icon-container ${isOpen ? "open" : ""}`}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="faq-content">
          <p>{faq.content}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItems;
