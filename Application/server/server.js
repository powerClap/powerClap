import express from 'express';
import cors from 'cors';
import userController from './controllers/userController.js';
import session from 'express-session';
import passport from 'passport';
// import './authentication/passport.js';
// import cookieParser from 'cookie-parser';
// import http from 'http';

// Make sure server is connected to mongoDB database
import connectDB from './db.js'
connectDB();

const port = process.env.PORT || 3000;
const app = express();

// to make sure server can talk to the frondend without CORS restriction
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

// to enable request body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// sessions
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));


// Passport middleware
// configPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// app.use(cookieParser());


// const server = http.createServer(app);

//route for new user sign up
app.post('/user/signup', userController.signup, (req, res) => {
  return res.status(200).json();
})

//route for user regular log in
app.post('/user/login', userController.login, (req, res) => {
  req.session.save();
  return res.status(200).json(res.locals.validate);
})

//route for creating a new project
app.post('/create/project', userController.createProject, (req, res) => {
  return res.status(200).json(res.locals.currProject)
})

//route for creating a new task for a specific project
app.post('/create/task', userController.createTask, (req, res) => {
  return res.status(200).json();
})

// for testing:
app.get('/users', userController.getUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
})

app.get('/dashboard', (req, res) => {
  return res.status(200).json();
})

app.get('/userinfo', (req, res) => {
  if (req.session.user) {
    console.log('user found! username: ', req.session.user);
    res.status(200).json(req.session.user);
  }
  else console.log('user not found');
});

// google OAuth
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), 
  (req, res) => {
    res.redirect('/dashboard');
    // res.end('Logged in!');
});


//route for url not existed
app.use((req, res) => {
  res.status(404).send('This is not the page you\'re looking for...')
})

//Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred'},
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// server.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
