import '../components/style.css';

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
            <hr className="footer-divider" />
            <p>&copy; {new Date().getFullYear()} Security Technology Alarm (STA). All rights reserved.</p>
            <p>Website built by <a href="https://nyakoi-services.onrender.com/" target="_blank" rel="noopener noreferrer">Nyakoi Services</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
