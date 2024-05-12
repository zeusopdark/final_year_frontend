import React, { useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
const url = process.env.REACT_APP_DOMAIN;
const BookAppointment = ({ setModalOpen, ele }) => {
  const { userInfo } = useSelector((state) => state.root);
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await toast.promise(
        axios.post(
          `${url}/api/appointment/bookappointment`,
          {
            doctorId: ele?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Opening Payment Gateway",
          error: "Unable to book appointment",
          loading: "Booking appointment...",
        }
      );
      setModalOpen(false);
      if (data.success) {
        completePayment(data.result._id);
      }
    } catch (error) {
      return error;
    }
  };

  const completePayment = async (id) => {
    try {
      const {
        data: { key },
      } = await axios.get(`${url}/api/payment/getkey`);

      if (!key) {
        return toast.error("Something went wrong");
      }

      const {
        data: { order },
      } = await axios.post(`${url}/api/payment/checkout`, {
        amount: parseInt(ele.fees),
      });

      if (!order) {
        return toast.error("Order can't be fetched");
      }

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Payment",
        description: "Razorpay tut",
        image: `${userInfo.avatar.url}`,
        order_id: order.id,
        callback_url: `${url}/api/payment/paymentVerification?doctorId=${ele.userId._id}&userId=${userInfo._id}&appointmentId=${id}`,
        prefill: {
          name: `${userInfo.firstname + userInfo.lastname}`,
          email: "ankit@gmail.com",
          contact: "9876543210",
        },
        notes: {
          address: "razorpay official",
        },
        theme: {
          color: "#FF0000",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Book Appointment</h2>
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className="close-btn"
          />
          <div className="register-container flex-center book">
            <form className="register-form">
              <input
                type="date"
                name="date"
                className="form-input"
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                type="time"
                name="time"
                className="form-input"
                value={formDetails.time}
                onChange={inputChange}
              />
              <button
                type="submit"
                className="btn form-btn"
                onClick={bookAppointment}
              >
                Pay &#x20B9;{ele.fees} to Book.
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
