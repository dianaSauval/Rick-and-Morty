import { useState } from 'react';
import { buscarPersonajesThunk } from '../../actions/personajesActions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './filtros.css';

const Filtros = () => {
    const paginacion = useAppSelector((state) => state.paginacion);
    const dispatch = useAppDispatch();

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        onChange={(e)=> dispatch(buscarPersonajesThunk(paginacion.pages, e.target.value))}/>
    </div>
}

export default Filtros;