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



export default userController;