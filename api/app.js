const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const TokenGenerator = require("./models/token_generator");

const tokensRouter = require("./routes/tokens");
const usersRouter = require("./routes/users");
const filesRouter = require("./routes/files");
const noteRouter = require("./routes/notes");

const app = express();
app.use(fileUpload());

// setup for receiving JSON
app.use(express.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  JWT.verify(token, "SECRET", (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

app.get("/", (req, res) => {
  res.send("It works");
  console.log(res);
});

app.use("/tokens", tokensRouter);
app.use("/users", usersRouter);
app.use("/files", filesRouter);
app.use("/note", noteRouter);

module.exports = app;
