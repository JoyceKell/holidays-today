const express = require('express');
const cors = require('cors');
const app = express();
require('./src/routes/index')(app); // <--- basta adicionar essa linha
app.use(cors());
app.use(express.json());
app.listen(3001);