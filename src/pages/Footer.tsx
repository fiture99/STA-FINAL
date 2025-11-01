// src/components/Footer.js

// import React from 'react';
import '../components/style.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>Follow Us</h5>
            <ul className="social-links">
              <li><a href="" className="social-icon"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="" className="social-icon"><i className="fab fa-twitter"></i></a></li>
              <li><a href="" className="social-icon"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="" className="social-icon"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <p className="mt-4">&copy; {new Date().getFullYear()} STA. All rights reserved.</p>
            <p>Website built by <a href="https://nyakoi-services.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Nyakoi Services</a></p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
