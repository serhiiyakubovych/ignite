/**
 * NodeJS Final Project, Serhii Yakubovych
 */

const express = require("express"),
      http = require("http"),
      path = require("path"),
      sassMiddleware = require('node-sass-middleware'),
      routes = require("./routes"),
      requestHandlers = require("./handlers/requests_handlers");

const app = express();

app.set("PORT", process.env.port || 1337);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/css", sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css")
}));
app.use(express.static(path.join(__dirname, "public")));

routes(app, requestHandlers);

app.use(requestHandlers.handleServerError);

http.createServer(app).listen(app.get("PORT"));