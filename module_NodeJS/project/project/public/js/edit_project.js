window.addEventListener("DOMContentLoaded", () => {
    const editProjectForm = document.getElementById("edit-project-form");
    editProjectForm.addEventListener("submit", updateProject);

    function updateProject(event) {
        if (editProjectForm.dataset.editMethod !== "PUT") {
            return;
        }
        event.preventDefault();

        let xhr = new XMLHttpRequest();
        xhr.open("PUT", `/update/${editProjectForm.dataset.projectId}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        let updatedProjectJSON = JSON.stringify({
            title: editProjectForm.elements.title.value,
            author: editProjectForm.elements.author.value,
            category: editProjectForm.elements.category.value,
            description: editProjectForm.elements.description.value
        });

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                window.location.reload();
            } else {
                console.log(xhr.responseText);
            }
        });

        xhr.send(updatedProjectJSON);
    }
});