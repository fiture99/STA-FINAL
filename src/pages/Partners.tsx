import '../components/style.css';
import trustbank from '../assets/trustbank.svg'
import gbos from '../assets/gbos.svg'
import radville from '../assets/radvile.svg'

export function Partners() {
  return (
    <div id='partners' className="section">
      <div className="container">
        <div className="about-badge">
          <i className="fas fa-handshake"></i> Trusted By
        </div>
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">We work alongside leading organizations to deliver excellence.</p>
        <div className="partners-grid">
          <div className="partner-card">
            <img src={trustbank} className='pat-image' alt='TrustBank' />
          </div>
          <div className="partner-card">
            <img src={gbos} className='pat-image' alt='GBOS' />
          </div>
          <div className="partner-card">
            <img src={radville} className='pat-image' alt='Radville' />
          </div>
        </div>
        <hr className="section-separator" />
      </div>
    </div>
  );
}

export default Partners;
