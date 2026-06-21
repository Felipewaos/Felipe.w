import React, { useState } from 'react'
import { useApp } from '../context/AppContext'

const RouteForm = () => {
  const { agregarRuta: addRoute } = useApp()
  const [nombre, setNombre] = useState('')
  const [origen, setOrigen] = useState('')
  const [destino, setDestino] = useState('')
  const [horario, setHorario] = useState('')
  const [precio, setPrecio] = useState('')
  const [asientos, setAsientos] = useState(1)
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !origen.trim() || !destino.trim()) return alert("Completa los datos")

    addRoute({ 
      nombre, 
      ruta: `${origen} a ${destino}`, // Se guarda como "Origen a Destino"
      horario, 
      precio, 
      asientos, 
      descripcion 
    })
    
    alert("¡Ruta registrada exitosamente!")
    setNombre(''); setOrigen(''); setDestino(''); setHorario(''); setPrecio(''); setDescripcion('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '16px' }}>
      <h2>Registrar ruta</h2>
      <input placeholder="Nombre chofer" value={nombre} onChange={e => setNombre(e.target.value)} required style={inputStyle} />
      <input placeholder="Origen (Donde sales)" value={origen} onChange={e => setOrigen(e.target.value)} required style={inputStyle} />
      <input placeholder="Destino (Donde llegas)" value={destino} onChange={e => setDestino(e.target.value)} required style={inputStyle} />
      <input placeholder="Horario" value={horario} onChange={e => setHorario(e.target.value)} required style={inputStyle} />
      <input placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} required style={inputStyle} />
      <button type="submit" style={btnStyle}>Guardar ruta</button>
    </form>
  )
}

const inputStyle = { width: '100%', padding: '10px', margin: '5px 0', boxSizing: 'border-box' }
const btnStyle = { width: '100%', padding: '12px', background: '#d23669', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }

export default RouteForm

export default RouteForm;
const styles = {
  container: {
    maxWidth: 600,
    margin: '20px auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  title: {
    marginBottom: 16,
    fontSize: 22,
    textAlign: 'center',
  },
  form: {
    display: 'grid',
    gap: 14,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: 14,
    color: '#333',
  },
  input: {
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: 14,
  },
  textarea: {
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: 14,
    resize: 'vertical',
  },
  help: {
    fontSize: 12,
    color: '#666',
  },
  buttonGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 8,
  },
  seatButton: {
    padding: '10px 0',
    borderRadius: 8,
    border: '1px solid #888',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: 14,
  },
  seatButtonActive: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderColor: '#0056b3',
  },
  submitButton: {
    padding: '12px 16px',
    borderRadius: 10,
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: 16,
    cursor: 'pointer',
  },
}

