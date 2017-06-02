/**
 * Lesson 31, Homework, Serhii Yakubovych
 * 
 * Для выполнения заданий используйте базу данных test, которая находится в папке test_db рядом с файлом с задачами. 
 * 
 * ###Задача 1 
 * Создайте подключение к базе данных test через пул соединений. 
 * При GET-запросе по пути '/' выполните запрос к базе данных для выбора 
 * всех элементов таблицы test_table и отобразите их в виде таблицы. 
 * 
 * ###Задача 2 
 * Дополните код предыдущей задачи. Реализуйте следующее: 
 * 1) При GET-запросе по пути '/addItem' открывается html страница с 2 полями ввода(name, info) и кнопкой. 
 * 2) Если поля ввода(или одно из полей ввода) не пустые, 
 * при нажатии на кнопку выполняется добавление нового элемента в базу данных
 * (данные полей ввода сохраняются в соответсвующих колонках таблицы базы данных). 
 * 3) После завершения запроса добавления элемента в базу данных, 
 * происходит редирект на главную страницу(GET-запрос по пути '/').
 */

const express = require("express"),
      http = require("http"),
      path = require("path")
      bodyParser = require("body-parser"),
      requestHandlers = require("./js/request_handlers");

const app = express(),
      jsonParser = bodyParser.json();

app.set("PORT", process.env.port || 1337);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "views")));
app.use(jsonParser);

app.route("/").get(requestHandlers.displayItems);
app.route("/addItem")
    .get(requestHandlers.displayAddItemPage)
    .post(requestHandlers.addNewItem);

app.use(requestHandlers.handleServerError);

http.createServer(app).listen(app.get("PORT"));