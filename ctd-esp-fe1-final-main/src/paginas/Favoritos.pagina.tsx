import { useLocation } from "react-router-dom";
import { deleteAllFavorite } from "../actions/favoritosActions";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch } from "../hooks";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch();
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={(e)=>dispatch(deleteAllFavorite())}>Eliminar todos los favoritos</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos