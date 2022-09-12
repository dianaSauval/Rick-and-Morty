import { useState } from 'react';
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
    //const { personajesPaginacion} = usePersonaje();
    const personajes = useAppSelector((state) => state.personajes);

    const dispatch = useAppDispatch();

    

/*     const personajesFiltrados = ()=>{
        return personajes.slice(currentPage,currentPage+5);
      }

    const nextPage = () =>{
        if(personajes.filter(personaje => personaje.name.includes(search)).length>5){

            setCurrentPage(currentPage+5)
        }
    }
    const prevPage = () =>{
        if (currentPage >0) {            
            setCurrentPage(currentPage-5)
        }
    } */


    return <div className="paginacion">
        <button disabled={true} className={"primary"}>Anterior</button>
        <button disabled={false} className={"primary"} /* onClick={nextPage} */>Siguiente</button>
    </div>
}

export default Paginacion;