window.addEventListener("DOMContentLoaded", () => {
    let editItemForm = document.getElementById("edit-item-form"),
        nameInput = editItemForm.elements.name,
        infoInput = editItemForm.elements.info;

    editItemForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let xhr = new XMLHttpRequest();
        xhr.open("PUT", `/editItem/${editItemForm.dataset.itemId}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.addEventListener("load", () => {
            window.location.href = "/";
        });

        let dataJSON = JSON.stringify({
            itemName: nameInput.value,
            itemInfo: infoInput.value
        });

        xhr.send(dataJSON);
    });
});