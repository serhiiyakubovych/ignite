import React from "react";

export default class About extends React.Component {
    render() {
        return (
            <section id="about" className="about container-fluid">
                <div className="about__photo col-md-6"></div>
                <div className="about__details col-md-6">
                    <h2 className="section-title">About our company</h2>
                    <div className="details-tabs">
                        <div className="details-tab" onClick={this.props.showHistory}>Our history</div>
                        <div className="details-tab" onClick={this.props.showBiography}>Our biography</div>
                        <div className="details-tab active" onClick={this.props.showSkills}>Our skills</div>
                    </div>
                    {
                        (this.props.currentTab === "history")
                        ?
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Error id eveniet ex dignissimos commodi possimus eaque, fuga 
                            labore, impedit suscipit.
                        </div>
                        :
                        (this.props.currentTab === "biography")
                        ?
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Optio consequuntur veritatis quod eum, quidem aspernatur?
                        </div>
                        :
                        <div className="details-graphs">
                            <div className="details-graph_ui">
                                <p className="details-graph__title">User interface</p>
                            </div>
                            <div className="details-graph_web">
                                <p className="details-graph__title">Web design</p>
                            </div>
                            <div className="details-graph_wp">
                                <p className="details-graph__title">Wordpress</p>
                            </div>
                            <div className="details-graph_html">
                                <p className="details-graph__title">HTML &amp; CSS</p>
                            </div>
                            <div className="details-graph_app">
                                <p className="details-graph__title">App design</p>
                            </div>
                        </div>
                    }
                </div>
            </section>
        );
    }
}