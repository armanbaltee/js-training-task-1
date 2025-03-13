import React from "react";
import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";
import fb from "../assets/images/facebook.png";
import insta from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import tiktok from "../assets/images/tiktok.png";
import yt from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <div className="">
      <div className="footer-area">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div></div>
          <div className="social-media-icon">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={linkedin} alt="" />
            <img src={tiktok} alt="" />
            <img src={yt} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="">
            <p id="info">
              We are a fast growing full scale digital agency with <br />{" "}
              multiple Certifications and Partnerships. Our team <br /> is proud
              to be featured in multiple publications <br /> globally.
            </p>
          </div>
          <div className="action-link">
            <ul id="list">
              <li>
                <h3>Information</h3>
              </li>
              <li>
                <h5>About Company</h5>
              </li>
              <li>
                <h5>Blog</h5>
              </li>
              <li>
                <h5>Careers</h5>
              </li>
              <li>
                <h5>Contact Us</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="country-location">
          <div className="box">
            <div className="USA">
              <h2>USA</h2>
              <p>Suite 220, 555 republic drive, Plano, Taxes. USA 75074</p>
              <p>(469) 781-8845</p>
              <p>info@pixarsart.com</p>
              <a href="https://www.google.com/maps/place/Pixarsart+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x238a22242807b571:0x4a69fd1cc37a92d9!8m2!3d51.5286416!4d-0.1015987!16s%2Fg%2F11vx3m52ys?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D">
                See Location
              </a>
            </div>
            <div className="UK">
              <h2>UK</h2>
              <p>Loughton Essex, UK, IG10 3GW</p>
              <p>07778 270656</p>
              <p>osama@pixarsart.co.uk</p>
              <a href="https://www.google.com/maps/place/Pixarsart+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x238a22242807b571:0x4a69fd1cc37a92d9!8m2!3d51.5286416!4d-0.1015987!16s%2Fg%2F11vx3m52ys?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D">
                See Location
              </a>
            </div>
          </div>
          <div className="box">
            <div className="ASIA">
              <h2>ASIA</h2>
              <p>NICHS 2, Lahore, Pakistan</p>
              <p>(0334) 749 - 2777</p>
              <p>careers@pixarsart.com</p>
              <a href="https://www.google.com/maps/place/Pixarsart+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x238a22242807b571:0x4a69fd1cc37a92d9!8m2!3d51.5286416!4d-0.1015987!16s%2Fg%2F11vx3m52ys?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D">
                See Location
              </a>
            </div>
            <div className="UAE">
              <h2>UAE</h2>
              <p>
                Dubai Media City Building 08 Al Sufouh 2 - Dubai - United Arab
                Emirates
              </p>
              <p>Licence #: 102808</p>
              <p>(971) 58 - 565 - 5166</p>
              <a href="https://www.google.com/maps/place/Pixarsart+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x238a22242807b571:0x4a69fd1cc37a92d9!8m2!3d51.5286416!4d-0.1015987!16s%2Fg%2F11vx3m52ys?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D">
                See Location
              </a>
            </div>
          </div>
        </div>
        <div className="location">
          <div class="form-container">
            <h3>Address Selection</h3>

            <div class="input-group">
              <input type="text" id="address" />
              <label for="address">Address</label>
            </div>

            <div class="input-group">
              <input type="text" id="apt" />
              <label for="apt">Apt, Suite, etc (optional)</label>
            </div>

            <div class="input-group">
              <input type="text" id="city" />
              <label for="city">City</label>
            </div>

            <div class="row">
              <div class="input-group column">
                <input type="text" id="state" />
                <label for="state">State/Province</label>
              </div>
              <div class="input-group column">
                <input type="text" id="zip" />
                <label for="zip">Zip/Postal code</label>
              </div>
            </div>

            <div class="input-group">
              <input type="text" id="country" />
              <label for="country">Country</label>
            </div>

            <button>Visit us</button>
          </div>

          <div className="location-img"></div>
        </div>
      </div>
      <div className="white-line"></div>
      <p className="copyright">
        All Rights Reserved © 2025, Pixarsart Studios LLC & Pixarsart Studios
        (PVT) LTD
      </p>
    </div>
  );
};

export default Footer;
