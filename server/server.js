const express = require('express');
const app = express();
const PORT = 5555;
const path = require('path');
const bodyParser = require('body-parser');
const userController = require("./database/userController");

app.use(bodyParser.json())


app.post('/createuser', userController.postUser, (req, res) => {
  return res.status(200).json();
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log('server is listening on PORT:', PORT))