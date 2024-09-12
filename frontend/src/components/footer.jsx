import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../styles/footer.css";
export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <img src={logo} height={80} width={80} alt="logo"/>
                <p>is simply dummy picture of logo</p>
            </div>
            <div className="footer-section">
                <p className="bold-text">EXPLORE</p>
                <p>SUPPORTS</p>
                <p>ABOUT US</p>
                <p>BLOG</p>
            </div>
            <div className="footer-section">
                <p className="bold-text">LEGAL</p>
                <p>TERM OF USE</p>
                <p>PRIVACY POLICY</p>
            </div>
            <div className="footer-section">
                <p className="bold-text">SOCIALS</p>
                <p>TWITTER</p>
                <p>LINKEDIN</p>
                <a href="https://www.instagram.com/karkisayal/?hl=en" target="-blank">INSTAGRAM</a>
            </div>
        </footer>
    );
}
