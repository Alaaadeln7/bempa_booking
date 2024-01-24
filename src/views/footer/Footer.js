import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <div className="logo-footer">
            <h1>bempa</h1>
            <p>hotels</p>
          </div>
          <p>Street: 3364 daylene drive city : long island </p>
          <p>+20 123 456 789</p>
          <p>bempa_hotels@gmail.com</p>
        </div>
        <div className="about">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a href="/" target="_blank">
                <FaFacebookF /> <p>Facebook</p>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <FaTwitter /> <p>Twitter</p>
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <FaInstagram /> <p>Instagram</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <p>subscribe to our newsletter</p>
          <div className="input">
            <input type="text" placeholder="Email Address" />
            <button className="btn">ok</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
