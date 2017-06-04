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

function removeItem(req, res, next) {
    let itemId = req.body.itemId;
    if (!itemId) {
        res.status(400).end("400. Bad Request.");
        return;
    }

    dbPool.getConnection((connErr, dbConnection) => {
        if (ckeckConnectionError(connErr, res)) {
            return;
        }

        let sql = "DELETE FROM `test_table` WHERE id=?",
            values = [itemId];
        dbConnection.query(sql, values, (queryError) => {
            if (ckeckQueryError(queryError, res)) {
                return;
            }

            res.end();
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

            res.end();
            dbConnection.release();
        });
    });
}

function displayEditItemPage(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (ckeckConnectionError(connErr, res)) {
            return;
        }

        let itemId = req.params.itemId,
            sql = "SELECT * FROM `test_table` WHERE id=?",
            values = [itemId];
        
        dbConnection.query(sql, values, (queryError, rows) => {
            if (ckeckQueryError(queryError, res)) {
                return;
            }

            if (rows.length === 0) {
                res.status(400).end(`Do not have item with id ${itemId}.`);
                return;
            }

            let renderContext = {
                itemId,
                itemName: rows[0].name,
                itemInfo: rows[0].info
            };
            res.render("editItem", renderContext);
            dbConnection.release();
        });
    });
}

function updateItem(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (ckeckConnectionError(connErr, res)) {
            return;
        }

        let itemId = req.params.itemId,
            sql = "UPDATE `test_table` SET name=?, info=? WHERE id=?",
            values = [req.body.itemName, req.body.itemInfo, itemId];
        
        dbConnection.query(sql, values, (queryError, rows) => {
            if (ckeckQueryError(queryError, res)) {
                return;
            }

            res.end();
            dbConnection.release();
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
    removeItem,
    displayAddItemPage,
    addNewItem,
    displayEditItemPage,
    updateItem,
    handleServerError
};