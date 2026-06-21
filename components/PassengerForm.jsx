import React, { useState } from 'react'
import { useApp } from '../context/AppContext'

const PassengerForm = () => {
  const { rutas, registrarPasajero } = useApp()
  const [formData, setFormData] = useState({ nombre: '', numeroContacto: '', carrera: '', descripcion: '' })
  const [idRuta, setIdRuta] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!idRuta) return alert("Selecciona una ruta")
    
    registrarPasajero({ idRuta, ...formData })
    alert("¡Te has registrado con éxito!")
    setFormData({ nombre: '', numeroContacto: '', carrera: '', descripcion: '' })
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Registrarse como Pasajero</h2>
      <select onChange={(e) => setIdRuta(e.target.value)} required style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
        <option value="">Selecciona una ruta</option>
        {rutas.map(r => <option key={r.id} value={r.id}>{r.nombre} - {r.ruta}</option>)}
      </select>
      <input placeholder="Nombre" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} required style={inputStyle} />
      <input placeholder="Carrera" value={formData.carrera} onChange={e => setFormData({...formData, carrera: e.target.value})} required style={inputStyle} />
      <input placeholder="Contacto" value={formData.numeroContacto} onChange={e => setFormData({...formData, numeroContacto: e.target.value})} required style={inputStyle} />
      <textarea placeholder="Descripción" value={formData.descripcion} onChange={e => setFormData({...formData, descripcion: e.target.value})} style={inputStyle} />
      <button type="submit" style={{ width: '100%', padding: '10px', background: '#d23669', color: '#fff', border: 'none', borderRadius: '5px' }}>Registrarse</button>
    </form>
  )
}

const inputStyle = { width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }
export default PassengerForm