import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import { ServiceWeb, ServiceGraphic, ServiceSupport, ServiceApp, ServiceMarketing, ServiceSeo } from "./servicesClasses.jsx";

export default class Services extends React.Component {
    render() {
        return (
            <section id="services" className="services">
                <h2 className="section-title">Our services</h2>
                <Router history={hashHistory}>
                    <Route path="/">
                        <IndexRoute component={ServiceWeb}/>
                        <Route path="service-web" component={ServiceWeb}/>
                        <Route path="service-graphic" component={ServiceGraphic}/>
                        <Route path="service-support" component={ServiceSupport}/>
                        <Route path="service-app" component={ServiceApp}/>
                        <Route path="service-marketing" component={ServiceMarketing}/>
                        <Route path="service-seo" component={ServiceSeo}/>
                        <Route path="*" component={ServiceWeb}/>
                    </Route>
                </Router>
            </section>
        );
    }
}