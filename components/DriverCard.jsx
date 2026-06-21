import React from 'react'
import { useApp } from '../context/AppContext'

const DriverCard = ({ ruta, mostrarBotonEliminar }) => {
  const { eliminarRuta } = useApp()

  // CORRECCIÓN: El signo $ debe estar FUERA de las llaves: ${variable}
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ruta.ruta)}&travelmode=driving`

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '16px',
    padding: '18px',
    margin: '12px 0',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    maxWidth: '520px'
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '16px'
  }

  const nameStyle = { fontSize: '1.4rem', fontWeight: '700', color: '#1a1a1a', margin: 0 }
  const priceStyle = { fontSize: '1.25rem', fontWeight: '700', color: '#d23669', margin: 0 }
  const fieldStyle = { margin: '8px 0', color: '#333', lineHeight: '1.5' }
  const labelStyle = { fontWeight: '600' }

  return (
    <article style={cardStyle}>
      <div style={headerStyle}>
        <h2 style={nameStyle}>{ruta.nombre}</h2>
        <p style={priceStyle}>{typeof ruta.precio === 'number' ? `$${ruta.precio}` : ruta.precio}</p>
      </div>
      <p style={fieldStyle}><span style={labelStyle}>Ruta:</span> {ruta.ruta}</p>
      <p style={fieldStyle}><span style={labelStyle}>Horarios:</span> {ruta.horario}</p>
      <p style={fieldStyle}><span style={labelStyle}>Asientos:</span> {ruta.asientos}</p>
      <p style={fieldStyle}><span style={labelStyle}>Descripción:</span> {ruta.descripcion}</p>
      
      {/* Botón de Mapa con la sintaxis ${} correcta */}
      <a 
        href={mapUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '10px 16px',
          backgroundColor: '#4285f4',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '10px',
          fontWeight: '600',
          fontSize: '0.9rem'
        }}
      >
        📍 Ver ruta en Google Maps
      </a>
      
      {mostrarBotonEliminar && (
        <button
          type="button"
          onClick={() => eliminarRuta(ruta.id)}
          style={{
            display: 'block',
            marginTop: '18px',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#d23669',
            color: '#fff',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Eliminar ruta
        </button>
      )}
    </article>
  )
}

export default DriverCard