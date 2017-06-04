window.addEventListener("DOMContentLoaded", () => {
    let loginForm = document.getElementById("login-form"),
        loginError = document.getElementById("login-error");

    loginForm.addEventListener("submit", sendNewUserData);

    function sendNewUserData(event) {
        event.preventDefault();
        loginError.textContent = "";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                window.location.href = "/";
            } else {
                loginError.textContent = xhr.responseText;
            }
        });

        let dataJSON = JSON.stringify({
            userName: loginForm.elements.userName.value,
            userPassword: loginForm.elements.userPassword.value
        });

        xhr.send(dataJSON);
    }
});