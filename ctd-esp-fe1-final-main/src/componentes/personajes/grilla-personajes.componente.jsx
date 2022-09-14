import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addFavorite, deleteFavorite, loadFavorites } from "../../actions/favoritosActions";
import { loadPersonaje } from "../../actions/personajesActions";
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
  const favoritos = useAppSelector((state) => state.favoritos);
  const paginacion = useAppSelector((state) => state.paginacion);
  const {personajes, status} = useAppSelector(state => state.personajes);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  console.log("personajes: ", personajes);
  console.log("favoritos: ", favoritos);

  useEffect(() => {
    getPersonajes(paginacion.pages).then((personajes) => {
      dispatch(loadPersonaje(personajes));
    })
}, [dispatch, paginacion.pages]);

  if(status === "cargando") return <div>Cargando personajes...</div>
  if (!personajes || personajes.length === 0) return <></> 

  if(pathname === "/favoritos") return <div className="grilla-personajes">
  {favoritos.map((personaje) => (
            <>
            <TarjetaPersonaje            
              id={personaje.card.id} 
              imagen={personaje.card.image}
              alt={personaje.card.name}
              nombre={personaje.card.name}
            />
            </>
          ))} 
    </div>

  return <div className="grilla-personajes">
{personajes.map((personaje) => (
          <>
          <TarjetaPersonaje            
            id={personaje.id} 
            imagen={personaje.image}
            alt={personaje.name}
            nombre={personaje.name}
          />
          </>
        ))} 
  </div>
}

export default GrillaPersonajes;


/* const favoritos = useAppSelector((state) => state.favoritos);
const personajes = useAppSelector((state) => state.personajes);
const dispatch = useAppDispatch();
const { pathname } = useLocation();
console.log(pathname);

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
  } else if (personajes.personajes.length === 0){
    return (
      <div className="grilla-personajes">          
        {personajes.personajes.length === 0 &&
        <p>{personajes.error}</p>}
      </div>
    )
  }else{
    return(
      <div className="grilla-personajes">
        {personajes?.personajes.map((personaje) => (
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



const buscadorPersonajesFavoritos = () => {

  let personajesFiltradosPorFavoritos = [];

  for (let item of personajes.personajes) {
    const itemPersonaje = favoritos.find((fav) => fav.id === personajes.id);
    const existencia = 0;
    if(existencia){
      existencia = itemPersonaje.existencia;
    }
    
    personajesFiltradosPorFavoritos.push({
      id: item.id,
      name: item.name,
      image: item.image,
      existencia: existencia
    })
  }
  
  console.log(personajesFiltradosPorFavoritos);
    return(
      <div className="grilla-personajes">
        {personajes?.personajes.filter((per)=>{
          per.id.includes(favoritos)
        }).map((personaje) => (
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
  
};

const View = {
  "/": (
    <>
      {buscadorPersonajes()}
    </>
  ),
  "/favoritos":(
    <>
      {buscadorPersonajesFavoritos()}
      {console.log("paginaFavoritos personajes: ", personajes?.personajes)}
      {console.log("paginaFavoritos: ", favoritos)}
      {console.log("paginaFavoritos, array filtrados: ",personajes?.personajes.filter((per)=>{
          favoritos.find( fav => fav.id = per.id)
        }))}
      {console.log("probando: ", favoritos.includes({id: '2'}))}
      
    </>
  )  
};

return (
  <div className="grilla-personajes">
    {View[pathname]}
  </div>
);
}; */