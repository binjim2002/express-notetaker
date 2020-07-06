const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.text());

app.use(require('./routes/html-routes.js'))
app.use(require('./routes/api-routes.js'))

app.listen(PORT, function(){
    console.log('server running at http://localhost:'+PORT);
})