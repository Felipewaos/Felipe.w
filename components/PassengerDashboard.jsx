import React, { useState } from 'react'
import { useApp } from '../context/AppContext'

const PassengerDashboard = () => {
  const { pasajeros, rutas } = useApp()
  const [open, setOpen] = useState({}) // map pasajeroId => bool

  const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }))

  const getRutaName = (rutaId) => {
    if (!rutaId) return null
    const r = rutas.find(x => x.id === rutaId)
    return r ? r.nombre || r.title || `Ruta ${r.id}` : `Ruta ${rutaId}`
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Pasajeros</h2>
      {(!pasajeros || pasajeros.length === 0) && <p>No hay pasajeros registrados.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pasajeros.map(p => (
          <li key={p.id} style={{ border: '1px solid #ddd', marginBottom: 8, padding: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{p.nombre}</strong>
                {p.rutaId && (
                  <span style={{ marginLeft: 8, color: '#555' }}>— unido a: {getRutaName(p.rutaId)}</span>
                )}
              </div>
              <div>
                <button onClick={() => toggle(p.id)}>{open[p.id] ? 'Ocultar' : 'Ver'}</button>
              </div>
            </div>

            {open[p.id] && (
              <div style={{ marginTop: 8 }}>
                <div><strong>Carrera:</strong> {p.carrera || '—'}</div>
                <div><strong>Contacto:</strong> {p.numeroContacto || '—'}</div>
                <div><strong>Descripción:</strong> {p.descripcion || '—'}</div>
                <div style={{ marginTop: 6, fontSize: 12, color: '#777' }}>
                  Id: {p.id}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PassengerDashboard
