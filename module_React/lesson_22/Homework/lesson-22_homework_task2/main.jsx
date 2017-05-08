/**
 * Lesson 22, Homework, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Создайте класс Person со слеюующими свойствами:
 *  Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”), lastName(значение по умолчанию – “Doe”), age(по умолчанию, если свойство не указано, то 0)  и gender(по умолчанию – “Male”). Значения записываются в this.firstName, this.lastName, this.age и this.gender соответственно.
 *  Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.
 *  Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.
 *
 * ### Задача 2
 * Создайте класс User, который наследует от класса Person (из предыдущей задачи),
 * со свойствами signUpDate(дата регистрации, по умолчанию 0) и id.
 * Создайте несколько экземпляров класса и запишите их в массив users.
 */

class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi() {
        console.log(`Hello, my  name is ${this.fullName()}`);
    }
}

class User extends Person {
    constructor(id, signUpDate = 0, ...props) {
        super(...props);
        this.id = id;
        this.signUpDate = signUpDate.toLocaleString("en");
    }
}

const users = [
    new User(0, new Date()),
    new User(1, new Date(2007)),
    new User(2)
];