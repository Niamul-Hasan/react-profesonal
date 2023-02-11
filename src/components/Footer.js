import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { FaFacebookF, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import './CSS/Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="inner-footer">

                {/* for company name and description */}
                <div className="footer-items">
                    <h1 style={{ color: '#183a2f' }}>LOGO</h1>
                    <p>Gear up your Logo business</p>
                    <p>Be a partner of Logo House.</p>
                </div>

                {/* for quick links */}
                <div className="footer-items">
                    <h3>Quick Links</h3>
                    <div className="border1"></div>

                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/blogs"><li>Blogs</li></Link>
                        <Link to="/login"><li>LogIn</li></Link>
                    </ul>
                </div>



                {/* for contact us info */}
                <div className="footer-items">
                    <h3>Contact us</h3>
                    <div className="border1"></div>
                    <ul>
                        <li><MdLocationPin /> Dhaka,Bangladesh</li>
                        <li><FaPhoneAlt /> 12301946760326123</li>
                        <li><MdMail /> logo@gmail.com</li>


                        <li>
                            <span className='d-block fs-3 mt-4'>Social</span>
                            <div className="border1"></div>
                            <div class="d-flex flex-row">
                                <a href='https://www.facebook.com/niamulhasan.zead/' target='_blank' rel="noopener noreferrer"><span className='fs-4 me-2' style={{ color: 'blue' }}><FaFacebookF /></span></a>
                                <a href='www.linkedin.com/in/niamul-hasan-7618861a7' target='_blank' rel="noopener noreferrer"><span className='text-info fs-4 me-2'><FaLinkedin /></span></a>
                                <a href='https://api.whatsapp.com/send?phone=+8801601456642' target='_blank' rel="noopener noreferrer"><span className='text-success fs-4'><FaWhatsapp /></span></a>
                            </div>
                        </li>

                    </ul>


                </div>
            </div>

            {/* Footer Bottom start  */}
            <div className="footer-bottom">
                Copyright &copy; Logo House 2023.
            </div>
        </div>
    );
};

export default Footer;