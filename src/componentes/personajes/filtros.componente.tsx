import { buscarPersonajesThunk } from "../../actions/personajesActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./filtros.css";
import { FC, ChangeEventHandler } from "react";

/**
 * Componente que contiene los filtros
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * @param {ChangeEventHandler<HTMLInputElement> | undefined} setSearch
 * @param {string} search
 * @returns un JSX element
 */

const Filtros: FC<{
  search: string;
  setSearch: ChangeEventHandler<HTMLInputElement> | undefined;
}> = ({ search, setSearch }) => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={setSearch}
        value={search}
      />
    </div>
  );
};

export default Filtros;
