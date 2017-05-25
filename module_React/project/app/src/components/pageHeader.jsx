import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default class PageHeader extends React.Component {
    render() {
        return (
            <header>
                <nav className="page-nav clearfix">
                    <div className="page-nav__logo">
                        <a href="#"><img src="./images/logo.png" alt="Ket logo" /></a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav_menu">
                            <span className="fa fa-list"></span>
                        </button>
                    </div>
                    <ul id="nav_menu" className="page-nav__menu collapse navbar-collapse">
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="top" spy={true} smooth={true} duration={500}>Home</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="services" spy={true} smooth={true} duration={500}>Service</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Work</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="testimonial" spy={true} smooth={true} duration={500}>Testimonial</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="news" spy={true} smooth={true} duration={500}>Blog</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="team" spy={true} smooth={true} duration={500}>Team</ScrollLink>
                        </li>
                        <li className="page-nav__menu-item">
                            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</ScrollLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}