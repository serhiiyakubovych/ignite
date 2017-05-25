import React from "react";
import { Link } from "react-router";

// Note: I created so many classes, but not one template,
// because one of the requirements of the project is that
// this section (services section) should be created by
// using by React routing.
// Hence I have to create a new component for each path.

class ServiceTemplate extends React.Component {
    render() {
        const commonLinkStyles = {"service": true, "col-md-2": true};
        return (
            <div className="services-tabs">
                <div className="service-list container-fluid">
                    <Link to="service-web" 
                        className={`service col-md-2 ${this.props.isWebTabActive ? "active" : ""} `}>
                        Web design
                    </Link>
                    <Link to="service-graphic" 
                        className={`service col-md-2 ${this.props.isGraphicTabActive ? "active" : ""} `}>
                        Graphic design
                    </Link>
                    <Link to="service-support" 
                        className={`service col-md-2 ${this.props.isSupportTabActive ? "active" : ""} `}>
                        Online Support
                    </Link>
                    <Link to="service-app" 
                        className={`service col-md-2 ${this.props.isAppTabActive ? "active" : ""} `}>
                        App Design
                    </Link>
                    <Link to="service-marketing" 
                        className={`service col-md-2 ${this.props.isMarketingTabActive ? "active" : ""} `}>
                        Online Marketing
                    </Link>
                    <Link to="service-seo" 
                        className={`service col-md-2 ${this.props.isSeoTabActive ? "active" : ""} `}>
                        Seo Service
                    </Link>
                </div>
                <div className="service-description clearfix">
                    <div className="service-description__image">
                        <img src={this.props.imgSrc}/>
                    </div>
                    <p className="service-description__text">{this.props.descriptionText}</p>
                </div>
            </div>
        );
    }
}

export class ServiceWeb extends React.Component {
    render() {
        const serviceSettings = {
            imgSrc: "./images/slide-3.jpeg",
            descriptionText: `Lorem ipsum dolor sit ag elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                        adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.`,
            isWebTabActive: true
        };
        return (
            <ServiceTemplate {...serviceSettings} />
        );
    }
}

export class ServiceGraphic extends React.Component {
    render() {
        const serviceSettings = {
            imgSrc: "./images/slide-2.jpeg",
            descriptionText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Laboriosam suscipit hic esse porro harum assumenda quaerat nobis nostrum ea odit ex at molestias,
                        adipisci eaque perspiciatis pariatur ab minus inventore.`,
            isGraphicTabActive: true
        };
        return (
            <ServiceTemplate {...serviceSettings} />
        );
    }
}

export class ServiceSupport extends React.Component {
    render() {
        const serviceSettings = {
            imgSrc: "./images/slide-1.jpeg",
            descriptionText: `Lorem ipsum dolor sit ag elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est t labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.`,
            isSupportTabActive: true
        };
        return (
            <ServiceTemplate {...serviceSettings} />
        );
    }
}

export class ServiceApp extends React.Component {
    render() {
        const serviceSettings = {
            imgSrc: "./images/slide-3.jpeg",
            descriptionText: `Lo eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                        adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.`,
            isAppTabActive: true
        };
        return (
            <ServiceTemplate {...serviceSettings} />
        );
    }
}

export class ServiceMarketing extends React.Component {
    render() {
        const serviceSettings = {
            imgSrc: "./images/slide-2.jpeg",
            descriptionText: `Lorem ipsum dolor sit ag elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum.`,
            isMarketingTabActive: true
        };
        return (
            <ServiceTemplate {...serviceSettings} />
        );
    }
}

export class ServiceSeo extends React.Component {
    render() {
        const serviceSettings = {
            imgSrc: "./images/slide-1.jpeg",
            descriptionText: `Lorem ipsum dolor sit amet.`,
            isSeoTabActive: true
        };
        return (
            <ServiceTemplate {...serviceSettings} />
        );
    }
}