/**
 * Lesson 31, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Дополните код 3-й задачи предыдущего урока. Добавьте в приложение возможность удалять и редактировать элементы.
 * Реализуйте следующее: 
 * 1) Добавьте на главную страницу приложения (страница, которая отображается при GET-запросе по пути '/'), 
 * поле ввода(для ввода id элемента) и 2 кнопки(Delete Item и Edit Item). 
 * 2) Если поле ввода не пустое, при нажатии на кнопку Delete Item осуществляется поиск в базе данных элемента по 
 * указанному в поле ввода ID и, в случае, если элемент найден, его удаление. 
 * 3) Если поле ввода не пустое, при нажатии на кнопку Edit Item осуществляется поиск в базе данных элемента по 
 * указанному в поле ввода ID и, в случае, если элемент найден, переход по пути '/editItem' и загрузка страницы 
 * редактирования элемента. 
 * 4) На странице редактирования элемента находятся 2 поля ввода: name и info и кнопка Apply. 
 * 5) Если поля ввода name и info не пустые, при нажатии на кнопку Apply осуществляется обновление элемента в 
 * базе данных. 
 * 6) После обновления или удаления элемента происходит перенаправление на главную страницу приложения.  
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

app.route("/")
    .get(requestHandlers.displayItems)
    .delete(requestHandlers.removeItem);
app.route("/addItem")
    .get(requestHandlers.displayAddItemPage)
    .post(requestHandlers.addNewItem);
app.route("/editItem/:itemId")
    .get(requestHandlers.displayEditItemPage)
    .put(requestHandlers.updateItem);

app.use(requestHandlers.handleServerError);

http.createServer(app).listen(app.get("PORT"));