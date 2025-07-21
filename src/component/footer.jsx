
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className="ac-footer">
                <div className="footer-content">
                    <div className="item">
                        <h1>Top Products</h1>
                        <ul>
                            <li>Grilled Chicken</li>
                            <li>Margherita Pizza</li>
                            <li>Beef Tacos</li>
                            <li>Caesar Salad</li>
                            <li>Spaghetti Carbonara</li>
                            <li>Sushi Rolls</li>
                            <li>Vegetable Stir-fry</li>
                        </ul>
                    </div>
                    <div className="item ">
                        <h1>Quick Links</h1>
                        <ul className="">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#teams">Ours Teams</a></li>
                            <li><a href="#Reserve">Reserve</a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h1>News letter</h1>
                        <form action="">
                            <textarea name="" id="" placeholder="Messages..."></textarea>
                            <div className="ac-button">
                                <button type="button"> <FaArrowRight /> Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="item">
                        <h1>Contact</h1>
                        <div className="ac-contact">
                            <ul>
                                <li><Link to="#"><FaWhatsapp className="ac-footer-icons" />+233 0534894940 </Link></li>
                                <li><Link to="#"> <FaInstagram className="ac-footer-icons" /> Abouzar@12Ins </Link></li>
                                <li><Link to="#"><FaLinkedin className="ac-footer-icons" /> Abzar12</Link></li>
                                <li><Link to="#"><FaYoutube className="ac-footer-icons" /> Abouzar@12Youtube</Link></li>
                                <li><Link to="#"><FaEnvelope className="ac-footer-icons" /> Abzarcamara3@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;