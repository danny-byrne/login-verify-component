const db = require('./model');

module.exports = {
  postUser: function (req, res, next) {
    console.log('inside userController.postUser, req.body is', req.body)
    let { firstName,
      lastName,
      userName,
      email,
      password } = req.body;
    let params = [ firstName,
      lastName,
      userName,
      email,
      password ];
    let query = "INSERT into Users (firstname, lastname, username, email, password)";
    db.query(query, params, (err, res) => {
      if (err){
        next(err)
      } else {
        console.log('succesfully created user')
        next(res);
      }
    })
  }
}