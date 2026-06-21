import React from 'react';
import { useApp } from '../context/AppContext';

const ListaRutas = () => {
  const { rutas, eliminarRuta } = useApp();

  return (
    <section style={{ marginTop: '20px', padding: '20px' }}>
      <h2>Rutas Creadas</h2>
      {rutas.length === 0 ? (
        <p>No hay rutas registradas todavía.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {rutas.map((ruta) => (
            <li key={ruta.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
              <h3>{ruta.nombre}</h3>
              <p><strong>Ruta:</strong> {ruta.ruta}</p>
              <p><strong>Horario:</strong> {ruta.horario}</p>
              <p><strong>Precio:</strong> {ruta.precio}</p>
              <p><strong>Asientos:</strong> {ruta.asientos}</p>
              <button onClick={() => eliminarRuta(ruta.id)}>Eliminar Ruta</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ListaRutas;