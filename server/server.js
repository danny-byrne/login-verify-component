const express = require('express');
const app = express();
const PORT = 5555;
const bodyParser = require('body-parser');
const userController = require("./database/userController");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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