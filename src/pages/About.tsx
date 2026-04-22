import '../components/style.css';

export function About() {
  return (
    <div id='about' className="section">
      <div className='container'>
        <div className="about-badge">
          <i className="fas fa-shield-alt"></i> Who We Are
        </div>
        <h2 className="section-title">About STA</h2>
        <p className="section-subtitle">Your trusted partner in advanced IT and security solutions.</p>
        <div className="about-card">
          <p>Welcome to Security Technology Alarm (STA), your trusted partner in advanced 
          IT and security solutions. At STA, we are dedicated to safeguarding your assets with 
          state-of-the-art technology tailored to your specific needs. Our customer-centric approach 
          and technical expertise set us apart in the industry. With a commitment to excellence and 
          innovation, we specialize in delivering cutting-edge solutions that are both reliable and 
          effective.</p>
          <br/>
          <p>Our team of certified professionals brings a wealth of experience and knowledge to every project,
          ensuring that you receive the highest quality service. We understand the importance of security in 
          today's world, and we work tirelessly to provide systems that are not only robust but also adaptable 
          to evolving threats. From Domain and Exchange installations, Server Configurations, Server Backup and Restorations,
          CCTV to biometric systems and beyond, we offer comprehensive services designed to protect your most valuable resources.</p>
          <br/>
          <p>We are proud to have earned the trust of our clients and continue to strive for excellence in every 
          aspect of our work. Whether you're looking for a complete security overhaul or specialized IT services, 
          STA is here to deliver solutions that keep you secure and ahead of the curve.</p>
        </div>
        <hr className="section-separator" />
      </div>
    </div>
  );
}

export default About;
