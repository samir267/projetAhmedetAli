// controllers/itemsController.js

const items = []; // Liste statique pour les données

// Obtenir tous les items
exports.getItems = (req, res) => {
  res.json(items);
};

// Obtenir un item par ID
exports.getItemById = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item non trouvé" });
  res.json(item);
};

// Créer un nouvel item
exports.createItem = (req, res) => {
  const newItem = {
    id: items.length + 1,
    ...req.body,
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

// Mettre à jour un item
exports.updateItem = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item non trouvé" });

  Object.assign(item, req.body);
  res.json(item);
};

// Supprimer un item
exports.deleteItem = (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Item non trouvé" });

  items.splice(index, 1);
  res.status(204).send();
};
