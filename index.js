const express = require('express');
require('dotenv').config();

// const { User } = require('./models');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);

// app.get('/user', (req, res) => {
//   User.findAll()
//   .then((dados) => {
//     res.status(200).json(dados);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   });
// });

app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send('Hello world!');
});
