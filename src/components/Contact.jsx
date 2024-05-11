import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <h2 style={styles.heading}>Contact Us</h2>

          <div style={styles.contactInfo}>
            <div style={styles.infoItem}>
              <h3 style={styles.infoTitle}>Address</h3>
              <p style={styles.infoText}>India</p>
            </div>

            <div style={styles.infoItem}>
              <h3 style={styles.infoTitle}>Phone</h3>
              <p style={styles.infoText}>9999999999</p>
            </div>

            <div style={styles.infoItem}>
              <h3 style={styles.infoTitle}>Email</h3>
              <p style={styles.infoText}>onlinemedicare@gmail.com</p>
            </div>
          </div>

          <form style={styles.form}>
            <label style={styles.label} htmlFor="name">
              Subject:
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              required
            />

            <label style={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              required
            />

            <label style={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              style={styles.textarea}
              id="message"
              name="message"
              rows="4"
              required
            />

            <button style={styles.submitButton} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f4f4",
  },
  contentContainer: {
    width: "80%",
    maxWidth: "800px",
    padding: "40px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  infoItem: {
    flex: 1,
    marginRight: "20px",
  },
  infoTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  infoText: {
    fontSize: "1rem",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
  },
  submitButton: {
    padding: "10px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Contact;
