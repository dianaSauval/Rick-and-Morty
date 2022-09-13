import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite, loadFavorites } from "../../actions/favoritosActions";
import { ErrorPersonaje, loadPersonaje } from "../../actions/personajesActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getPersonajes} from "../../services";
import store from "../../store/store";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = () => {
  const personajes = useAppSelector((state) => state.personajes);
  const dispatch = useAppDispatch();
  
  console.log("personajes: ", personajes);

  useEffect(() => {
      getPersonajes(0).then((personajes) => {
        dispatch(loadPersonaje(personajes));
      }).catch(() => {
        ErrorPersonaje("No se encontró ningun personaje");
      });
  }, [dispatch]);
  
  const buscadorPersonajes = () => {
    if (personajes.loading === true) {
      return (
        <>        
          <p>Cargando...</p>
        </>
      );
    } else {
      return (
        <div className="grilla-personajes">          
          {personajes.personajes.length === 0 &&
          <p>{personajes.error}</p>
    }
    {
          personajes?.personajes.map((personaje) => (
            <>
            <TarjetaPersonaje
              key={personaje.id}
              id={personaje.id} 
              imagen={personaje.image}
              alt={personaje.name}
              nombre={personaje.name}
            />
            </>
          ))} 
        </div>
      );
    }
  };

  return (
    <div className="grilla-personajes">
      {buscadorPersonajes()}
    </div>
  );
};

export default GrillaPersonajes;
