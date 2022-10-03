import { Reducer } from "redux";
import { Episodio } from "../types"; 
import { EpisodioAction } from "../actions/episodiosActions"; 

interface EpisodiosState {
  status: "cargando" | "completado" |"completado_con_error";
  episodios: Episodio | Episodio[];
  error: string;
}

const initialState: EpisodiosState = {
  status: "completado",
  episodios: [],
  error: "",
};

const EpisodioReducer: Reducer<
EpisodiosState, 
EpisodioAction 
> = (state = initialState, action): EpisodiosState => {
  switch (action.type) {
    case "GET_EPISODES":
      return {
        ...state,
        status: "cargando",
        episodios: [],
        error: "",
      };
    case "GET_EPISODES_SUCCESS":
      return {
        ...state,
        status: "completado",
        episodios: action.episodios,
      };
    case "GET_EPISODES_ERROR":
      return {
        ...state,
        status: "completado_con_error",
        error: action.error
      };
    default:
      return { ...state };
  }
};

export default EpisodioReducer;