import User from '../models/userModel.js';
import Project from '../models/projectModel.js';

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
  console.log('login');
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
          req.session.user = currUser;
          req.session.save();
          // console.log('req.session:', req.session);
          res.locals.validate = { success: true };
          // res.locals.currUser = currUser;
          // return next({
          //   log: 'Express error handler caught userController.login middleware error',
          //   status: 400,
          //   message: {err: `${err}`}
          // });
        } else {
          //if findOne return a null, then the username and password not matching, return status 404 for not found
          res.locals.validate = { success: false };
          //status code 401 means 'unauthenticated' or 'unauthorized'
          // return res.status(401).json();
        }
        next();
        // res.next();
      }
    })
  } catch (err) {
    return next(err);
  }
}


userController.createProject = (req, res, next) => {
  console.log('should get project info', req.body)
  const { projectName, projectDescription, members } = req.body;
  try {
    Project.create({projectName, projectDescription, members}, (err, currProject) => {
      if (err) {
        return next({
          log: 'Mongoose Project.create handler error',
          status: 400,
          message: {err: `${err}`}   
        })
      } else {
        res.locals.currProject = currProject;
        next();
      }
    })
  } catch (err) {
    return next({
      log: 'Express error handler caught userController.createProject middleware error',
      status: 400,
      message: {err: `${err}`}
    })
  }
  
}

userController.getUsers = (req, res, next) => {
  User.find({}, (error, users) => {
    // todo: better error handling
    if (error) return next(error);
    res.locals.users = users;
    return next();
  });
}

export default userController;