import paraverseIcon from "../assets/icon-paraverse.svg";
import gcoConnect from "../assets/logo-gco-connect.svg";
import profilePic from "../assets/profile-pic.svg"
import profilePicHover from "../assets/profile-pic-hover.svg"
import bell from "../assets/bell.svg"
import bellHover from "../assets/bell-hover.svg"
import { useState } from "react";

function NavBar() {
    const [bellSrc, setBellSrc] = useState(bell);
    const [profilePicSrc, setProfilePicSrc] = useState(profilePic);

    return <header className="header">
        <div className="left-icons">
            <a className="paraverse-icon">
                <img src={paraverseIcon} alt="Paraverse Icon" />
            </a>
            <a href="#home" className="gco-connect-icon">
                <img src={gcoConnect} alt="GCO Connect Icon" />
            </a>
        </div>

        <div className="right-side">
            <div className="navbar-and-book">
                <nav className="navbar">
                    <a href="#services">Services</a>
                    <a href="https://paraverse.feutech.edu.ph/gco-connect/appointments" target = "_blank">Appointments</a>
                    <a href="https://paraverse.feutech.edu.ph/gco-connect/history" target = "_blank">History</a>
                </nav>

                <a href="https://paraverse.feutech.edu.ph/gco-connect/booking" target = "_blank" className="book-btn">Book Now</a>
            </div>
            
            <div className="right-icons">
                <div className="notification-menu">
                    <a href="#notifications" className="bell" onMouseEnter={() => setBellSrc(bellHover)} onMouseLeave={() => setBellSrc(bell)}><img src={bellSrc} alt ="Notifications"/></a>
                    <div className="notification-dropdown">
                        <p>Notifications</p>
                    </div>
                </div>
                <div className="profile-menu">
                   <a href="#profile" onMouseEnter={() => setProfilePicSrc(profilePicHover)} onMouseLeave={() => setProfilePicSrc(profilePic)}><img src={profilePicSrc} alt="Profile Settings"/></a>
                   <div className="profile-dropdown">
                        <a href="#">My Profile</a>
                        <a href="#">Portal</a>
                        <a href="#">Sign Out</a>
                   </div>
                </div>

            </div>
        </div>
        
    </header>
}

export default NavBar