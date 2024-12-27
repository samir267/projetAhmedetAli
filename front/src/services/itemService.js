import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items'; // Remplacez par l'URL de votre backend

// Obtenir tous les items
export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Obtenir un item par ID
export const getItemById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Créer un nouvel item
export const createItem = async (itemData) => {
  const response = await axios.post(API_URL, itemData);
  return response.data;
};

// Mettre à jour un item
export const updateItem = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

// Supprimer un item
export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
