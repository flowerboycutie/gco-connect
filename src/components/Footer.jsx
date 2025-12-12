import gcoConnectIcon from "../assets/logo-gco-connect.svg"

function Footer() {
    return <footer className="footer">
        <div className="footer-left">
            <img src={gcoConnectIcon} alt="GCO Connect" />
            <h3>Start your journey towards wellbeing</h3>
            <p>The GCO Connect is a supportive space to empower you towards your wellbeing journey. The GCO associates are committed to creating emphatic atmosphere where everyone is respected and feels heard.</p>
        </div>
        <div className="footer-right">
            <p>Proudly made with ❤️<br />&copy; 2025 Mark Marvin Dizon | All Rights Reserved</p>
        </div>
    </footer>
}

export default Footer