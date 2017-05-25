import React from "react";

export default class Facts extends React.Component {
    render() {
        return (
            <section id="facts" className="facts container-fluid">
                <div className="fact col-md-3">
                    <div className="fact-inner">
                        <div className="fact__icon-wrap">
                            <div className="fact__icon_works"></div>
                        </div>
                        <div className="fact__count" data-value="4609">4609</div>
                        <div className="fact__title">Works</div>
                    </div>
                </div>
                <div className="fact col-md-3">
                    <div className="fact-inner">
                        <div className="fact__icon-wrap">
                            <div className="fact__icon_customers"></div>
                        </div>
                        <div className="fact__count" data-value="3470">3470</div>
                        <div className="fact__title">Customers</div>
                    </div>
                </div>
                <div className="fact col-md-3">
                    <div className="fact-inner">
                        <div className="fact__icon-wrap">
                            <div className="fact__icon_purchase"></div>
                        </div>
                        <div className="fact__count" data-value="2908">2908</div>
                        <div className="fact__title">Purchase</div>
                    </div>
                </div>
                <div className="fact col-md-3">
                    <div className="fact-inner">
                        <div className="fact__icon-wrap">
                            <div className="fact__icon_office"></div>
                        </div>
                        <div className="fact__count" data-value="1908">1908</div>
                        <div className="fact__title">Office</div>
                    </div>
                </div>
            </section>
        );
    }
}