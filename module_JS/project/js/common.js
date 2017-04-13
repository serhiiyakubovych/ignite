;(function(document, window, $) {
    "use strict";

    let SmakApp = (function() {
        let instance = null;
        return function() {
            const NAV_MENU = $("#page-nav-menu");

            if (instance instanceof SmakApp) {
                return instance;
            } else {
                instance = this;
            }

            function initPage() {
                createSlider({
                    sliderContainer: $("#home"),
                    sliderSel: ".slider",
                    slideSel: ".slide",
                    prevSlideButtonSel: ".prev-slide",
                    nextSlideButtonSel: ".next-slide",
                    slideTime: 3000,
                    userDelay: 5000
                });

                createTab({
                    tabContainer: $("#work"),
                    tabNavItemSel: ".works-tab__nav-item",
                    tabSortedElemSel: ".work"
                });

                createTeamTab({
                    teamTabContainer: $("#team"),
                    teamTabNavItemSel: ".member__photo",
                    teamTabSortedElemSel: ".member-details"
                });

                createSlider({
                    sliderContainer: $("#reviews-slider"),
                    sliderSel: ".reviews-inside",
                    slideSel: ".review",
                    navigationPointsSel: ".reviews__points"
                });

                validateMessageForm();

                checkPositionForMenu();

                $(document).on("scroll", checkPositionForMenu);

                $(document).on("click", "a[href^='#']", scrollToAnchor);

                $(document).on("scroll", showStatistic);

                let servicesSection = $("#services");
                $(servicesSection).on("mouseenter", ".our-likes__icon", increaseService);
                $(servicesSection).on("mouseleave", ".our-likes__icon", decreaseService);
            }

            function createSlider({sliderContainer, sliderSel, slideSel,
                prevSlideButtonSel, nextSlideButtonSel, navigationPointsSel,
                slideTime, userDelay}) {
                if (!sliderContainer) {
                    return;
                }

                let slider = $(sliderContainer).find(sliderSel),
                    slides = $(slider).find(slideSel),
                    slidesCount = slides.length,
                    slideWidth = $(sliderContainer).outerWidth(),
                    slidesTotalWidth = slideWidth * slidesCount,
                    slideInterval,
                    delayTimer,
                    navPointsContainer = $(sliderContainer).find(navigationPointsSel),
                    navPoints = $(navPointsContainer).find("li");

                slides.width(slideWidth);

                if (slideTime !== undefined) {
                    slideInterval = setInterval(showNextSlide, slideTime);
                    userDelay = (userDelay !== undefined) ? userDelay : slideTimer;
                }

                if (prevSlideButtonSel) {
                    $(sliderContainer).on("click", prevSlideButtonSel, () => {
                        skipSlideInterval();
                        showPrevSlide();
                    });
                }
                if (nextSlideButtonSel) {
                    $(sliderContainer).on("click", nextSlideButtonSel, () => {
                        skipSlideInterval();
                        showNextSlide();
                    });
                }
                if (navigationPointsSel) {
                    $(sliderContainer).on("click", navPoints, goToSpecifiedSlide);
                }

                function skipSlideInterval() {
                    if (!slideTime) {
                        return;
                    }
                    clearInterval(slideInterval);
                    if (delayTimer) {
                        clearTimeout(delayTimer);
                    }
                    delayTimer = setTimeout(() => {
                        slideInterval = setInterval(showNextSlide, slideTime);
                    }, userDelay);
                }

                function showPrevSlide() {
                    // If the slide, from whom we are leaving is the first slide
                    // then show last slide
                    if ((parseFloat($(slider).css("margin-left")) + slideWidth) > 0) {
                        $(slider).animate({
                            "margin-left": `-=${(slidesCount - 1) * slideWidth}`
                        });
                        return;
                    }

                    $(slider).animate({
                        "margin-left": `+=${slideWidth}`
                    });
                }
                function showNextSlide() {
                    // If the slide, from whom we are leaving is the last slide
                    // then show first slide
                    if ( Math.abs(parseFloat($(slider).css("margin-left")) - slideWidth) >= slidesTotalWidth ) {
                        $(slider).animate({
                            "margin-left": "0px"
                        });
                        return;
                    }

                    $(slider).animate({
                        "margin-left": `-=${slideWidth}`
                    });
                }

                function goToSpecifiedSlide(event) {
                    let currNavPoint = event.target;

                    if (currNavPoint.tagName !== "LI") {
                        return;
                    }

                    let newMarginLeft = ($(navPoints).index(currNavPoint)) * slideWidth;
                    $(slider).animate({
                        "margin-left": `-${newMarginLeft}`
                    });

                    $(navPoints).filter(".active").removeClass("active");
                    $(currNavPoint).addClass("active");
                }
            }

            function createTab({tabContainer, tabNavItemSel,
                tabSortedElemSel, tabClickCallback}) {
                if ( !$(tabContainer) ) {
                    return;
                }

                let tabSortedElems = $(tabContainer).find(tabSortedElemSel);

                $(tabContainer).on("click", tabNavItemSel, sortTab);

                function sortTab(event) {
                    event.preventDefault();

                    $(tabContainer).find(tabNavItemSel).filter(".active").removeClass("active");
                    $(this).addClass("active");

                    let targetCategory = $(this).attr("data-target");

                    tabSortedElems.each((index, tabSortedElem) => {
                        if (targetCategory === "*") {
                            $(tabSortedElem).show();
                            return;
                        }

                        if (targetCategory === $(tabSortedElem).attr("data-category")) {
                            $(tabSortedElem).show();
                        } else {
                            $(tabSortedElem).hide();
                        }
                    });

                    if (tabClickCallback) {
                        tabClickCallback($(this), targetCategory);
                    }
                }
            }

            function createTeamTab({teamTabContainer, teamTabNavItemSel, teamTabSortedElemSel}) {
                createTab({
                    tabContainer: teamTabContainer,
                    tabNavItemSel: teamTabNavItemSel,
                    tabSortedElemSel: teamTabSortedElemSel,
                    tabClickCallback: tabClickHandler
                });

                let teamTabSortedElems = $(teamTabContainer).find(teamTabSortedElemSel);

                $(document).on("scroll", showSkills);

                $(teamTabContainer).on("click", ".about-member__close", hideShortDetails);

                function tabClickHandler(activeTabNavItem, targetCategory) {
                    let membersDetails = $(teamTabContainer).find(".member-details"),
                        currentMemberDetails = $(membersDetails).filter(`[data-category="${targetCategory}"]`);

                    $(membersDetails).filter(".active").removeClass("active");
                    $(currentMemberDetails).addClass("active");

                    // Show probably previously closed main information about current member
                    $(currentMemberDetails).find(".about-member-outer").show();

                    let pointerElem = $(currentMemberDetails).find(".pointer"),
                        newPointerPos = $(activeTabNavItem).offset().left +
                            $(activeTabNavItem).outerWidth() / 2 -
                            $(pointerElem).outerWidth() / 2;
                    $(pointerElem).css("left", newPointerPos);
                }

                // Show statistic data, when the statistic
                // block is in the visible area of screen
                function showSkills() {
                    teamTabSortedElems.each((index, teamTabSortedElem) => {
                        let skillList = $(teamTabSortedElem).find(".skill-list"),
                            elemYOffset = $(skillList).offset().top;

                        if ((pageYOffset < elemYOffset) &&
                            ((pageYOffset + document.documentElement.clientHeight) >
                            elemYOffset)) {

                            if ( $(skillList).attr("data-counter-ended") ) {
                                return;
                            }
                            $(skillList).attr("data-counter-ended", "true");

                            let skills = $(skillList).find(".skill"),
                                timer,
                                timerSpeed = 25,
                                timerTime = 1500,
                                startTime = Date.now();

                            timer = setTimeout(function animFunc() {
                                skills.each((_, skill) => {
                                    if (!$(skill).attr("data-percent")) {
                                        return;
                                    }

                                    let newSkillValue = parseInt($(skill).attr("data-percent") / timerTime * (Date.now() - startTime));
                                    if ((Date.now() - startTime) > timerTime) {
                                        newSkillValue = $(skill).attr("data-percent");
                                    }

                                    $(skill).find(".percent-circle")
                                        .css("stroke-dasharray", `${newSkillValue * 314 / 100}px 314px`);

                                    $(skill).find(".skill_percent").text(newSkillValue + "%");
                                });

                                if ((Date.now() - startTime) > timerTime) {
                                    return;
                                }

                                timer = setTimeout(animFunc, timerSpeed);
                            }, timerSpeed);
                        }
                    });
                }

                function hideShortDetails() {
                    $(this).closest(".about-member-outer").slideUp();
                }

            }

            /**
             * Check current position on the page to reduce / grow menu
             * or set an active menu item
             */
            function checkPositionForMenu() {
                changeActiveMenuItem();
                checkToResizeNavMenu();
            }

            function changeActiveMenuItem() {
                let pageNavMenu = $(NAV_MENU),
                    menuItems = $(pageNavMenu).find(".nav-menu__item"),
                    activeMenuItems = menuItems.filter(".active");

                for (let i = 0, itemsLen = menuItems.length; i < itemsLen; i++) {
                    let menuItem = menuItems[i],
                        sectionId = $(menuItem).find("a").attr("href"),
                        sectionOffset = $(sectionId).offset();

                    if (pageYOffset >= sectionOffset.top
                        && pageYOffset < (sectionOffset.top + document.documentElement.clientHeight)) {
                        if (activeMenuItems) {
                            activeMenuItems.each((index, activeItem) => {
                                $(activeItem).removeClass("active");
                            });
                        }
                        $(menuItem).addClass("active");
                        return;
                    }
                }
            }

            function checkToResizeNavMenu() {
                if (pageYOffset > $(NAV_MENU).outerHeight()) {
                    $(NAV_MENU).closest(".page_navigation").addClass("reduced");
                } else {
                    $(NAV_MENU).closest(".page_navigation").removeClass("reduced");
                }
            }

            function scrollToAnchor(event) {
                event.preventDefault();

                let destinationId = $(this).attr("href");

                if (!destinationId || destinationId.length <= 1) {
                    return;
                }

                let destinationElem = $(destinationId),
                    offset = $(destinationElem).offset();

                $('html, body').animate({
                    scrollTop: offset.top,
                    scrollLeft: offset.left
                });
            }

            function validateMessageForm() {
                let form = $("#message-form"),
                    nameInput = $("#message-name"),
                    mailInput = $("#message-mail"),
                    subjectInput = $("#message-subject"),
                    namePattern = /^[a-z]+$/i,
                    mailPattern = /^[\w\d_.]+@[\w\d_.]+$/i,
                    subjectPattern = /^[\d\w]+$/i,
                    hasErrors = false;

                form.on("submit", submitForm);

                $(nameInput).on("input", validateName);
                $(mailInput).on("input", validateMail);
                $(subjectInput).on("input", validateSubject);

                function submitForm(event) {
                    hasErrors = false;

                    validateName.call( $(nameInput) );
                    validateMail.call( $(mailInput) );
                    validateSubject.call( $(subjectInput) );

                    if (hasErrors) {
                        event.preventDefault();
                    }
                }

                function validateName() {
                    validateInput.call($(this), {
                        pattern: namePattern,
                        cleanInputError: "Please enter your name.",
                        invalidInputError: "Invalid name. Your name can include " +
                        "only English words. Please try again."
                    });
                }

                function validateMail() {
                    validateInput.call($(this), {
                        pattern: mailPattern,
                        cleanInputError: "Please enter your mail.",
                        invalidInputError: "Invalid mail. Your mail can include " +
                        "only digits, English words, _ and @. Please try again."
                    });
                }

                function validateSubject() {
                    validateInput.call($(this), {
                        pattern: subjectPattern,
                        cleanInputError: "Please enter subject.",
                        invalidInputError: "Invalid subject. A subject field can include " +
                        "only digits and English words. Please try again."
                    });
                }

                function validateInput({
                    pattern = /.*/gi,
                    cleanInputError = "",
                    invalidInputError = "" }) {
                    let inputElem = $(this),
                        inputErrorElem = $(inputElem).parent().find(".input-error-message");

                    let inputtedData = $(inputElem).val();
                    if (!inputtedData) {
                        inputErrorElem.text(cleanInputError);
                        hasErrors = true;
                        return;
                    }

                    if (pattern.test(inputtedData) === false) {
                        inputErrorElem.text(invalidInputError);
                        hasErrors = true;
                        return;
                    }

                    inputErrorElem.text("");
                }
            }

            function showStatistic() {
                let statisticContainer = $("#statistic"),
                    containerYOffset = statisticContainer.offset().top,
                    valueElems = $(statisticContainer).find(".statistic-block__value"),
                    speed = 25,
                    totalTime = 1500,
                    startTime = Date.now();

                if (pageYOffset < containerYOffset &&
                    (pageYOffset + document.documentElement.clientHeight) >  containerYOffset) {
                    setTimeout(function animFunc() {
                        let passedTime = Date.now() - startTime;

                        if (passedTime > totalTime) {
                            $(valueElems).each((_, valueElem) => {
                                if (!$(valueElem).attr("data-value")) {
                                    return;
                                }
                                let newValue = $(valueElem).attr("data-value");
                                $(valueElem).text(newValue);
                            });
                            $(document).off("scroll", showStatistic);
                            return;
                        }

                        $(valueElems).each((_, valueElem) => {
                            if (!$(valueElem).attr("data-value")) {
                                return;
                            }
                            let newValue = parseInt($(valueElem).attr("data-value") /
                                totalTime * passedTime);
                            $(valueElem).text(newValue);
                        });

                        setTimeout(animFunc, speed);
                    }, speed);
                }
            }

            function increaseService(event) {
                if ($(this).attr("data-is-increased")) {
                    return;
                }

                $(this).attr("data-is-increased", "increasing");

                let growScale = 1.1,
                    storedWidth = $(this).outerWidth(),
                    storedHeight = $(this).outerHeight();

                if (!$(this).attr("data-stored-width")) {
                    $(this).attr("data-stored-width", storedWidth);
                }
                if (!$(this).attr("data-stored-height")) {
                    $(this).attr("data-stored-height", storedHeight);
                }

                $(this).animate({
                    "width": `${parseInt(storedWidth * growScale)}`,
                    "height": `${parseInt(storedHeight * growScale)}`
                });

                $(this).attr("data-is-increased", "increased");
            }
            function decreaseService() {
                if ($(this).attr("data-is-increased") !== "increased") {
                    return;
                }

                let storedWidth = $(this).attr("data-stored-width"),
                    storedHeight = $(this).attr("data-stored-height");

                $(this).animate({
                    "width": `${storedWidth}`,
                    "height": `${storedHeight}`
                }, () => $(this).attr("data-is-increased", ""));
            }

            this.initPage = initPage;
        };
    }());

    $(document).ready(function() {
        let smakMainPage = new SmakApp();
        smakMainPage.initPage();
    });

}(document, window, jQuery));