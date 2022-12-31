import User from '../models/userModel.js';

const userController = {};

userController.signup = (req, res, next) => {
  //console.log('Should see username and password info: ', req.body);
  //destructuring from req.body
  const { username, password } = req.body;
  try {
    User.create({username, password}, (err, newUser) => {
      if (err) {
        return next({
          log: 'Mongoose create handler error',
          status: 400,
          message: {err: `${err}`}
        })
      } else {
        res.locals.newUser = newUser;
        return next();
      }
    })
  } catch (err) {
    return next({
      log: 'Express error handler caught userController.signup middleware error',
      status: 400,
      message: {err: `${err}`}
    })
  }
}

userController.login = (req, res, next) => {
  const { username, password } = req.body;

  try {
    User.findOne({username, password}, (err, currUser) => {
      if (err) {
        return next({
          log: 'Mongoose findOne handler error',
          status: 400,
          message: {err: `${err}`}
        });
      } else {
        // if username and password are found and matched in database, proceed to the next middleware
        if (currUser) {
          res.locals.currUser = currUser;
          return next({
            log: 'Express error handler caught userController.login middleware error',
            status: 400,
            message: {err: `${err}`}
          });
        } else {
          //if findOne return a null, then the username and password not matching, return status 404 for not found

          //status code 401 means 'unauthenticated' or 'unauthorized'
          return res.status(401).json();
        }
        
      }
    })
  } catch (err) {
    return next(err);
  }
}

export default userController;