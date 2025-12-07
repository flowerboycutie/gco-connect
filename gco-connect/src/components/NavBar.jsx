import paraverseIcon from "../assets/icon-paraverse.svg";
import gcoConnect from "../assets/logo-gco-connect.svg";
import profilePic from "../assets/profile-pic.png"
import bell from "../assets/bell.svg"

function NavBar() {
    return <header className="header">
        <div className="left-icons">
            <a className="paraverse-icon">
                <img src={paraverseIcon} alt="Paraverse Icon" />
            </a>
            <a href="#home" className="gco-connect-icon">
                <img src={gcoConnect} alt="GCO Connect Icon" />
            </a>
        </div>

        <nav className="navbar">
            <a href="#services">Services</a>
            <a href="#appointments">Appointments</a>
            <a href="#history">History</a>
            <a href="#booking" className="book-btn">Book Now</a>
        </nav>

        <div className="right-icons">
            <a href="#notifications"><img src={bell} /></a>
            <a href="#profile"><img src={profilePic} /></a>
        </div>
    </header>
}

export default NavBar