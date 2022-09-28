import './boton-favorito.css';
import { FC, MouseEventHandler } from "react";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * @param {boolean}esFavorito
 * @param {MouseEventHandler} onClick
 * @returns un JSX element 
 */

const BotonFavorito : FC<{esFavorito: boolean, onClick: MouseEventHandler<HTMLDivElement> }>= ({esFavorito, onClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;
