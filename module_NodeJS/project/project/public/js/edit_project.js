window.addEventListener("DOMContentLoaded", () => {
    const editProjectForm = document.getElementById("edit-project-form"),
          projectImageInput = document.getElementById("project-image-input");

    editProjectForm.addEventListener("submit", updateProject);
    projectImageInput.addEventListener("change", displayProjectImage);

    function updateProject(event) {
        if (editProjectForm.dataset.editMethod !== "PUT") {
            return;
        }
        event.preventDefault();

        let xhr = new XMLHttpRequest(),
            projectId = editProjectForm.dataset.projectId,
            formData = new FormData(editProjectForm);

        if ((!formData.get("projectImage")) || (!formData.get("projectImage").size)) {
            let projectImage = projectImageInput.parentNode.querySelector("img") || {};
            formData.append("projectImage", projectImage.src);
        }

        xhr.open("PUT", `/update/${projectId}`);

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                window.location.href = `/view/${projectId}`;
            } else {
                console.log(xhr.responseText);
            }
        });

        xhr.send(formData);
    }

    function displayProjectImage(event) {
        let imageInput = event.target;

        if (imageInput.files && imageInput.files[0]) {
            let reader = new FileReader();

            reader.onload = function (ev) {
                let imageInputLabel = imageInput.parentNode,
                    projectImage = imageInputLabel.querySelector("img") || new Image();

                projectImage.src = ev.target.result;
                imageInput.parentNode.appendChild(projectImage);
            };

            reader.readAsDataURL(imageInput.files[0]);
        }
    }
});