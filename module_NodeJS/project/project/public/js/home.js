window.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects"),
          addNewProject = document.getElementById("add-new-project");

    projectsContainer.addEventListener("click", handleClickOnProject);
    addNewProject.addEventListener("click", createNewProject);

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
                window.location.href = "/login";
            }
        });
        xhr.send();
    }
    function createNewProject() {
        window.location.href = "/new";
    }
});