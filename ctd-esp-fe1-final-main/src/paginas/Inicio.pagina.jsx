import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../hooks";
import { buscarPersonajesThunk } from "../actions/personajesActions";
import { useState } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const [search, setSearch] = useState("")
    const paginacion = useAppSelector((state) => state.paginacion);
    const dispatch = useAppDispatch();

    const limpiarFiltro = () =>{
        dispatch(buscarPersonajesThunk(paginacion.pages, ""))
        setSearch("")
    }

    const onChangeSearch = (e) =>{
        dispatch(buscarPersonajesThunk(paginacion.pages, e.target.value))
        setSearch(e.target.value)
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={(e)=> limpiarFiltro()}>Limpiar Filtros</button>
        </div>
        <Filtros search={search} setSearch={(e)=>onChangeSearch(e)}/>
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio