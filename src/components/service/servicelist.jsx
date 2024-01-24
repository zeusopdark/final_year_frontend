import React from "react";
import ServiceCard from "./servicecard";
import { services } from "../../data/services";
import "../../styles/servicelist.css";

const ServiceList = () => {
  return (
    <>
    
      <h1 style={{textAlign:"center",margin:"2rem 0"}}>Our Services</h1>
      <div className="grid">
      {services.map((item) => (
        <ServiceCard {...item} key={item.id} />
      ))}
    </div>
  
    </>
   
  );
};

export default ServiceList;
