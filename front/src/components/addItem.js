import React, { useState } from 'react';
import { createItem } from '../services/itemService';

const AddItem = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name });
    setName('');
    alert('Item ajouté avec succès !');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un Item</h2>
      <input
        type="text"
        placeholder="Nom de l'item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddItem;
