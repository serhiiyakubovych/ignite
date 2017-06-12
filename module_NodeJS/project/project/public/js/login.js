window.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", checkLoginDetails);

    function checkLoginDetails(event) {
        event.preventDefault();

        let loginFormErrors = loginForm.querySelector(".login-form-errors");
        loginFormErrors.innerHTML = "";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        let userDetailsJSON = JSON.stringify({
            username: loginForm.elements.username.value,
            password: loginForm.elements.password.value
        });

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                window.location.href = "/home";
            } else {
                console.log(xhr.responseText);
                loginFormErrors.innerHTML = xhr.responseText;
            }
        });

        xhr.send(userDetailsJSON);
    }
});