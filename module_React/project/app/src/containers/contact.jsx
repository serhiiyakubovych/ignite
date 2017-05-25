import React from "react";

import ContactView from "../components/contact.jsx";

export default class Contact extends React.Component {
    componentDidMount() {
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
    render() {
        const viewSettings = {};
        return <ContactView {...viewSettings} />
    }
}