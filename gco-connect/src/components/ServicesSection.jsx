import ServiceCard from "./ServiceCard"
import interviewIcon from "../assets/interview.svg"
import ptaIcon from "../assets/pta.svg"
import consultationIcon from "../assets/consultation.svg"
import counselingIcon from "../assets/counseling.svg"

function ServicesSection() {
    const services = [
        {
            id: 1, 
            icon: interviewIcon,
            name: 'Interview', 
            description: "For gathering information that allows the counselor to learn about the student's needs and current state."
        }, 
        {
            id: 2, 
            icon: ptaIcon,
            name: "Psychological Test Administration", 
            description: "This is for students who were invited or referred to undergo pyschological testing."
        },
        {
            id: 3, 
            icon: consultationIcon,
            name: 'Consultation', 
            description: "For GENERAL concerns, inquiry, or follow-up."
        }, 
        {
            id: 4, 
            icon: counselingIcon,
            name: 'Counseling', 
            description: "Assists students with their adjustment concerns. It aims to help them reach their fullest potential."
        }
    ]

    return <section id="services" className="services">
        <div className="services-headings">
            <h1>A Better Way to Connect</h1>
            <p>The GCO Connect is a supportive space to empower you towards your wellbeing journey. The GCO associates are committed to creating emphatic atmosphere where everyone is respected and feels heard.</p>
        </div>


        <div className="services-grid">
            {services.map((service) => (
                <ServiceCard service = {service} key = {service.id} />
            ))}
        </div>

    </section>
}

export default ServicesSection 