import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [error, setError] = useState('Insira os valores')
    const [gasolina, setGasolina] = useState('')
    const [alcool, setAlcool] = useState('')
    const [resultado, setResultado] = useState('')

    useEffect(() => {
        if (gasolina && alcool) {
            setResultado(alcool / gasolina < 0.7 ? 'Alcool' : 'Gasolina')
        } else { 
            setResultado('')
        }
    }, [gasolina,alcool])

    const value = {
        error,
        setGasolina,
        setAlcool,
        gasolina,
        alcool,
        resultado
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
