import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.jpg";
import twitter from "../../images/twitter1.png";
import insta from "../../images/insta.jpg";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <img className="icon-img" src={facebook} alt="" />
          </a>
          <a href="#">
            <img className="icon-img" src={twitter} alt="" />
          </a>
          <a href="#">
            <img className="icon-img" src={insta} alt="" />
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
              Home
            </a>

            <a href="#">Our Service</a>

            <a href="#">About Us</a>

            <a href="#">Contact Us</a>
          </p>

          <p>
            <> BITFOUNTAIN LTD</> &copy; 2015
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
