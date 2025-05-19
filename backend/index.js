const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const usersRoute = require('./routes/produtos');

app.use(cors());
app.use(express.json());
app.use('/api/produtos', usersRoute);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});