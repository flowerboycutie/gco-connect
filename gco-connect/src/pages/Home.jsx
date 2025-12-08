import ServiceCard from "../components/ServiceCard"
import paraverseIcon from "../assets/icon-paraverse.svg"
import gcoConnect from "../assets/logo-gco-connect.svg"
import NavBar from "../components/NavBar"
import HomeSection from "../components/HomeSection"

function Home() {
    const services = [
        {
            id: 1, 
            name: 'Interview', 
            description: "For gathering information that allows the counselor to learn about the student's needs and current state."
        }, 
        {
            id: 2, 
            name: "Psychological Test Administration", 
            description: "This is for students who were invited or referred to undergo pyschological testing."
        },
        {
            id: 3, 
            name: 'Consultation', 
            description: "For GENERAL concerns, inquiry, or follow-up."
        }, 
        {
            id: 4, 
            name: 'Counseling', 
            description: "Assists students with their adjustment concerns. It aims to help them reach their fullest potential."
        }
    ]

    return <div>
        <NavBar />

        <HomeSection />

        {/* <section className="home">
            <div>
                <h1>Start Your Journey Towards Wellbeing</h1>
                <p>A seamless way to manage your appointments, including interviews, counseling, consultations, and psychological test administration.</p>
            </div>
            <div>
                <a href="#booking" className="book-btn">Book Now</a>
            </div>

        </section> */}
        
        {/* <section className="services" id="services">
        <div className="services-grid">
            {services.map((service) => (
                <ServiceCard service={service} key={service.id} />
            ))}
        </div>
        </section> */}
    </div>
} 

export default Home