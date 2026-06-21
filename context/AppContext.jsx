import React, { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_RUTAS = 'Rutas'
const STORAGE_PASAJEROS = 'pasajeros'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  // Inicializamos los estados
  const [rutas, setRutas] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_RUTAS)
      return raw ? JSON.parse(raw) : []
    } catch (e) { return [] }
  })

  const [pasajeros, setPasajeros] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PASAJEROS)
      return raw ? JSON.parse(raw) : []
    } catch (e) { return [] }
  })

  // Funciones corregidas para asegurar persistencia inmediata
  const agregarRuta = (ruta) => {
    const nueva = { id: Date.now().toString(), ...ruta }
    const nuevasRutas = [...rutas, nueva]
    
    setRutas(nuevasRutas) // Actualiza el estado
    localStorage.setItem(STORAGE_RUTAS, JSON.stringify(nuevasRutas)) // Actualiza localStorage directo
  }

  const eliminarRuta = (id) => {
    const nuevasRutas = rutas.filter(r => r.id !== id)
    setRutas(nuevasRutas)
    localStorage.setItem(STORAGE_RUTAS, JSON.stringify(nuevasRutas))
  }

  const registrarPasajero = ({ nombre, numeroContacto, carrera, descripcion }) => {
    const pasajero = {
      id: Date.now().toString(),
      nombre,
      numeroContacto,
      carrera,
      descripcion,
      creadoEn: new Date().toISOString()
    }
    const nuevosPasajeros = [...pasajeros, pasajero]
    setPasajeros(nuevosPasajeros)
    localStorage.setItem(STORAGE_PASAJEROS, JSON.stringify(nuevosPasajeros))
  }

  const value = {
    rutas,
    pasajeros,
    agregarRuta,
    eliminarRuta,
    registrarPasajero,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export default AppContext