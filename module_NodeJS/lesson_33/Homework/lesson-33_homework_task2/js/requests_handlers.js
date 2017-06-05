const dbPool = require("./db_pool"),
      fs = require("fs"),
      path = require("path");

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
    dbPool.getConnection((connErr, dbConnection) => {
        if (checkConnectionError(connErr, dbConnection, res)) {
            return;
        }

        let sql = "SELECT * FROM `items`";

        dbConnection.query(sql, (queryError, todos) => {
            dbConnection.release();

            if (checkQueryError(queryError, res)) {
                return;
            }

            res.json(todos);
        });
    });
}

function addItem(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (checkConnectionError(connErr, dbConnection, res)) {
            return;
        }

        let sql = "INSERT INTO `items` (name, description) VALUES (?, ?)",
            values = [req.body.name, req.body.description];

        dbConnection.query(sql, values, (queryError) => {
            dbConnection.release();

            if (checkQueryError(queryError, res)) {
                return;
            }

            res.end();
        });
    });
}

function updateItem(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (checkConnectionError(connErr, dbConnection, res)) {
            return;
        }

        let sql = "UPDATE `items` SET name=?, description=? WHERE id=?",
            values = [req.body.name, req.body.description, req.params.itemId];

        dbConnection.query(sql, values, (queryError) => {
            dbConnection.release();

            if (checkQueryError(queryError, res)) {
                return;
            }

            res.end();
        });
    });
}

function removeItem(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (checkConnectionError(connErr, dbConnection, res)) {
            return;
        }

        let sql = "DELETE FROM `items` WHERE id=?",
            values = [req.params.itemId];

        dbConnection.query(sql, values, (queryError) => {
            dbConnection.release();

            if (checkQueryError(queryError, res)) {
                return;
            }

            res.end();
        });
    });
}

function handleServerErrors(err, req, res, next) {
    if (err) {
        console.log(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("500. Server error.");
        next(err.message);
    }
}

// DB errors checkers
function checkConnectionError(connErr, dbConnection, res) {
    if (connErr) {
        dbConnection.release();
        console.log(connErr);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Cannot access to DB.");
        return true;
    }
}
function checkQueryError(queryError, res) {
    if (queryError) {
        console.log(queryError);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Cannot make query to DB.");
        return true;
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