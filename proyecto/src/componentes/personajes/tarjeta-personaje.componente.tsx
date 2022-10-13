import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addFavorite,
  deleteFavorite,
  loadFavorites,
} from "../../actions/favoritosActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Personaje } from "../../types";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 * @param {Personaje} personaje
 * @param {boolean} favorito
 * @returns un JSX element
 */

const TarjetaPersonaje: FC<{ personaje: Personaje; favorito: boolean }> = ({
  personaje,
  favorito,
}) => {
  const personajes = useAppSelector((state) => state.personajes);
  const favoritos = useAppSelector((state) => state.favoritos);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleClickFavorito = (id: string) => {
    const favorito = favoritos.find((fav) => fav.id === id);
    const personaje = personajes.personajes.find((per) => per.id === id);
    if (favorito === undefined) {
      dispatch(addFavorite(id, personaje));
    } else {
      dispatch(deleteFavorite(id));
    }
  };

  const Detalle = (personaje: Personaje) => {
    navigate(`/detalle/${personaje.id}`, { state: { personaje: personaje } });
  };

  return (
    <div className="tarjeta-personaje">
      <img
        src={personaje.image}
        alt={personaje.name}
        onClick={(e) => Detalle(personaje)}
      />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito
          esFavorito={favorito}
          onClick={(e) => handleClickFavorito(personaje.id)}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
