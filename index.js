const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send('Hello world!');
});
