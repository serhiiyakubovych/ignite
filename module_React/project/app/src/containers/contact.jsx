import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContactView from "../components/contact.jsx";
import * as actions from "../actions/actions.js";

class Contact extends React.Component {
    componentDidMount() {
        Contact._initMap();
    }
    render() {
        const viewSettings = {
            inputedName: this.props.inputedName,
            inputedEmail: this.props.inputedEmail,
            inputedMessage: this.props.inputedMessage,
            errors: this.props.errors,
            changeName: this._handleNameChange.bind(this),
            changeEmail: this._handleEmailChange.bind(this),
            changeMessage: this._handleMessageChange.bind(this)
        };
        return <ContactView {...viewSettings} />
    }
    _handleNameChange(event) {
        this.props.changeInputedName(event.target.value);
    }
    _handleEmailChange(event) {
        this.props.changeInputedEmail(event.target.value);
    }
    _handleMessageChange(event) {
        this.props.changeInputedMessage(event.target.value);
    }
    static _initMap() {
        window.initMap = function(mapElem = $("#contact-map").get(0)) {
            const uluru = {lat: 50.446159, lng: 30.515426},
                map = new google.maps.Map(mapElem, {
                    zoom: 15,
                    center: uluru
                }),
                marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
        };
    }
    static mapStateToProps(state) {
        return {
            inputedName: state.contact.inputedName,
            inputedEmail: state.contact.inputedEmail,
            inputedMessage: state.contact.inputedMessage,
            errors: state.contact.errors
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            changeInputedName: actions.changeContactInputedName,
            changeInputedEmail: actions.changeContactInputedEmail,
            changeInputedMessage: actions.changeContactInputedMessage
        }, dispatch);
    }
}

export default connect(Contact.mapStateToProps, Contact.matchDispatchToProps)(Contact);