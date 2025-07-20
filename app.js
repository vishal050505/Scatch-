// 📦 Core dependencies
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
require("dotenv").config(); // ✅ Always at the top before using env vars

// 🗂 Routers
const indexRouter = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

// 🔗 DB connection
const db = require("./config/mongoose-connection");

// 🚀 App initialization
const app = express();

// 🔧 Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET, // ✅ Make sure it's set in your .env
  })
);

app.use(flash());

// 🖼 Static files & views
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// 🚦 Routes
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// 📡 Server start
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
