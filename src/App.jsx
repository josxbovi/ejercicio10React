import React, { useState, useEffect } from 'react';
import Form from './components/Formulario';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const storedPeliculas = JSON.parse(localStorage.getItem('peliculas'));
    if (storedPeliculas) {
      setPeliculas(storedPeliculas);
    }
  }, []);

  const addPelicula = (pelicula) => {
    const newPeliculas = [...peliculas, pelicula];
    setPeliculas(newPeliculas);
    localStorage.setItem('peliculas', JSON.stringify(newPeliculas));
  };

  return (
    <div>
      <Form  addPelicula={addPelicula} />
      {peliculas.map((pelicula, index) => (
        <Card key={index} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default App;