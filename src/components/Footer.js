import logo from "../assets/logo2.png"

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer>
            <section>
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="">
                    <h3>Important Links</h3>
                    <ul className="footer_links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">MENU</a></li>
                        <li><a href="#">RESERVATION</a></li>
                        <li><a href="#">ORDER ONLINE</a></li>
                        <li><a href="#">LOGIN</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contacts</h3>
                    <ul>
                        <li>+1(123)456-7890</li>
                        <li>info@littlelemon.com</li>
                        <li>123 Ford Blvd, Chicago, IL, 60618</li>
                    </ul>
                </div>
                <div className="social">
                    <h3>Social Media </h3>
                    <ul>
                        <li><FaFacebookSquare /></li>
                        <li><FaInstagram /></li>
                        <li><FaXTwitter /></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}