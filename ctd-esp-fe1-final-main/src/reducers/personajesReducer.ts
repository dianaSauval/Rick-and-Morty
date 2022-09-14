import { Reducer } from "redux";
import { Personaje } from "../types"; 
import {  PersonajesAction, LoadPersonajesAction } from "../actions/personajesActions"; 

export interface PersonajeState {
  loading: boolean
  personajes: Personaje[];
  status: "cargando" | "completado" |"completado_con_error"
  error: string | null;
  busqueda: string
}

const initialState: PersonajeState = {
  loading: false,
  personajes: [],
  status: "completado",
  error: null,
  busqueda:""
};

const PersonajeReducer: Reducer<
PersonajeState, 
PersonajesAction | LoadPersonajesAction 
> = (state = initialState, action): PersonajeState => {
  switch (action.type) {
/*     case "FETCH_PERSONAJES_REQUEST": 
    return {
      ...state,
      loading:true
  } */
    case "LOAD_PERSONAJES": 
      return {
        loading:false,
        personajes: action.payload,
        error:"",
        busqueda:"",
        status:"completado"
    }
/*     case "ERROR_PERSONAJES": 
    return {
      loading:false,
      personajes: [],
      error:action.payload,
      busqueda:""
  } */
  case "BUSCAR_PERSONAJE": 
  return {
        ...state,
        busqueda:action.name,
        status:"cargando",
        error:null
}
case "BUSCAR_PERSONAJE_EXITO": 
return {
      ...state,
      status:"completado",
      personajes:action.personajes,
      error:null
}
case "BUSCAR_PERSONAJE_ERROR": 
return {
      ...state,
      status:"completado_con_error",
      personajes:[],
      error:action.error
}
    default:
      return state;
  }
};

export default PersonajeReducer;