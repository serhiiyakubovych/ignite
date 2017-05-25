import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FeedbackView from "../components/feedback.jsx";
import * as actions from "../actions/actions.js";

class Feedback extends React.Component {
    render() {
        const viewSettings = {
            messages: this.props.messages,
            addMessage: this._addMessage.bind(this),
            removeMessage: this._removeMessage.bind(this),
            saveTitleInputRef: this._saveTitleInputRef.bind(this),
            saveMessageTextAreaRef: this._saveMessageTextAreaRef.bind(this)
        };
        return <FeedbackView {...viewSettings} />;
    }
    _addMessage() {
        const newMessage = {
            title: this.titleInput.value,
            text: this.messageTextare.value
        };
        if ((!newMessage.title) || (!newMessage.text)) {
            return;
        }
        this.props.addFeedbackMessage(newMessage);
    }
    _removeMessage(messageIndex) {
        this.props.removeFeedbackMessage(messageIndex);
    }
    _saveTitleInputRef(c) {
        this.titleInput = c;
    }
    _saveMessageTextAreaRef(c) {
        this.messageTextare = c;
    }
    static mapStateToProps(state) {
        return {
            messages: state.feedback.reviews
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            addFeedbackMessage: actions.addFeedbackReview,
            removeFeedbackMessage: actions.removeFeedbackReview
        }, dispatch);
    }
}

export default connect(Feedback.mapStateToProps, Feedback.matchDispatchToProps)(Feedback);