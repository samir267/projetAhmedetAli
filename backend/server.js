const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importer le package CORS
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = 5000;

// Middleware pour autoriser les requêtes CORS
app.use(cors()); // Ceci permet à toutes les origines d'accéder à votre API

// Vous pouvez aussi spécifier des options pour CORS si vous souhaitez le restreindre
/*
const corsOptions = {
  origin: 'http://localhost:3000',  // Accepter les requêtes venant de ce domaine seulement
  methods: 'GET,POST',              // Limiter les méthodes autorisées
};
app.use(cors(corsOptions));        // Utiliser les options CORS personnalisées
*/

// Middleware global
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemsRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
