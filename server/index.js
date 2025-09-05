const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.get('/', (req, res) => {
  res.send('API de collecte de retours utilisateur');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});