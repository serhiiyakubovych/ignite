const dbPool = require("./connection_pool");

function displayItems(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (ckeckConnectionError(connErr, res)) {
            return;
        }
        
        let sql = "SELECT * FROM `test_table`";
        dbConnection.query(sql, (queryError, rows) => {
            if (ckeckQueryError(queryError, res)) {
                return;
            }

            res.render("index", { rows });

            dbConnection.release();
        });
    });
}

function displayAddItemPage(req, res, next) {
    res.render("addItem");
}

function addNewItem(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (ckeckConnectionError(connErr, res)) {
            return;
        }

        let sql = "INSERT INTO `test_table` (name, info) VALUES (?, ?)",
            values = [req.body.name, req.body.info];
        dbConnection.query(sql, values, (queryError) => {
            if (ckeckQueryError(queryError, res)) {
                return;
            }
        });
    });
}

function handleServerError(err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.");
        next(err.message);
    }
}

// This two functions are only for this module
function ckeckConnectionError(connErr, res) {
    if (connErr) {
        console.log(connErr);
        res.status(500).end("500. Cannot access to DB.");
        return true;
    }
}
function ckeckQueryError(queryError, res) {
    if (queryError) {
        console.log(queryError);
        res.status(500).end("500. Cannot access to table `test_table`.");
        return true;
    }
}

module.exports = {
    displayItems,
    displayAddItemPage,
    addNewItem,
    handleServerError
};