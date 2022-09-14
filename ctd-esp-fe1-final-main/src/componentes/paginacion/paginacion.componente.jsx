import { useEffect, useState } from 'react';
import { nextPages, prevPages } from '../../actions/paginacionActions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const paginacion = useAppSelector((state) => state.paginacion);
    let pageState = paginacion.pages;
    const dispatch = useAppDispatch();

    console.log("paginacion: ", paginacion);

    const handleClickPrev = () =>{
        if(pageState === 0) return;
        dispatch(prevPages(pageState - 1))
    }

    const handleClickNext = () =>{
        dispatch(nextPages(pageState + 1))
    }


    return <div className="paginacion">
        <button className={"primary"} onClick={(e)=>handleClickPrev()}>Anterior</button>
        <button className={"primary"} onClick={(e)=>handleClickNext()}>Siguiente</button>
    </div>
}

export default Paginacion;