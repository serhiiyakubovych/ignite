function goToHomePage(req, res, next) {
    res.redirect("/home");
}

function displayHomePage(req, res, next) {
    res.render("home", {title: "Home", works: []});
}

function handleServerError(err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(500).end(err);
    }
}

module.exports = {
    goToHomePage,
    displayHomePage,
    handleServerError
};