import '../components/style.css'

export function Home(){
    return(
        <div className="background">
            <div className="welcome">
                <h2 className="wel">Welcome to <span>Security Technology Alarm</span></h2>
                <p>At STA, we are dedicated to providing top-tier security and technology solutions tailored to meet the unique needs of our clients in The Gambia and beyond.</p>
                <div>
                    <a href="#services" className="hero-btn">Our Services</a>
                    <a href="#contact" className="hero-btn hero-btn-outline">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
