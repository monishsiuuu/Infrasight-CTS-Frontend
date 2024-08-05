import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact">
                Phone: (123) 9790-778113
                </div>
                <div className="copyright">
                   
                    &copy; 2023 Emerging Programmers
                </div>
                <div className="social-icons">
                    <a href="#" className="icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
