const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {db, createAllKeys} = require('./src/database');

const app = express();

db.database.sync().then(() => {
    //createAllKeys();
    console.log('Database up')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())
app.listen(3000, () => console.log('Express up'));