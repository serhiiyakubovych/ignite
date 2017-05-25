import React from "react";

export default class Feedback extends React.Component {
    render() {
        return (
            <section id="testimonial" className="feedback">
                <h2 className="section-title">Feedback</h2>
                <div className="messages">
                    {this.props.messages.map((message, messageIndex) => {
                        return (
                            <div key={messageIndex} className="message">
                                <div className="message__close" onClick={this.props.removeMessage.bind(this, messageIndex)}>
                                    <i className="fa fa-times"></i>
                                </div>
                                <div className="message__title">{message.title}</div>
                                <div className="message__text">{message.text}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="message-leaving clearfix">
                        <div className="message-leaving-form">
                            <input type="text" name="messageTitle" placeholder="Title" required
                                ref={this.props.saveTitleInputRef}/>
                            <textarea placeholder="Message" required
                                ref={this.props.saveMessageTextAreaRef}></textarea>
                        </div>
                        <div className="message-leaving-invitation">
                            <p className="message-leaving-invitation__title">Leave us a message</p>
                            <button className="ham-button" onClick={this.props.addMessage}>
                                <i className="fa fa-plus"></i> Add comment
                            </button>
                        </div>
                    </div>
            </section>
        );
    }
}