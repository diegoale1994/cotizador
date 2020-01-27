import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helper';

const contenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color: #00838F;
    color:#FFF;
    margin-top:1rem;
`;

const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <contenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>marca: {primeraMayuscula(marca)}</li>
                <li>plan: {primeraMayuscula(plan)}</li>
                <li>año del Auto: {year}</li>
            </ul>
        </contenedorResumen>
    );
}

export default Resumen;