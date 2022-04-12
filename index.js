const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', loginRoutes);

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  console.log(message);
  res.status(status).json({ message });
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
