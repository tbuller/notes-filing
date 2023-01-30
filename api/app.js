const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const TokenGenerator = require("./models/token_generator");

const app = express()

const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} from ${req.url}`)
  next()
}

app.use('/api/notes-filing', logRequest)

app.get('/', (req, res) => {
  res.send('It works')
  console.log(res)
})

module.exports = app;
