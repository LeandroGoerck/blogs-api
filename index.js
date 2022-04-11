const express = require('express');
require('dotenv').config();

// const { User } = require('./models');

const userRoutes = require('./routes/userRoutes');
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', userController.login);

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  console.log(message);
  res.status(status).json({ message });
});

app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
