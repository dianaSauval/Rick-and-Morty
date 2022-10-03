import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getPersonajes } from "../services";
import { RootState } from "../store/store";
import { Personaje } from "../types";

export interface LoadPersonajesAction extends Action {
  type: "LOAD_PERSONAJES";
  payload: Personaje[];
}
export interface BuscarPersonajeAction extends Action {
  type: "BUSCAR_PERSONAJE";
  name: string;
}
export interface BuscarPersonajeExitoAction extends Action {
  type: "BUSCAR_PERSONAJE_EXITO";
  personajes: Personaje[];
}
export interface BuscarPersonajeErrorAction extends Action {
  type: "BUSCAR_PERSONAJE_ERROR";
  error: string;
}

export const loadPersonaje: ActionCreator<LoadPersonajesAction> = (
  payload: Personaje[]
) => {
  return {
    type: "LOAD_PERSONAJES",
    payload,
  };
};

export type PersonajesAction =
  | BuscarPersonajeAction
  | BuscarPersonajeExitoAction
  | BuscarPersonajeErrorAction
  | LoadPersonajesAction;

interface BuscarPersonajesThunkAction
  extends ThunkAction<void, RootState, unknown, PersonajesAction> {}

const buscarPersonaje: ActionCreator<BuscarPersonajeAction> = (
  name: string
) => {
  return {
    type: "BUSCAR_PERSONAJE",
    name,
  };
};

const buscarPersonajeExito: ActionCreator<BuscarPersonajeExitoAction> = (
  personajes: Personaje[]
) => {
  return {
    type: "BUSCAR_PERSONAJE_EXITO",
    personajes: personajes,
  };
};

const buscarPersonajeError: ActionCreator<BuscarPersonajeErrorAction> = (
  error: string
) => {
  return {
    type: "BUSCAR_PERSONAJE_ERROR",
    error: error,
  };
};

//const MINIMUM_CHAR_TO_SEARCH = 3;

export const buscarPersonajesThunk = (
  page: number,
  name: string
): BuscarPersonajesThunkAction => {
  return async (dispatch, getState) => {
    //if (name.length < MINIMUM_CHAR_TO_SEARCH) return null;

    dispatch(buscarPersonaje(name));

    try {
      const personajes = await getPersonajes(page, name);
      dispatch(buscarPersonajeExito(personajes));
    } catch (e) {
      dispatch(buscarPersonajeError("Personaje no encontrado"));
    }
  };
};
