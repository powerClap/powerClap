import express from 'express';
import http from 'http';
import connectDB from './db.js'

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
