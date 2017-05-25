import React from "react";

export default class Options extends React.Component {
    render() {
        return (
            <section className="options container-fluid">
                <div className="option col-md-3">
                    <div className="option-inner">
                        <div className="option__icon_options"></div>
                        <div className="option__title">Personalized options</div>
                    </div>
                </div>
                <div className="option col-md-3">
                    <div className="option-inner">
                        <div className="option__icon_customizable"></div>
                        <div className="option__title">Fully customizable</div>
                    </div>
                </div>
                <div className="option col-md-3">
                    <div className="option-inner">
                        <div className="option__icon_support"></div>
                        <div className="option__title">Unlimited support</div>
                    </div>
                </div>
                <div className="option col-md-3">
                    <div className="option-inner">
                        <div className="option__icon_device"></div>
                        <div className="option__title">Responsive all device</div>
                    </div>
                </div>
            </section>
        );
    }
}