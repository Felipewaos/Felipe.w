import React, { useState } from 'react'
import { AppProvider } from './context/AppContext'
import RouteForm from './components/RouteForm'
import PassengerForm from './components/PassengerForm'
import PassengerDashboard from './components/PassengerDashboard'
import DriverCard from './components/DriverCard' // Importamos para listar rutas
import { useApp } from './context/AppContext'

// Componente auxiliar para listar rutas disponibles al pasajero
const AvailableRoutes = () => {
  const { rutas } = useApp()
  return (
    <div>
      <h2>Rutas Disponibles</h2>
      {rutas.length === 0 ? <p>No hay rutas creadas aún.</p> : 
        rutas.map(ruta => <DriverCard key={ruta.id} ruta={ruta} mostrarBotonEliminar={false} />)
      }
    </div>
  )
}

const App = () => {
  const [role, setRole] = useState(null)

  return (
    <AppProvider>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        {!role ? (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Movilidad Compartida</h1>
            <button onClick={() => setRole('chofer')} style={btnStyle}>Soy Chofer</button>
            <button onClick={() => setRole('pasajero')} style={btnStyle}>Soy Pasajero</button>
          </div>
        ) : (
          <>
            <button onClick={() => setRole(null)} style={{ marginBottom: '20px' }}>← Volver al inicio</button>
            
            {role === 'chofer' ? (
              <>
                <RouteForm />
                <hr />
                <PassengerDashboard />
              </>
            ) : (
              <>
                <AvailableRoutes />
                <hr />
                <PassengerForm />
              </>
            )}
          </>
        )}
      </div>
    </AppProvider>
  )
}

const btnStyle = { padding: '15px 30px', margin: '10px', fontSize: '1.2rem', cursor: 'pointer', borderRadius: '8px' }

export default App