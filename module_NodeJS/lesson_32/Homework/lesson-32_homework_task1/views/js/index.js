window.addEventListener("DOMContentLoaded", () => {
    let itemIdInput = document.getElementById("item-id"),
        removeItemButton = document.getElementById("remove-item-button"),
        editItemButton = document.getElementById("edit-item-button");
    
    removeItemButton.addEventListener("click", removeItemById);
    editItemButton.addEventListener("click", editItemById);

    function removeItemById() {
        let itemId = itemIdInput.value;
        if (!itemId.trim()) {
            return;
        }

        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", "/");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                window.location.href = "/";
            } else {
                console.log(xhr.responseText);
            }
        });

        let dataJSON = JSON.stringify({ itemId });

        xhr.send(dataJSON);
    }
    function editItemById() {
        let itemId = itemIdInput.value;
        if (!itemId.trim()) {
            return;
        }

        window.location.href = `/editItem/${itemId}`;
    }
});