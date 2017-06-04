const dbPool = require("./db_connections").dbPool,
      passwordHandler = require("./password_handler");

function displayHomePage(req, res, next) {
    res.render("index");
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

            res.redirect("/");
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
    handleServerErrors
};