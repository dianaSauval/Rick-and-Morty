import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const personajes = useAppSelector((state) => state.personajes);
  const favoritos = useAppSelector((state) => state.favoritos); 
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
      
  const [isFAvorite, setIsFAvorite] = useState(false)
  
  useEffect(() => {
    if (pathname === "/favoritos") {
      setIsFAvorite(true)    
    }
}, [favoritos]);


  const handleClickFavorito = (id) =>{
    const favorito = favoritos.find((fav)=>fav.id === id)
    const personaje = personajes.personajes.find((per)=>per.id === id);      

      setIsFAvorite(!isFAvorite)


      if (!isFAvorite && favorito === undefined) {
        dispatch(addFavorite(id, personaje));       
        
      }else{
        dispatch(deleteFavorite(id))
      }      
  } 
  
/*   const isFavorite = (id) =>{
    const favorito = favoritos.find((fav)=>fav.id === id)
    if (favorito.favorite) {
      setIsFAvorite(true)
    }


    return isFAvorite
  } */

    return <div className="tarjeta-personaje">
        <img src={imagen} alt={alt}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={isFAvorite} onClick={(e)=>handleClickFavorito(id)}/>
        </div>
    </div>
}

export default TarjetaPersonaje;