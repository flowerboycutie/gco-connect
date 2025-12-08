import homePhoto from "../assets/home-photo.png"

function HomeSection() {

    return <section id="home" className="home">
            <div className="home-left">
                <div className="home-text-body">
                    <h1>Start Your Journey<br/>Towards Wellbeing</h1>
                    <p>A seamless way to manage your appointments, including interviews, counseling, consultations, and psychological test administration.</p>
                </div>
                <div className="home-btns">
                    <a href="#booking" className="book-btn">Book Now</a>
                    <a href="#learnMore" className="learn-btn">Learn More</a>
                </div>
            </div>
            <div className="home-right">
                <a><img src={homePhoto} alt="" /></a>
            </div>



    </section>
}

export default HomeSection