const defaultState = {
    votes: [],
    averageMark: 0
};

export function aboutReducer(state = defaultState, action) {
    if (action.type === "RECEIVE_VOTES") {
        const averageMark = getAverageMark([...action.votes]);
        return Object.assign({}, state, {
            votes: [...action.votes],
            averageMark
        });
    }
    if (action.type === "MAKE_VOTE_FOR_APPLICATION") {
        const newVotes = [...state.votes];
        newVotes.push(+action.newVote);
        const averageMark = getAverageMark([...newVotes]);
        return Object.assign({}, state, {
            votes: [...newVotes],
            averageMark
        });
    }
    return state;

    function getAverageMark(votes = []) {
        const averageMark = votes.reduce((sum, vote) => sum + +vote, 0) / votes.length;
        return averageMark.toFixed(2);
    }
}