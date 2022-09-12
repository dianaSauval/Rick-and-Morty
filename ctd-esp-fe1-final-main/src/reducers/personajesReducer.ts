import { Reducer } from "redux";
import { ICard } from "../types"; 
import { LoadPersonajesAction } from "../actions/personajesActions"; 

export type PersonajeState = ICard[];

const initialState: PersonajeState = [];

const PersonajeReducer: Reducer<
PersonajeState,
LoadPersonajesAction 
> = (state = initialState, action): PersonajeState => {
  switch (action.type) {
    case "LOAD_PERSONAJES": {
      return action.cards;
    }
    default:
      return state;
  }
};

export default PersonajeReducer;