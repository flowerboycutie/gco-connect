import homePhoto from "../assets/home-photo.png"

function HomeSection() {

    return <section id="home" className="home">
            <div className="home-left">
                <div className="home-text-body">
                    <h1>Start Your Journey<br/>Towards Wellbeing</h1>
                    <p>A seamless way to manage your appointments, including interviews, counseling, consultations, and psychological test administration.</p>
                </div>
                <div className="home-btns">
                    <a href="https://paraverse.feutech.edu.ph/gco-connect/booking" target = "_blank" className="book-btn-home">Book Now</a>
                    <a href="#services" className="learn-btn">Learn More</a>
                </div>
            </div>
            <div className="home-right">
                <img src={homePhoto} alt="" />
            </div>



    </section>
}

export default HomeSection