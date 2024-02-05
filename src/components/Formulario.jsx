import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ addPelicula }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPelicula({ name, description, genre });
    setName('');
    setDescription('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 mx-5 mt-4">
      <div className="mb-3">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre de la pelicula"  required className="form-control" />
      </div>
      <div className="mb-3">
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required className="form-control" />
      </div>
      <div className="mb-3">
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required className="form-select">
          <option value="">Selecciona un género</option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default Form;