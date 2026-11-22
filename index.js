const config = require('./src/config/AppConfig'); // huruf A besar — salah
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('OK'));
app.listen(config.port, () => console.log('jalan di ' + config.port));