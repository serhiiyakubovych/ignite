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
                            <input className="contact-form__input" type="text" name="userName" placeholder="Name"
                                value={this.props.inputedName} onChange={this.props.changeName} />
                            <p className="contact-form__error">{this.props.errors.nameError}</p>
                            <input className="contact-form__input" type="email" name="userEmail" placeholder="Email"
                                value={this.props.inputedEmail} onChange={this.props.changeEmail} />
                            <p className="contact-form__error">{this.props.errors.emailError}</p>
                            <textarea className="contact-form__input message" name="userMessage" placeholder="Message"
                                value={this.props.inputedMessage} onChange={this.props.changeMessage} ></textarea>
                            <p className="contact-form__error">{this.props.errors.messageError}</p>
                            <input className="contact-form__submit" type="submit" value="Send request"/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}