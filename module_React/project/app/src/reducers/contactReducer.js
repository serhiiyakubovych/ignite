const defaulState = {
    inputedName: "",
    inputedEmail: "",
    inputedMessage: "",
    patterns: {
        namePattern: /^[a-z]+$/i,
        emailPattern: /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,3}$/i,
        messagePattern: /^\w{20,}$/i
    },
    errors: {
        nameError: "",
        emailError: "",
        messageError: ""
    }
};

export default function contactReducer(state = defaulState, action) {
    if (action.type === "CHANGE_CONTACT_INPUTED_NAME") {
        let newNameError = [];
        if (action.newInputedName.trim() === "") {
            newNameError.push("Empty name input.");
        }
        if (!state.patterns.namePattern.test(action.newInputedName)) {
            newNameError.push("Name should contain only English letters.")
        }
        newNameError = newNameError.join(" ");
        let newErrors = Object.assign({}, state.errors, {nameError: newNameError});
        return Object.assign({}, state, {inputedName: action.newInputedName, errors: newErrors});
    }
    if (action.type === "CHANGE_CONTACT_INPUTED_EMAIL") {
        let newEmailError = [];
        if (action.newInputedEmail.trim() === "") {
            newEmailError.push("Empty email input.");
        }
        if (!state.patterns.emailPattern.test(action.newInputedEmail)) {
            newEmailError.push("Email should be in the format zxcv@mail.com.")
        }
        newEmailError = newEmailError.join(" ");
        let newErrors = Object.assign({}, state.errors, {emailError: newEmailError});
        return Object.assign({}, state, {inputedEmail: action.newInputedEmail, errors: newErrors});
    }
    if (action.type === "CHANGE_CONTACT_INPUTED_MESSAGE") {
        let newMessageError = [];
        if (action.newInputedMessage.trim() === "") {
            newMessageError.push("Empty message input.");
        }
        if (!state.patterns.messagePattern.test(action.newInputedMessage)) {
            newMessageError.push("Message should contain 20 symbols at least.")
        }
        newMessageError = newMessageError.join(" ");
        let newErrors = Object.assign({}, state.errors, {messageError: newMessageError});
        return Object.assign({}, state, {inputedMessage: action.newInputedMessage, errors: newErrors});
    }
    return state;
}