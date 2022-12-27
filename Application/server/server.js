import express from 'express';
import cors from 'cors';
import userController from './controllers/userController.js';
// import http from 'http';

// Make sure server is connected to mongoDB database
import connectDB from './db.js'
connectDB();

const port = process.env.PORT || 3000;
const app = express();

// to make sure server can talk to the frondend without CORS restriction
app.use(cors());

// to enable request body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// const server = http.createServer(app);

//route for new user sign up
app.post('/user/signup', userController.signup, (req, res) => {
  return res.status(200).json();
})

//route for user regular log in
app.post('/user/login', userController.login, (req, res) => {
  return res.status(200).json();
})


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
