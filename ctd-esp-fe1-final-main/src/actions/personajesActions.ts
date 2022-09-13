import { Action, ActionCreator } from "@reduxjs/toolkit";
import { Personaje } from "../types"; 

export interface FetchPersonajesRequestAction extends Action {
  type: "FETCH_PERSONAJES_REQUEST";
}
export interface LoadPersonajesAction extends Action {
  type: "LOAD_PERSONAJES";
  payload: Personaje[];
}

export interface ErrorPersonajesAction extends Action {
  type: "ERROR_PERSONAJES";
  payload: string;
}

export interface BuscarPersonajeAction extends Action{
  type:"BUSCAR_PERSONAJE",
  name: string
}

export const RequestPersonaje: ActionCreator<FetchPersonajesRequestAction> = () => {
  return {
    type: "FETCH_PERSONAJES_REQUEST"
  };
};

export const loadPersonaje: ActionCreator<LoadPersonajesAction> = (payload: Personaje[]) => {
  return {
    type: "LOAD_PERSONAJES",
    payload,
  };
};

export const ErrorPersonaje: ActionCreator<ErrorPersonajesAction> = (payload:string) => {
  return {
    type: "ERROR_PERSONAJES",
    payload,
  };
};

export const buscarPersonaje:ActionCreator<BuscarPersonajeAction>= (name:string) =>{
  return{
    type: "BUSCAR_PERSONAJE",
    name
  }
}

