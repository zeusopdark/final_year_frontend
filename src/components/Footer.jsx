
import React from "react";
import { Link } from "react-router-dom";
import {
  
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import "../styles/footer.css";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="social-icon" />,
  },
  {
    path: "https://Twitter.com/",
    icon: <AiFillTwitterCircle className="social-icon" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="social-icon" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiFillFacebook className="social-icon" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.container}>
        {/* Column 1 */}
        <div style={styles.footerSection}>
          <p style={styles.footerText}>
           
            <h2
              style={styles.footerLink}
             
              
            >
              Follow Us
            </h2>
          </p>

          <div style={styles.socialLinksContainer}>
            {socialLinks.map((link, index) => (
              <a href={link.path} key={index} style={styles.socialLink}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
                

        {/* Column 2 */}
        <div style={styles.footerSection}>
          <h2 style={styles.quickLinksHeading}>Quick Links</h2>
          <ul style={styles.quickLinksList}>
            <li style={styles.quickLinkItem}>
              <Link to="/home" style={styles.quickLink}>
                Home
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/AboutUs" style={styles.quickLink}>
                About Us
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/services" style={styles.quickLink}>
                Services
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/contact" style={styles.quickLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={styles.footerSection}>
          <h2 style={styles.quickLinksHeading}>Want To</h2>
          <ul style={styles.quickLinksList}>
            <li style={styles.quickLinkItem}>
              <Link to="/doctors" style={styles.quickLink}>
                Find a Doctor
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/appointments" style={styles.quickLink}>
                Request Appointment
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/" style={styles.quickLink}>
                Find a Location
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/" style={styles.quickLink}>
                Get an Opinion
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div style={styles.footerSection}>
          <h2 style={styles.quickLinksHeading}>Support</h2>
          <ul style={styles.quickLinksList}>
            <li style={styles.quickLinkItem}>
              <Link to="/" style={styles.quickLink}>
                Donate
              </Link>
            </li>
            <li style={styles.quickLinkItem}>
              <Link to="/" style={styles.quickLink}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  footerSection: {
    flex: 1,
    marginBottom: 20,
  },
  footerText: {
    marginBottom: 20,
    color:"black",
    marginLeft:10
  },
  footerLink: {
    color: "red",
    textDecoration: "none",
    fontSize: "1.2rem"
  },
  socialLinksContainer: {
    display: "flex",
    gap: 10,
    margin :10
  },
  socialLink: {
    color: "white",
    textDecoration: "none",
    fontSize:"large"
  },
  quickLinksHeading: {
    fontSize: "1.2rem",
    marginBottom: 10,
    color:"Red"
  },
  quickLinksList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    paddingLeft: 20,
  },
  quickLinkItem: {
    marginBottom: 8,
  },
  quickLink: {
    color: "#fff",
    textDecoration: "none",
  },



  
};

export default Footer;
