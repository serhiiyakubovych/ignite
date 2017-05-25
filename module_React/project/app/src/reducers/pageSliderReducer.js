const defaultState = {
    slides: [{imgSrc: "", subtitle: "", title: "", description: ""}]
};

export default function pageSliderReduce(state = defaultState, action) {
    if (action.type === "RECEIVE_SLIDES") {
        return Object.assign({}, state, {slides: [...action.slides]});
    }
    return state;
}