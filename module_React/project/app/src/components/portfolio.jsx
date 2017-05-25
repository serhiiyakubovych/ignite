import React from "react";

export default class Portfolio extends React.Component {
    render() {
        return (
            <section id="portfolio" className="portfolio">
                <h2 className="section-title">Our Amazing Work</h2>
                <div className="work-tabs">
                    <ul className="work-tabs__nav">
                        <li className="work-tabs__nav-item active" onClick={this.props.showAll}>All</li>
                        <li className="work-tabs__nav-item" onClick={this.props.showGraphicDesign}>Graphic Design</li>
                        <li className="work-tabs__nav-item" onClick={this.props.showWebDesign}>Web Design</li>
                        <li className="work-tabs__nav-item" onClick={this.props.showLandings}>Landing pages</li>
                        <li className="work-tabs__nav-item" onClick={this.props.showWordpress}>Wordpress</li>
                    </ul>
                    <div className="works container-fluid">
                        {this.props.works.map((work, workIndex) => {
                            return (
                                <div key={workIndex} className="work col-md-3 col-sm-4">
                                    <div className="work-photo">
                                        <img src={work.imgSrc} alt="Work"/>
                                    </div>
                                    <div className="hidden-work">
                                        <div className="hidden-work-inner">
                                            <a href="#" className="work-link fa fa-link"></a>
                                            <a href="#" className="work-link fa fa-search"></a>
                                            <h2 className="work-title">{work.title}</h2>
                                            <h2 className="work-subtitle">{work.category}</h2>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}