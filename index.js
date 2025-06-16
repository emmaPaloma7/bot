const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Render définit la variable PORT

app.use(express.json()); // pour parser le JSON

// CORS pour permettre à votre site d'accéder (optionnel, selon la configuration)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpoint pour le bot
app.post('/bot', (req, res) => {
  const userMessage = req.body.message;
  const reply = `Vous avez dit : ${userMessage}`; // réponse simple
  res.json({ reply: reply });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});