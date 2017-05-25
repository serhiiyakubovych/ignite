const matchedActionsToDataType = {
    slides: "RECEIVE_SLIDES",
    works: "RECEIVE_WORKS",
    members: "RECEIVE_MEMBERS",
    news: "RECEIVE_NEWS",
    reviews: "RECEIVE_REVIEWS"
};

function receiveData(dataType, data) {
    return {
        type: matchedActionsToDataType[dataType],
        [dataType]: data
    };
}

export function fetchData(dataType, dataUrl) {
    return function (dispatch) {
        fetch(dataUrl)
            .then((response) => response.json())
            .then((json) => dispatch(receiveData(dataType, json)))
            .catch((err) => console.log(err));
    };
}