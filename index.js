// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; // vous pouvez changer le port si nécessaire

// Configuration CORS pour autoriser votre domaine
app.use(cors({
  origin: 'https://emmapaloma7.github.io', // votre site web
  methods: ['POST', 'OPTIONS']
}));

app.use(express.json()); // pour parser le JSON

// Point de terminaison pour recevoir le message et répondre
app.post('/bot', (req, res) => {
  const userMessage = req.body.message;
  // Réponse simple, vous pouvez intégrer votre IA ici
  const botResponse = `Vous avez dit : ${userMessage}`;
  res.json({ reply: botResponse });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});