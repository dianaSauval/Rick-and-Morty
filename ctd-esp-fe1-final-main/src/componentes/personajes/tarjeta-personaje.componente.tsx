import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addFavorite, deleteFavorite, loadFavorites } from '../../actions/favoritosActions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { FC } from "react";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {string} imagen
 * @param {string} alt
 * @param {string} nombre
 * @param {string} id
 * @param {boolean} favorito
 * @returns un JSX element 
 */

const TarjetaPersonaje: FC<{imagen: string, alt: string, nombre: string, id: string, favorito: boolean}> = ({imagen, alt, nombre, id, favorito}) => {
  const personajes = useAppSelector((state) => state.personajes);
  const favoritos = useAppSelector((state) => state.favoritos); 
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
  
  const handleClickFavorito = (id:string) =>{
    const favorito = favoritos.find((fav)=>fav.id === id)
    const personaje = personajes.personajes.find((per)=>per.id === id);
      if (favorito === undefined) {
        dispatch(addFavorite(id, personaje));       
        
      }else{
        dispatch(deleteFavorite(id))
      }      
  } 
    return <div className="tarjeta-personaje">
        <img src={imagen} alt={alt}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={favorito} onClick={(e)=>handleClickFavorito(id)}/>
        </div>
    </div>
}

export default TarjetaPersonaje;



