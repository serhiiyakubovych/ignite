function getAllProjects(dbPool) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((dbConnectionError, dbConnection) => {
            if (dbConnectionError) {
                reject(dbConnectionError);
                return;
            }

            let sql = "SELECT * FROM `projects`";

            dbConnection.query(sql, (queryError, rows) => {
                dbConnection.release();
                if (queryError) {
                    reject(queryError);
                }
                resolve(rows);
            });
        });
    });
}

function getProjectsByCategory(dbPool, category) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((dbConnectionError, dbConnection) => {
            if (dbConnectionError) {
                reject(dbConnectionError);
                return;
            }

            let sql = "SELECT * FROM `projects` WHERE category=?",
                values = [category];

            dbConnection.query(sql, values, (queryError, rows) => {
                dbConnection.release();
                if (queryError) {
                    reject(queryError);
                }
                resolve(rows);
            });
        });
    });
}

function getProjectById(dbPool, projectId) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((dbConnectionError, dbConnection) => {
            if (dbConnectionError) {
                reject(dbConnectionError);
                return;
            }

            let sql = "SELECT * FROM `projects` WHERE id=?",
                values = [projectId];

            dbConnection.query(sql, values, (queryError, rows) => {
                dbConnection.release();
                if (queryError) {
                    reject(queryError);
                }
                resolve(rows[0]);
            });
        });
    });
}

function deleteProject(dbPool, projectId) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((dbConnectionError, dbConnection) => {
            if (dbConnectionError) {
                reject(dbConnectionError);
                return;
            }

            let sql = "DELETE FROM `projects` WHERE id=?",
                values = [projectId];

            dbConnection.query(sql, values, (queryError) => {
                dbConnection.release();
                if (queryError) {
                    reject(queryError);
                }
                resolve();
            });
        });
    });
}

function addProject(dbPool, newProject) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((dbConnectionError, dbConnection) => {
            if (dbConnectionError) {
                reject(dbConnectionError);
                return;
            }
            let sql = "INSERT INTO `projects` (title, author, description, category, src, date) VALUES (?, ?, ?, ?, ?, ?)",
                values = [newProject.title, newProject.author, newProject.description, newProject.category, "/images/001.jpg", new Date()];

            dbConnection.query(sql, values, (queryError) => {
                dbConnection.release();
                if (queryError) {
                    reject(queryError);
                }
                resolve();
            });
        });
    });
}

function updateProject(dbPool, updatedProject) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((dbConnectionError, dbConnection) => {
            if (dbConnectionError) {
                reject(dbConnectionError);
                return;
            }

            let sql = "UPDATE `projects` SET title=?, author=?, description=?, category=?, src=?, date=? WHERE id=?",
                values = [updatedProject.title, updatedProject.author, updatedProject.description,
                    updatedProject.category, "/images/001.jpg", new Date(), updatedProject.id];

            dbConnection.query(sql, values, (queryError) => {
                dbConnection.release();
                if (queryError) {
                    reject(queryError);
                }
                resolve();
            });
        });
    });
}

module.exports = {
    getAllProjects,
    getProjectsByCategory,
    getProjectById,
    deleteProject,
    addProject,
    updateProject
};