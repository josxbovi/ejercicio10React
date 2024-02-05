import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Card = ({ pelicula }) => {
  return (
    <div className="card border-3 border-danger mx-5">
      <div className="card-body">
        <h2 className="card-title text-uppercase text-black">{pelicula.name}</h2>
        <p className="card-text fw-bold">{pelicula.description}</p>
        <p className="card-text fst-italic">{pelicula.genre}</p>
      </div>
    </div>
  );
};

export default Card;