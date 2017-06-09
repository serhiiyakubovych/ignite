module.exports = (app, requestsHandlers) => {
    app.route("/").get(requestsHandlers.goToHomePage);
    app.route("/home").get(requestsHandlers.displayHomePage);
};