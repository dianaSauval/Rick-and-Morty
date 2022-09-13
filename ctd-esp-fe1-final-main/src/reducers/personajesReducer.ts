import { Reducer } from "redux";
import { Personaje } from "../types"; 
import { BuscarPersonajeAction,ErrorPersonajesAction, FetchPersonajesRequestAction, LoadPersonajesAction } from "../actions/personajesActions"; 

export type PersonajeState = {
  loading: boolean
  personajes: Personaje[];
  error: string;
  busqueda:string
}

const initialState: PersonajeState = {
  loading: false,
  personajes: [],
  error: "",
  busqueda:""
};

const PersonajeReducer: Reducer<
PersonajeState, 
FetchPersonajesRequestAction | LoadPersonajesAction | ErrorPersonajesAction | BuscarPersonajeAction 
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
        error:"",
        busqueda:""
    }
    case "ERROR_PERSONAJES": 
    return {
      loading:false,
      personajes: [],
      error:action.payload,
      busqueda:""
  }
  case "BUSCAR_PERSONAJE": 
  return {
        ... state,
        busqueda:action.name
}
    default:
      return state;
  }
};

export default PersonajeReducer;