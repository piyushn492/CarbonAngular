const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressMongoDB = require('express-mongo-db');
const routes = require('./routes/index');

const app = express();

app.use(expressMongoDB('mongodb://localhost:27017/CarbonAngular'));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes );

let port = process.env.PORT || 8080

app.listen(port, function(){
    console.log("Server is running on port "+port);
})
