import React from 'react';

import { useApp } from '../../context';
import { Container } from './styles';

export function Result() {
    const { gasolina, alcool, error, resultado } = useApp()

    return (
        <Container>
            {((!gasolina || !alcool) && error) || resultado}
        </Container>
    ); 
}
