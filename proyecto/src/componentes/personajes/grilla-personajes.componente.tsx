import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addFavorite,
  deleteFavorite,
  loadFavorites,
} from "../../actions/favoritosActions";
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
  const favoritos = useAppSelector((state) => state.favoritos);
  const paginacion = useAppSelector((state) => state.paginacion);
  const episodios = useAppSelector((state) => state.episodios);
  const { personajes, status } = useAppSelector((state) => state.personajes);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  console.log("episodios: ", episodios);

  const getEpisodesByCharacter = (id: string) => {
    const personaje = personajes.find((per) => per.id === id);
  };

  const getFavorito = (id: string) => {
    const favorito = favoritos.find((fav) => fav.id === id);
    let isFavorite = false;
    if (favorito) {
      isFavorite = favorito.favorite;
    }
    return isFavorite;
  };

  useEffect(() => {
    getPersonajes(paginacion.pages).then((personajes) => {
      dispatch(loadPersonaje(personajes));
    });
  }, [dispatch, paginacion.pages]);

  if (status === "cargando") return <div>Cargando personajes...</div>;
  if (status === "completado_con_error")
    return <div>No se encontró ningún personaje...</div>;
  if (!personajes || personajes.length === 0) return <></>;

  if (pathname === "/favoritos") {
    if (!favoritos || favoritos.length === 0) return <></>;

    return (
      <div className="grilla-personajes">
        {favoritos.map((personaje) => (
          <>
            <TarjetaPersonaje
              personaje={personaje.card}
              favorito={personaje.favorite}
            />
          </>
        ))}
      </div>
    );
  }

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => (
        <>
          <TarjetaPersonaje
            personaje={personaje}
            favorito={getFavorito(personaje.id)}
          />
        </>
      ))}
    </div>
  );
};

export default GrillaPersonajes;
