import paraverseIcon from "../assets/icon-paraverse.svg"
import gcoConnect from "../assets/logo-gco-connect.svg"
import gcoConnectSmall from "../assets/logo-gco.svg"
import profilePic from "../assets/profile-pic.svg"
import profilePicHover from "../assets/profile-pic-hover.svg"
import bell from "../assets/bell.svg"
import bellHover from "../assets/bell-hover.svg"
import { useEffect, useState, useRef } from "react"
import menuIcon from "../assets/menu-icon.png"
import x from "../assets/x.png"

function NavBar() {
    // const [gcoSrc, setGcoSrc] = useState(gcoConnect); 
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [menuSrc, setMenuSrc] = useState(menuIcon);
    const [bellSrc, setBellSrc] = useState(bell);
    const [profilePicSrc, setProfilePicSrc] = useState(profilePic);

    const menuRef = useRef(null);
    const menuIconRef = useRef(null);
    
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
        setMenuSrc(isMenuActive ? menuIcon : x);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&  !menuRef.current.contains(event.target) && event.target !== menuIconRef.current) {
                setIsMenuActive(false);
                setMenuSrc(menuIcon);
            }
        };

        if (isMenuActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuActive]);

    return <header className="header">
        <div className="left-icons">
            <div className="paraverse-menu">
                <a className="paraverse-icon">
                    <img src={paraverseIcon} alt="Paraverse icon" />
                </a>
                <div className="paraverse-dropdown">
                    <p>Paraverse Applications  <hr /></p>
                </div>
            </div>

            <a href="#home" className="gco-connect-icon">
                <img src={gcoConnect} alt="GCO Connect icon" />
            </a>
            <a href="#home" className="gco-connect-icon-small">
                <img src={gcoConnectSmall} alt="GCO Connect icon" />
            </a>
        </div>

        <div className="right-side">
            <div className="navbar-and-book">
                <nav ref={menuRef} className={`navbar ${isMenuActive ? 'active' : ''}`}>
                    <a href="#services" onClick={toggleMenu}>Services</a>
                    <a href="https://paraverse.feutech.edu.ph/gco-connect/appointments" target = "_blank" onClick={toggleMenu}>Appointments</a>
                    <a href="https://paraverse.feutech.edu.ph/gco-connect/history" target = "_blank" onClick={toggleMenu}>History</a>
                    <div className="profile-dropdown-content">
                        <hr />
                        <a href="#">My Profile</a>
                        <a href="#">Portal</a>
                        <a href="#">Sign Out</a>
                    </div>
                </nav>

                <a href="https://paraverse.feutech.edu.ph/gco-connect/booking" target = "_blank" className="book-btn-navbar">Book Now</a>
            </div>
            
            <div className="right-icons">
                <div className="notification-menu">
                    <a className="bell" onMouseEnter={() => setBellSrc(bellHover)} onMouseLeave={() => setBellSrc(bell)}><img src={bellSrc} alt ="Notifications"/></a>
                    <div className="notification-dropdown">
                        <p>Notifications <hr /></p>
                        <a href="Sample Notif">Sample Notification</a>
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

            <img 
                ref={menuIconRef}
                src={menuSrc} 
                alt="Menu Icon" 
                id="menu-icon"
                onClick={toggleMenu}
                style={{ cursor: 'pointer', width: '35px', height: '35px' }}
            />
        </div>
        
    </header>
}

export default NavBar