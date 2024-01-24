import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiStar } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/test.css";


const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={""} alt="avatar" className="avatar" />
              <div>
                <h4 className="patient-name">SSS</h4>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">
              “ I have taken medical services from them. They treat so well and they are
              providing the best medical services. ”
            </p>
          </div>
        </SwiperSlide>

        {/* Additional SwiperSlides go here... */}

      </Swiper>
    </div>
  );
};

export default Testimonial;
