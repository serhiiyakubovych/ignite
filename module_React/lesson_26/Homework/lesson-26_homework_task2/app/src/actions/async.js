function receiveWorks(works) {
    return {
        type: "RECEIVE_WORKS",
        works
    };
}

export function fetchWorks(worksUrl) {
    return function(dispatch) {
        fetch(worksUrl)
            .then((response) => response.json())
            .then((json) => dispatch(receiveWorks(json)))
            .catch((err) => console.log(err));
    };
}