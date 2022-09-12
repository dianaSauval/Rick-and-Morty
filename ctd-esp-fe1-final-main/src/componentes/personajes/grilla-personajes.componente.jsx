import { useEffect } from "react";
import { loadPersonaje } from "../../actions/personajesActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getPersonajes } from "../../services";
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
  const personajes = useAppSelector((state) => state.personajes.results);
  

  const dispatch = useAppDispatch();

  console.log("personajes: ", personajes);

  useEffect(() => {
    getPersonajes().then((personajes) => {
      dispatch(loadPersonaje(personajes));
    });
  }, [dispatch]);

  console.log("funcion traer personajes: ", loadPersonaje(personajes).cards);

  const buscadorPersonajes = () => {
    if (personajes?.length === 0 || personajes === undefined) {
      return (
        <>
          <p>Cargando...</p>
        </>
      );
    } else {
      return (
        <div className="grilla-personajes">
          {personajes.map((personaje) => (
            <TarjetaPersonaje            
              key={personaje.id}
              imagen={personaje.image}
              alt={personaje.name}
              nombre={personaje.name}
            />
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
