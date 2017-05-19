function receiveUsers(users) {
    return {
        type: "RECEIVE_USERS",
        payload: users
    };
}

export function fetchUsers(usersUrl) {
    return function(dispatch) {
        fetch(usersUrl)
            .then((response) => response.json())
            .then((json) => dispatch(receiveUsers(json)))
            .catch((err) => console.log(err));
    };
}