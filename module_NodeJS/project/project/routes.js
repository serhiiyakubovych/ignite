const multer = require("multer"),
      upload = multer({dest: 'images'});

module.exports = (app, requestsHandlers) => {
    app.route("/").get(requestsHandlers.goToHomePage);
    app.route("/home").get(requestsHandlers.displayHomePage);
    app.route("/contact").get(requestsHandlers.displayContactPage);
    app.route("/login").post(requestsHandlers.checkLoginDetails);
    app.route("/view/:id").get(requestsHandlers.displayProjectPage);
    app.route("/edit/:id").get(requestsHandlers.displayProjectEditPage);
    app.route("/delete/:id").delete(requestsHandlers.deleteProject);
    app.route("/new").get(requestsHandlers.displayCreateNewProjectPage);
    app.post("/uploads", upload.single("projectImage"), requestsHandlers.addProject);
    app.route("/update/:id").put(requestsHandlers.updateProject);
};