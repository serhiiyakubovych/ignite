window.addEventListener("DOMContentLoaded", () => {
    let addItemForm = document.getElementById("add-item-form");
    addItemForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let nameInput = addItemForm.elements.name,
            infoInput = addItemForm.elements.info,
            xhr = new XMLHttpRequest();
        
        xhr.open("POST", "/addItem");
        xhr.setRequestHeader("Content-Type", "application/json");

        let dataJSON = JSON.stringify({
            name: nameInput.value,
            info: infoInput.value
        });

        xhr.send(dataJSON);

        window.location.href = "/";
    });
});