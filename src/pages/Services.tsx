import Swal from 'sweetalert2';
import '../components/style.css';

interface Service {
  title: string;
  icon: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    title: 'CCTV Installation',
    icon: 'fas fa-video',
    description: 'Professional installation of CCTV systems for enhanced security.',
    details: 'We provide a full range of CCTV installation services, including system design, equipment sourcing, installation, and maintenance to ensure your security needs are fully met.'
  },
  {
    title: 'Exchange & Domain',
    icon: 'fas fa-exchange-alt',
    description: 'Expert management of exchange and domain services.',
    details: 'Our team handles everything from domain registration to email exchange management, ensuring seamless communication and domain management for your business.'
  },
  {
    title: 'Biometric Systems',
    icon: 'fas fa-fingerprint',
    description: 'Cutting-edge biometric systems for secure access control.',
    details: 'We offer advanced biometric solutions for secure access control, including fingerprint scanners, facial recognition systems, and more, tailored to your specific security requirements.'
  },
  {
    title: 'Technical Support',
    icon: 'fas fa-tools',
    description: 'Reliable technical support for all your IT needs.',
    details: 'Our technical support team is available 24/7 to assist with any IT issues you encounter, providing timely solutions to minimize downtime and keep your systems running smoothly.'
  },
  {
    title: 'Web Hosting',
    icon: 'fas fa-globe',
    description: 'Robust and reliable web hosting services.',
    details: 'We offer a range of web hosting solutions to ensure your website remains accessible and performs well, including shared hosting, VPS, and dedicated servers.'
  },
  {
    title: 'Server Installation',
    icon: 'fa fa-server',
    description: 'Professional server installation and configuration.',
    details: 'Our server installation services include hardware setup, software installation, and configuration, ensuring your server environment is optimized for performance and security.'
  }
];

export function Services() {
  const handleDetails = (service: Service) => {
    Swal.fire({
      title: service.title,
      text: service.details,
      icon: 'success',
      confirmButtonText: 'Close',
      customClass: {
        container: 'custom-swal-container',
        title: 'custom-swal-title',
        confirmButton: 'custom-swal-confirm-button'
      }
    });
  };

  return (
    <div id="services" className="section">
  <div className='container'>
    <h1 style={{ marginTop: '60px' }}>Our Services</h1>
    <div className="row justify-content-center">
      {services.map((service, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-sm" onClick={() => handleDetails(service)}>
            <div className="card-body text-center">
              <i className={`${service.icon} fa-3x mb-3`} aria-hidden="true"></i>
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
              <button className="card-button">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <hr className="section-separator" />
  </div>
</div>


  );
};

export default Services;
