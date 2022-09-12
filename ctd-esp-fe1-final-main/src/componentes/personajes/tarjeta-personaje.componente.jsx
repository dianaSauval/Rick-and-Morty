import { useState } from 'react';
import { addFavorite, deleteFavorite, loadFavorites } from '../../actions/favoritosActions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */



const TarjetaPersonaje = ({imagen, alt, nombre, id}) => { 
    const favoritos = useAppSelector((state) => state.favoritos);
    const dispatch = useAppDispatch();
      
  const [isFAvorite, setIsFAvorite] = useState(false)

  const handleClickFavorito = () =>{
      setIsFAvorite(!isFAvorite)

  }

    return <div className="tarjeta-personaje">
        <img src={imagen} alt={alt}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={isFAvorite} onClick={handleClickFavorito}/>
        </div>
    </div>
}

export default TarjetaPersonaje;