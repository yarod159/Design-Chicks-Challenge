import "./footer.css";
import Fc from "../../../../assets/social-networks/fc.png";
import Ig from "../../../../assets/social-networks/ig.png";
import Tw from "../../../../assets/social-networks/tw.png";
import Discord from "../../../../assets/social-networks/discord.png";
import Chicks from "../../../../assets/logo/chicks-logo.svg";
import Trust from "../../../../assets/icon/trustpilot.png";

function Footer() {
  return (
    <div className="container-footer">
      <div className="wrapper-footer-social-networks ">
        <div>
          <img src={Fc} alt="" />
        </div>
        <div>
          <img src={Ig} alt="" />
        </div>
        <div>
          <img src={Tw} alt="" />
        </div>
        <div>
          <img src={Discord} alt="" />
        </div>
      </div>

      <div className="wrapper-footer conteiner row">
        <div className="footer-col footer-cg-logo">
          <img src={Chicks} alt="" />
          <ul>
            <li>
              <a href="#">support@chicksgold.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Chicks Gold</h4>
          <ul>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-trust">
          <img src={Trust} alt="" />
          <p>Trustpilot Reviews</p>
        </div>
      </div>

      <div className="wrapper-footer-reserved">
        <div>
          <p>© 2017 - 2020 Chicksgold.com.</p> 
        </div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
