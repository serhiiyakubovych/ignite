const fs = require("fs"),
      url = require("url"),
      path = require("path"),
      queries = require("../models/queries"),
      dbPool = require("../models/db_connection").dbPool;

function goToHomePage(req, res, next) {
    res.redirect("/home");
}

function displayHomePage(req, res, next) {
    let projectsCategory = url.parse(req.url, true).query.category,
        getProjects;

    if (projectsCategory) {
        getProjects = queries.getProjectsByCategory;
    } else {
        getProjects = queries.getAllProjects;
    }

    getProjects(dbPool, projectsCategory)
        .then((projects) => {
            let renderContext = {
                title: "Home",
                projects,
                username: req.session.username,
                currentCategory: projectsCategory
            };
            res.render("home", renderContext);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end(err.message);
        });
}

function displayContactPage(req, res, next) {
    res.render("contact", {title: "Contact"});
}

function displayLoginPage(req, res, next) {
    res.render("login", {title: "Login"});
}

function checkLoginDetails(req, res, next) {
    if ((req.body.username === "admin") && (req.body.password === "12345")) {
        req.session.username = req.body.username;
        res.status(200).end();
    } else {
        res.status(403).end("Invalid login or password.");
    }
}

function displayProjectPage(req, res, next) {
    let projectId = req.params.id;
    queries.getProjectById(dbPool, projectId)
        .then((project) => {
            let renderContext = {
                title: project.title,
                project
            };
            res.render("display_project", renderContext);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end("500. Cannot make the request to Projects Database.\n", err);
        });
}

function displayProjectEditPage(req, res, next) {
    if (req.session.username !== "admin") {
        res.redirect("/login");
        return;
    }

    let projectId = req.params.id;
    queries.getProjectById(dbPool, projectId)
        .then((project) => {
            let renderContext = {
                title: project.title,
                mode: "edit",
                project
            };
            res.render("edit_project", renderContext);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end("500. Cannot make the request to Projects Database.\n", err);
        });
}

function deleteProject(req, res, next) {
    if (req.session.username !== "admin") {
        res.redirect("/login");
        return;
    }

    let projectId = req.params.id;
    queries.deleteProject(dbPool, projectId)
        .then(() => {
            res.status(200).end();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end("500. Cannot make the request to Projects Database.\n", err);
        });
}

function displayCreateNewProjectPage(req, res, next) {
    res.render("edit_project", {mode: "add", title: "Add new project"})
}

function addProject(req, res, next) {
    let target_path = saveFile(req);

    let newProject = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        src: target_path
    };

    queries.addProject(dbPool, newProject)
        .then(() => {
            res.redirect("/home");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end("500. Cannot make the request to Projects Database.\n", err);
        });
}

function updateProject(req, res, next) {
    let target_path;

    if (req.file) {
        target_path = saveFile(req);
    } else {
        target_path = req.body.projectImage;
    }

    let updatedProject = {
        id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        src: target_path
    };
    queries.updateProject(dbPool, updatedProject)
        .then(() => {
            res.status(200).end();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end("500. Cannot make the request to Projects Database.\n", err);
        });
}

function handleServerError(err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(500).end(err);
    }
}

// local (non exported) functions
function saveFile(req) {
    let tmp_path = req.file.path,
        target_path = path.join(req.file.destination, req.file.originalname),
        src = fs.createReadStream(tmp_path),
        dest = fs.createWriteStream(target_path),
        pathForDB = `/images/${req.file.originalname}`;

    src.on("end", () => {
        unlinkTmpPath();
    });
    src.on("error", (err) => {
        unlinkTmpPath();
    });

    src.pipe(dest);

    return pathForDB;

    function unlinkTmpPath() {
        fs.unlink(tmp_path, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}

module.exports = {
    goToHomePage,
    displayHomePage,
    displayContactPage,
    displayLoginPage,
    checkLoginDetails,
    displayProjectPage,
    displayProjectEditPage,
    deleteProject,
    displayCreateNewProjectPage,
    addProject,
    updateProject,
    handleServerError
};