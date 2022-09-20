const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();

//this one is used to parse incoming forms data only
// app.use(bodyParser.urlencoded());//x-www-form-urlencoded <form>

//we will use Postman for sending incoming req in form of json

//decoding data from request
app.use(bodyParser.json()); //paring incoming json data from the req

//solving CORS errors (Corss-Origin Resource Sharing )
app.use((req, res, next) => {
  //allowing origin to access our content
  res.setHeader('Access-Content-Allow-Origin', '*');
  //allowing origins to access different methods
  res.setHeader('Access-Control-Allow-Methods', 'GET ,POST ,PUT,PATCH,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Authorization'
  );
  next();
});

//GET /feed/posts
app.use('/feed', feedRoutes);

app.listen(8080);
