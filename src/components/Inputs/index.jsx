import React from 'react';
import { useApp } from '../../context';
import { Container } from './styles';

export function Inputs() {
    return (
        <Container>
            <Input
                placeholder="Insira o preço da gasolina"
                inputName="Gasolina"
            />
            <Input
                placeholder="Insira o preço do alcool"
                inputName="Alcool"
            />
        </Container>
    );
}

export function Input({ placeholder, inputName }) {
    const { setGasolina, setAlcool } = useApp()

    function handleInput(e) {
        if (inputName === 'Alcool')
            setAlcool(e.target.value)
        else 
            setGasolina(e.target.value)
    }
    
    return (
        <input
            type="number"
            name={inputName}
            placeholder={placeholder}
            onChange={e => handleInput(e)}
        />
    )
}



