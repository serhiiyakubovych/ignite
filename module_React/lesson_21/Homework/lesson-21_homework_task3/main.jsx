/**
 * Lesson 21, Homework, Serhii Yakubovych
 */
/**
 * ### Задача 3
 * Создайте React-компонент, содержащий форму со следующими полями:
 * * Name
 * * Email
 * * Phone number
 * * Message
 * Используя обработчики событий,  реализуйте валидацию формы
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class MessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            errorMessages: {
                userName: "",
                userEmail: "",
                userPhone: ""
            }
        };
        this._validateName = this._validateName.bind(this);
        this._validateEmail = this._validateEmail.bind(this);
        this._validatePhone = this._validatePhone.bind(this);
        this._validateInput = this._validateInput.bind(this);
        this._validateForm = this._validateForm.bind(this);
    }
    render() {
        return (
            <form className="container" onSubmit={this._validateForm}>
                <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input type="text" name="userName" className="form-control" required onInput={this._validateName} />
                    <p>{this.state.errorMessages.userName}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="userEmail">Email</label>
                    <input type="text" name="userEmail" className="form-control" required onInput={this._validateEmail} />
                    <p>{this.state.errorMessages.userEmail}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="userPhone">Phone number</label>
                    <input type="text" name="userPhone" className="form-control" required onInput={this._validatePhone} />
                    <p>{this.state.errorMessages.userPhone}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="userMessage">Message</label>
                    <textarea name="userMessage" className="form-control"></textarea>
                </div>
                <input type="submit"/>
            </form>
        );
    }
    _validateName(event) {
        this._validateInput({
            inputType: "userName",
            pattern: /^[a-z]+$/i,
            inputtedData: event.target.value,
            errorMessage: "Name should have only English letters."
        });
    }
    _validateEmail(event) {
        if (event === undefined) {
            return;
        }
        this._validateInput({
            inputType: "userEmail",
            pattern: /^[\w\._-]+@[\w\._-]+\.[\w\._-]{1,5}$/i,
            inputtedData: event.target.value,
            errorMessage: "Email should be as somemail@mail.com."
        });
    }
    _validatePhone(event) {
        if (event === undefined) {
            return;
        }
        this._validateInput({
            inputType: "userPhone",
            pattern: /^\d+$/,
            inputtedData: event.target.value,
            errorMessage: "Phone field can contain only numbers."
        });
    }
    _validateInput({inputType, pattern, inputtedData, errorMessage}) {
        const newErrorMessages = Object.assign({}, this.state.errorMessages);
        if (pattern.test(inputtedData)) {
            newErrorMessages[inputType] = "";
        } else {
            newErrorMessages[inputType] = errorMessage;
        }
        this.setState({
            errorMessages: newErrorMessages
        });
    }
    _validateForm(event) {
        const hasError = this.state.errorMessages.some((msg) => msg !== "");
        if (hasError) {
            event.preventDefault();
        }
    }
}

ReactDOM.render(<MessageForm />, document.getElementById("output"));