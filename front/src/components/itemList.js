import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../services/itemService';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Charger les items depuis l'API
    const fetchItems = async () => {
      const data = await getItems();
      setItems(data);
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet item ?')) {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <h1>Liste des Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleDelete(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
