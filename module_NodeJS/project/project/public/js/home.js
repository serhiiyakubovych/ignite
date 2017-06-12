window.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form"),
          projectsContainer = document.getElementById("projects"),
          addNewProject = document.getElementById("add-new-project");

    loginForm.addEventListener("submit", checkLoginDetails);
    projectsContainer.addEventListener("click", handleClickOnProject);
    addNewProject.addEventListener("click", createNewProject);

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
                window.location.reload();
            } else {
                console.log(xhr.responseText);
                loginFormErrors.innerHTML = xhr.responseText;
            }
        });

        xhr.send(userDetailsJSON);
    }

    function handleClickOnProject(event) {
        let projectElem = event.target.closest(".project"),
            projectId = projectElem.dataset.projectId;

        if ((!projectElem) || (!projectId)) {
            return;
        }

        if (event.target.matches(".hidden-project-block__edit-button")) {
            editProject(projectId);
        } else if (event.target.matches(".hidden-project-block__info-button")) {
            displayProject(projectId);
        } else if (event.target.matches(".hidden-project-block__close-button")) {
            deleteProject(projectId);
        }
    }

    function editProject(projectId) {
        window.location.href = `/edit/${projectId}`;
    }
    function displayProject(projectId) {
        window.location.href = `/view/${projectId}`;
    }
    function deleteProject(projectId) {
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", `/delete/${projectId}`);
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                window.location.reload();
            } else {
                console.log(xhr.responseText);
            }
        });
        xhr.send();
    }
    function createNewProject() {
        window.location.href = "/new";
    }
});