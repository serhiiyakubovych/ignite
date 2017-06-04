window.addEventListener("DOMContentLoaded", () => {
    let signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", sendNewUserData);

    function sendNewUserData(event) {
        event.preventDefault();

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/signup");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.addEventListener("load", () => {
            window.location.href = "/";
        });

        let dataJSON = JSON.stringify({
            userName: signupForm.elements.userName.value,
            userPassword: signupForm.elements.userPassword.value
        });

        xhr.send(dataJSON);
    }
});