const fs = require("fs"),
      path = require("path");

let todos = [
    { id: 1, name: 'Work', description: 'Stuff to do' }, { id: 2, name: 'Walk the dog', description: 'Need to get up early' },
    { id: 3, name: 'Finish project', description: 'An important task' }, { id: 4, name: 'Earn a lot of money', description: 'As soon as possible' },
    { id: 5, name: 'Go to sleep', description: 'late at night'}
    ];

function displayHomePage(req, res, next) {
    fs.readFile(path.join(__dirname, "../index.html"), (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("500. Cannot load index.html.");
            return;
        }

        res.end(data.toString());
    });
}

function returnItems(req, res, next) {
    res.json(todos);
}

function addItem(req, res, next) {
    let newItem = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    };
    todos.push(newItem);
    res.end();
}

function updateItem(req, res, next) {
    let updatedItemId = req.params.itemId,
        targetItem = todos.find((todoItem) => +todoItem.id === +updatedItemId),
        targetItemIndex = todos.indexOf(targetItem);
    
    if (!targetItem) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end(`Cannot find and update the item with ID ${updatedItemId}`);
        return;
    }

    let updatedItem = {
        id: updatedItemId,
        name: req.body.name,
        description: req.body.description
    };
    todos[targetItemIndex] = updatedItem;
    res.end();
}

function removeItem(req, res, next) {
    let removedItemId = req.params.itemId,
        targetItem = todos.find((todoItem) => +todoItem.id === +removedItemId),
        targetItemIndex = todos.indexOf(targetItem);
    
    if (!targetItem) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end(`Cannot find and delete the item with ID ${removedItemId}`);
        return;
    }

    todos.splice(targetItemIndex, 1);
    res.end();
}

function handleServerErrors(err, req, res, next) {
    if (err) {
        console.log(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("500. Server error.");
        next(err.message);
    }
}

module.exports = {
    displayHomePage,
    returnItems,
    addItem,
    updateItem,
    removeItem,
    handleServerErrors
};