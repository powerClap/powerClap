import User from '../models/userModel.js';

const userController = {};

userController.signup = (req, res, next) => {
  //console.log('Should see username and password info: ', req.body);
  //destructuring from req.body
  const { username, password } = req.body;
  try {
    User.create({username, password}, (err, newUser) => {
      if (err) {
        return next(err)
      } else {
        res.locals.newUser = newUser;
        return next();
      }
    })
  } catch (err) {
    return next(err)
  }
}

userController.login = (req, res, next) => {
  const { username, password } = req.body;

  try {
    User.findOne({username, password}, (err, currUser) => {
      if (err) {
        return next(err);
      } else {
        // if username and password are found and matched in database, proceed to the next middleware
        if (currUser) {
          res.locals.currUser = currUser;
          return next(err);
        } else {
          //if findOne return a null, then the username and password not matching, return status 404 for not found
          return res.status(404).json();
        }
        
      }
    })
  } catch (err) {
    return next(err);
  }
}

export default userController;