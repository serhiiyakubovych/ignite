import React from "react";

export default class Comtact extends React.Component {
    render() {
        return (
            <section id="contact" className="contact">
                <div className="container-fluid">
                    <div id="contact-map" className="contact-photo col-md-6"></div>
                    <div className="contact-message col-md-5">
                        <h2 className="section-title">Keep In Touch</h2>
                        <form className="contact-form">
                            <input className="contact-form__input" type="text" name="userName" placeholder="Name"/>
                            <input className="contact-form__input" type="email" name="userEmail" placeholder="Email"/>
                            <textarea className="contact-form__input" name="userMessage" className="message" placeholder="Message"></textarea>
                            <input className="contact-form__submit" type="submit" value="Send request"/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}