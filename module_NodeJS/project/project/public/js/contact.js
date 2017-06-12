window.addEventListener("DOMContentLoaded", () => {
    initMap();
    validateMessageForm(document.getElementById("contact-form"));

    function initMap() {
        window.initMap = function(mapElem = document.getElementById("map")) {
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

    function validateMessageForm(form) {
        let nameInput = form.elements.name,
            mailInput = form.elements.email,
            subjectInput = form.elements.subject,
            messageInput = form.elements.message,
            namePattern = /^[a-z]+$/i,
            mailPattern = /^[\w\d_.]+@[\w\d_.]+$/i,
            subjectPattern = /^[a-z]+$/i,
            messagePattern = /\w{20,}/i;
            hasErrors = false;

        form.addEventListener("submit", submitForm);

        nameInput.addEventListener("input", validateName);
        mailInput.addEventListener("input", validateMail);
        subjectInput.addEventListener("input", validateSubject);
        messageInput.addEventListener("input", validateMessage);

        function submitForm(event) {
            hasErrors = false;

            validateName.call(nameInput);
            validateMail.call(mailInput);
            validateSubject.call(subjectInput);
            validateMessage.call(messageInput);

            if (hasErrors) {
                event.preventDefault();
            }
        }

        function validateName() {
            validateInput.call(this, {
                pattern: namePattern,
                cleanInputError: "Please enter your name.",
                invalidInputError: "Invalid name. Your name can include " +
                "only English words. Please try again."
            });
        }

        function validateMail() {
            validateInput.call(this, {
                pattern: mailPattern,
                cleanInputError: "Please enter your mail.",
                invalidInputError: "Invalid mail. Your mail can include " +
                "only digits, English words, _ and @. Please try again."
            });
        }

        function validateSubject() {
            validateInput.call(this, {
                pattern: subjectPattern,
                cleanInputError: "Please enter subject.",
                invalidInputError: "Invalid subject. The subject field can include " +
                "only digits and English words. Please try again."
            });
        }

        function validateMessage() {
            validateInput.call(this, {
                pattern: messagePattern,
                cleanInputError: "Please enter message.",
                invalidInputError: "Invalid message. The message field must have 20 symbols at least. Please try again."
            });
        }

        function validateInput({
            pattern = /.*/gi,
            cleanInputError = "",
            invalidInputError = "" }) {
            let inputElem = this,
                inputErrorElem = inputElem.parentNode.querySelector(".input-error-message");

            let inputtedData = inputElem.value;
            if (!inputtedData) {
                inputErrorElem.textContent = cleanInputError;
                hasErrors = true;
                return;
            }

            if (pattern.test(inputtedData) === false) {
                inputErrorElem.textContent = invalidInputError;
                hasErrors = true;
                return;
            }

            inputErrorElem.textContent = "";
        }
    }
});