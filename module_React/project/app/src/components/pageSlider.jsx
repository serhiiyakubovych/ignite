import React from "react";
import Slider from "react-slick";
import { Link as ScrollLink } from "react-scroll";

export default class PageSlider extends React.Component {
    componentDidMount() {
        // I should to use this function explicitly,
        // because at the start we have no data,
        // that will be loaded by async function.
        // And react-slick incorrect work (run autoplay) without data.
        this.props.startTimeout();
    }
    render() {
        return (
            <section id="top" className="slider-container">
                    <div className="slider">
                        <Slider
                            ref={this.props.saveSliderRef}
                            afterChange={this.props.startTimeout}
                            {...this.props.settings}
                        >
                            {this.props.slides.map((slide, slideIndex) => {
                                return (
                                    <div key={slideIndex} className="slide">
                                        <img src={slide.imgSrc} alt="Slide 1" className="slide-photo" />
                                        <div className="slide-wrap">
                                            <div className="slide-inner">
                                                <p className="slide__subtitle">{slide.subtitle}</p>
                                                <p className="slide__title">{slide.title}</p>
                                                <p className="slide__description">{slide.description}</p>
                                                <ScrollLink className="slide__link-button_explore" to="portfolio" smooth={true} duration={500}>Explore now</ScrollLink>
                                                <ScrollLink className="slide__link-button_purchase" to="contact" smooth={true} duration={500}>Purchase now</ScrollLink>
                                            </div>
                                            <div className="prev-slide" onClick={this.props.prevSlide}>
                                                <i className="fa fa-angle-left"></i>
                                            </div>
                                            <div className="next-slide" onClick={this.props.nextSlide}>
                                                <i className="fa fa-angle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </section>
        );
    }
}