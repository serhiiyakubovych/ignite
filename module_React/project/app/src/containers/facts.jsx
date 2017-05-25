import React from "react";

import FactsView from "../components/facts.jsx";

export default class Facts extends React.Component {
    render() {
        return (
            <FactsView />
        );
    }
    componentDidMount() {
        document.addEventListener("scroll", checkPositionForCounter);
    }
}

function checkPositionForCounter(event, factsContainer = document.getElementById("facts"), countElemSel = ".fact__count") {
    const pageWidth = document.documentElement.clientWidth,
        pageHeight = document.documentElement.clientHeight,
        containerWidth = factsContainer.offsetWidth,
        containerHeight = factsContainer.offsetHeight,
        pagePos = {
            left: pageXOffset,
            right: pageXOffset + pageWidth,
            top: pageYOffset,
            bottom: pageYOffset + pageHeight
        },
        containerPos = {
            left: factsContainer.getBoundingClientRect().left + pagePos.left,
            right: factsContainer.getBoundingClientRect().left + pagePos.left + containerWidth,
            top: factsContainer.getBoundingClientRect().top + pagePos.top,
            bottom: factsContainer.getBoundingClientRect().top + pagePos.top + containerHeight
        };

    if (((containerPos.top > pagePos.top) && (containerPos.top < pagePos.bottom)) ||
        ((containerPos.bottom > pagePos.top) && (containerPos.bottom < pagePos.bottom))) {
        runCounter();
        document.removeEventListener("scroll", checkPositionForCounter);
    }
    function runCounter() {
        const startTime = performance.now(),
            totalTime = 3000,
            countElems = factsContainer.querySelectorAll(countElemSel),
            targetCounts = [];
        for (let i = 0; i < countElems.length; i++) {
            targetCounts.push(+countElems[i].getAttribute("data-value"));
        }

        countElems.forEach((counElem) => {
            counElem.textContent = 0;
        })
        setTimeout(timer, 20);

        function timer() {
            const timePassed = performance.now() - startTime,
                percent = timePassed / totalTime;

            if (percent >= 1) {
                countElems.forEach((counElem, countElemIndex) => {
                    counElem.textContent = targetCounts[countElemIndex];
                })
                return;
            }

            countElems.forEach((counElem, countElemIndex) => {
                counElem.textContent = parseInt(targetCounts[countElemIndex] * percent)
            })

            setTimeout(timer, 20);
        }
    }
}