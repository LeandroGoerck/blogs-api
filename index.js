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
  if (err.status) return res.status(err.status).json({ message: err.message });
  if (err.message) return res.status(401).json({ message: 'Expired or invalid token' });
  if (!err.status) return res.status(500).json(err.message);
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
