/**
 * NodeJS Final Project, Serhii Yakubovych
 */

const express = require("express"),
      http = require("http"),
      path = require("path"),
      session = require("express-session"),
      bodyParser = require("body-parser"),
      sassMiddleware = require('node-sass-middleware'),
      favicon = require('serve-favicon'),
      routes = require("./routes"),
      requestHandlers = require("./handlers/requests_handlers");
      sessionStore = require("./models/db_connection").sessionStore;

const app = express();

app.set("PORT", process.env.port || 1337);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "images", "favicon.png")));
app.use("/css", sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css")
}));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "Secret key",
    saveUninitialized: true,
    resave: true,
    store: sessionStore
}));
app.use(bodyParser.json());

routes(app, requestHandlers);

app.use(requestHandlers.handleServerError);

http.createServer(app).listen(app.get("PORT"));