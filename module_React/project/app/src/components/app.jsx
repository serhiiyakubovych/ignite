import React from "react";

import PageHeader from "./pageHeader.jsx";
import PageSlider from "../containers/pageSlider.jsx";
import Options from "./options.jsx";
import Services from "./services.jsx";
import About from "../containers/about.jsx";
import Portfolio from "../containers/portfolio.jsx";
import Team from "../containers/team.jsx";
import Facts from "../containers/facts.jsx";
import NewsSection from "../containers/newsSection.jsx";
import Feedback from "../containers/feedback.jsx";
import Contact from "../containers/contact.jsx";
import PageFooter from "./pageFooter.jsx";

export default class App extends React.Component {
    render() {
        return (
            <section>
                <PageHeader/>
                <PageSlider/>
                <Options/>
                <Services/>
                <About/>
                <Portfolio/>
                <Team/>
                <Facts/>
                <NewsSection/>
                <Feedback/>
                <Contact/>
                <PageFooter/>
            </section>
        );
    }
}