import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Let's do this together</h4>
          <ul>
            <li>For couriers</li>
            <li>For restaurants</li>
            <li>For stores</li>
            <li>For companies</li>
            <li>Wolt Drive</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>What we stand for</li>
            <li>Jobs</li>
            <li>Sustainability</li>
            <li>Security</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful links</h4>
          <ul>
            <li>Support</li>
            <li>Media</li>
            <li>Contact</li>
            <li>Speak up</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow us</h4>
          <ul>
            <li>Follow us</li>
            <li>Wolt blog</li>
            <li>Engineering blog</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-language">Lithuania</div>
        <div className="footer-language">English</div>
        <div className="footer-links">
          <a href="#">Accessibility</a>
          <a href="#">Accessibility Statement</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-copyright">©️ Wolt 2014–2023</div>
      </div>
    </footer>
  );
}

export default Footer;
