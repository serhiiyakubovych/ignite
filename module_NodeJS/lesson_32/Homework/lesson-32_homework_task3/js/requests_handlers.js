const dbPool = require("./db_connections").dbPool,
      passwordHandler = require("./password_handler");

function displayHomePage(req, res, next) {
    res.render("index", {username: req.session.username});
}

function displaySignupPage(req, res, next) {
    res.render("signup");
}

function signupUser(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (connErr) {
            console.log(connErr);
            res.status(500).end("500. Cannot access to DB.");
            return;
        }

        let username = req.body.userName,
            passwordHash = passwordHandler.encryptPassword(req.body.userPassword),
            sql = "INSERT INTO `users` (username, passwordHash) VALUES (?, ?)",
            values = [username, passwordHash];
        
        dbConnection.query(sql, values, (queryError) => {
            dbConnection.release();

            if (queryError) {
                console.log(queryError);
                res.status(500).end("500. Cannot sign up.");
                return;
            }

            res.end();
        });
    });
}

function displayLoginPage(req, res, next) {
    res.render("login");
}

function loginUser(req, res, next) {
    dbPool.getConnection((connErr, dbConnection) => {
        if (connErr) {
            console.log(connErr);
            res.status(500).end("500. Cannot access to DB.");
            return;
        }

        let username = req.body.userName,
            passwordHash = passwordHandler.encryptPassword(req.body.userPassword),
            sql = "SELECT * FROM `users` WHERE username=? AND passwordHash=?",
            values = [username, passwordHash];
        
        dbConnection.query(sql, values, (queryError, rows) => {
            dbConnection.release();

            if (queryError) {
                console.log(queryError);
                res.status(500).end("500. Cannot log in.");
                return;
            }

            if (rows.length === 0) {
                res.status(400).end("Invalid password or username.");
                return;
            }

            req.session.username = rows[0].username;
            res.end();
        });
    });
}

function handleServerErrors(err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.");
        next(err.message);
    }
}

module.exports = {
    displayHomePage,
    displaySignupPage,
    signupUser,
    displayLoginPage,
    loginUser,
    handleServerErrors
};