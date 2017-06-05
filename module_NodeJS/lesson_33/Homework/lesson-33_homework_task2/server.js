/**
 * Lesson 33, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Дано массив todos: 
 * ```
 * todos = [
 * { id: 1, name: 'Work', description: 'Stuff to do' }, { id: 2, name: 'Walk the dog', description: 'Need to get up early' },
 * { id: 3, name: 'Finish project', description: 'An important task' }, { id: 4, name: 'Earn a lot of money', description: 'As soon as possible' },
 * { id: 5, name: 'Go to sleep', description: 'late at night'}
 * ]
 * ``` 
 * Создайте приложение todoApp. 
 * Используя Restify, создайте REST API приложения с такой структурой: 
 * 1) /addItem - POST-запрос, создание нового элемента массива todos
 * 2) / - GET-запрос, показать все элементы массива todos в виде таблицы 
 * 3) /update/itemID - PUT-запрос, обновить элемент массива todos с указанным id. Тело запроса - в формате JSON. 
 * 4) /delete/itemID -DELETE-запрос, удалить элемент массива todos с указанным id 
 * На странице приложения должны находиться следующие элементы: 
 * 1) Таблица, в которой отображены элементы массива todos 
 * 2) 3 поля ввода с соответствующими названиями: id, name, description. 
 * 3) 3 кнопки с названиями: Add Item(Создать элемент), Delete Item(Удалить элемент), Update Item(Обновить элемент), 
 * при нажатии на которые на сервер делаются AJAX-запросы к REST API для выполнения соответствующих операций.  
 * 
 * ###Задача 2 
 * Модифицируйте код предыдущей задачи. Вместо массива todos для хранения данных используйте базу данных. 
 */

const restify = require("restify"),
      requestsHandlers = require("./js/requests_handlers");

const port = process.env.port || 1337,
      server = restify.createServer({
          name: "Todos Server"
      });

server.use(restify.bodyParser({ mapParams: true }));

server.get("/", requestsHandlers.displayHomePage);
server.get("/getAllItems", requestsHandlers.returnItems);
server.post("/addItem", requestsHandlers.addItem);
server.put("/update/:itemId", requestsHandlers.updateItem);
server.del("/delete/:itemId", requestsHandlers.removeItem);

server.use(requestsHandlers.handleServerErrors);

server.listen(port);