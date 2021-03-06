let users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
    ];

function returnAllUsers(req, res, next) {
    let usersJSON = JSON.stringify(users);
    res.end(usersJSON);
}

function addNewUser(req, res, next) {
    let newUser = {
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.end();
}

module.exports = {
    returnAllUsers,
    addNewUser
};