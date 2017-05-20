const recieveDataFunctions = {
    "works": receiveWorks,
    "votes": receiveVotes
};

function receiveWorks(works) {
    return {
        type: "RECEIVE_WORKS",
        works
    };
}

function receiveVotes(votes) {
    return {
        type: "RECEIVE_VOTES",
        votes
    };
}

export function fetchData(fetchActionName, dataUrl) {
    return function(dispatch) {
        const recieveData = recieveDataFunctions[fetchActionName];
        fetch(dataUrl)
            .then((response) => response.json())
            .then((json) => dispatch(recieveData(json)))
            .catch((err) => console.log(err));
    };
}