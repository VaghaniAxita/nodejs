const express = require('express');
const app = express();
const mongoose = require('./config/db');

app.use(express.json());


const userRoutes = require('./routes/user.route');
const movieRoutes = require('./routes/movie.route');

app.use('/', userRoutes);
app.use('/', movieRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the movie API');
});

const PORT = 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
