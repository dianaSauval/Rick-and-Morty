import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { fetchEpisodios } from "../services";
import { RootState } from "../store/store";
import { Episodio } from "../types";

interface getEpisodiosAccion extends Action {
  type: "GET_EPISODES";
  query: string;
}
interface getEpisodiosSuccessAccion extends Action {
  type: "GET_EPISODES_SUCCESS";
  episodios: Episodio | Episodio[];
}
interface getEpisodiosErrorAccion extends Action {
  type: "GET_EPISODES_ERROR";
  error: string;
}

const getEpisodios: ActionCreator<getEpisodiosAccion> = (query: string) => {
  return {
    type: "GET_EPISODES",
    query: query,
  };
};

const getEpisodiosSuccess: ActionCreator<getEpisodiosSuccessAccion> = (
  episodios: Episodio | Episodio[]
) => {
  return {
    type: "GET_EPISODES_SUCCESS",
    episodios: episodios,
  };
};

const getEpisodiosError: ActionCreator<getEpisodiosErrorAccion> = (
  mensaje: string
) => {
  return {
    type: "GET_EPISODES_ERROR",
    error: mensaje,
  };
};

export type EpisodioAction = getEpisodiosAccion | getEpisodiosSuccessAccion | getEpisodiosErrorAccion;

interface BuscarEpisodioThunkAction extends ThunkAction<void, RootState, unknown, EpisodioAction>{};

export const getEpisodiosThunk = (
  arrayEpisodioID: (string | undefined)[]
): BuscarEpisodioThunkAction => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchEpisodios(arrayEpisodioID);
      console.log("response: ", response);
      
      if (response !== undefined) {
        dispatch(getEpisodiosSuccess(response));
      }
    } catch (e) {
      dispatch(getEpisodiosError(e));
    }
  };
};