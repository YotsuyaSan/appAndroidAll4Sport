const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {db, createAllKeys} = require('./src/database');

const app = express();

const routeProduits = require('./src/routes/produits.route')
const routeConnection = require('./src/routes/connection.route')

db.database.sync().then(() => {
    //createAllKeys();
    console.log('Database up')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())
app.use('/produits', routeProduits)
app.use('/connection', routeConnection)
app.listen(3000, () => console.log('Express up'));