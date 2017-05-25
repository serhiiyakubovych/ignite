import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default class PageFooter extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="copyright">
                    <p className="copyright-inner"> Copyright 2015 <a href="#">theHam</a> | All Rights Reserved</p>
                    <div className="to-up-button">
                        <ScrollLink className="fa fa-angle-up" to="top" smooth={true} duration={500}></ScrollLink>
                    </div>
                </div>
            </footer>
        );
    }
}