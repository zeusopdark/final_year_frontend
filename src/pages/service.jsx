import React from "react";
import ServiceCard from "../components/service/Servicecard";
import { services } from "../data/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Services = () => {
  return (
    <>
      <Navbar/>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {services.map((item) => {
              return(<ServiceCard {...item} key={item.id} />);
})}
          </div>
        </div>
      </section>
     <Footer/>
    </>
  );
};

const styles = {
  section: {
    marginTop: "5px",
    marginBottom: "10px",
  },
  container: {
    margin: "0 auto",
    padding: "0 15px",
    maxWidth: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "5px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
    },
  },
};

export default Services;
