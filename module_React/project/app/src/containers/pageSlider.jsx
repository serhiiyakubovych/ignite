import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PageSliderView from "../components/pageSlider.jsx";

class PageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.skipSliderTimeout = this.skipSliderTimeout.bind(this);
        this.startTimeout = this.startTimeout.bind(this);
        this.saveSliderRef = this.saveSliderRef.bind(this);
    }
    prevSlide() {
        this.slider.slickPrev();
        this.skipSliderTimeout();
    }
    nextSlide() {
        this.slider.slickNext();
        this.skipSliderTimeout();
    }
    skipSliderTimeout() {
        this.slider.innerSlider.pause();
        clearTimeout(this._timer);
        this._hasDelay = true;
        this._timer = setTimeout(() => {
            this._hasDelay = false;
            this.slider.innerSlider.play();
        }, 5100);
    }
    startTimeout() {
        this.slider.innerSlider.pause();
        if (this._hasDelay) {
            return;
        }
        clearTimeout(this._timer);
        this._timer = setTimeout(() => {
            this.slider.innerSlider.play();
        }, 3100);
    }
    saveSliderRef(c) {
        return this.slider = c;
    }
    render() {
        const viewSettings = {
            settings: {
                speed: 500,
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnHover: false
            },
            slides: this.props.slides,
            prevSlide: this.prevSlide,
            nextSlide: this.nextSlide,
            startTimeout: this.startTimeout,
            saveSliderRef: this.saveSliderRef
        };
        return <PageSliderView {...viewSettings}/>;
    }

    static mapStateToProps(state) {
        return {
            slides: state.pageSlider.slides
        }
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({}, dispatch);
    }
}

export default connect(PageSlider.mapStateToProps, PageSlider.matchDispatchToProps)(PageSlider);