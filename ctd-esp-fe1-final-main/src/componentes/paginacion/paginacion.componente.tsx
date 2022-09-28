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
    const [isDisabledPrev, setIsDisabledPrev] = useState(true)
    const [isDisabledNext, setIsDisabledNext] = useState(false)
    const paginacion = useAppSelector((state) => state.paginacion);
    const personajes = useAppSelector(state => state.personajes);
    let pageState = paginacion.pages;
    const dispatch = useAppDispatch();

    console.log("paginacion: ", paginacion);

    useEffect(() => {
        if (personajes.personajes.length === 0 || personajes.personajes.length<9) {
            setIsDisabledNext(true)            
        }else{
            setIsDisabledNext(false) 
        }

        if(pageState === 1) {
            setIsDisabledPrev(true)
        }else{
            setIsDisabledPrev(false)
        }
    }, [pageState, personajes])
    

    const handleClickPrev = () =>{
        if(pageState === 0)return;        
        dispatch(prevPages(pageState - 1))
    }

    const handleClickNext = () =>{
        if (personajes.personajes.length === 0) {
            setIsDisabledNext(true)            
        }
        dispatch(nextPages(pageState + 1))
    }


    return <div className="paginacion">
        <button disabled={isDisabledPrev} className={"primary"} onClick={(e)=>handleClickPrev()}>Anterior</button>
        <button disabled={isDisabledNext} className={"primary"} onClick={(e)=>handleClickNext()}>Siguiente</button>
    </div>
}

export default Paginacion;