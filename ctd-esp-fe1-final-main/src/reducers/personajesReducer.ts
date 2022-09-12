import { Reducer } from "redux";
import { Personaje } from "../types"; 
import { ErrorPersonajesAction, FetchPersonajesRequestAction, LoadPersonajesAction } from "../actions/personajesActions"; 

export type PersonajeState = {
  loading: boolean
  personajes: Personaje[];
  error: string
}

const initialState: PersonajeState = {
  loading: false,
  personajes: [],
  error: ""
};

const PersonajeReducer: Reducer<
PersonajeState, 
FetchPersonajesRequestAction | LoadPersonajesAction | ErrorPersonajesAction 
> = (state = initialState, action): PersonajeState => {
  switch (action.type) {
    case "FETCH_PERSONAJES_REQUEST": 
    return {
      ...state,
      loading:true
  }
    case "LOAD_PERSONAJES": 
      return {
        loading:false,
        personajes: action.payload,
        error:""
    }
    case "ERROR_PERSONAJES": 
    return {
      loading:false,
      personajes: [],
      error:action.payload
  }
    default:
      return state;
  }
};

export default PersonajeReducer;