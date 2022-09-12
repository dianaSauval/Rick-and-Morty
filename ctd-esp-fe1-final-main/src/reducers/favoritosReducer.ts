import { Reducer } from "redux";
import { Personaje } from "../types"; 
import { AddFavoriteAction, DeleteFavoriteAction, LoadFavoriteAction } from "../actions/favoritosActions";
import { castDraft } from "immer";

export type FavoriteState = Personaje[];

const initialState: FavoriteState = [];

const FavoriteReducer: Reducer<
FavoriteState,
  AddFavoriteAction | LoadFavoriteAction | DeleteFavoriteAction
> = (state = initialState, action): FavoriteState => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      return [
        ...state,
        { name:action.name, favorite: true, id: action.id, image:action.image }
      ];
    }
    case "LOAD_FAVORITES": {
      return state.filter((card) => card.favorite === true);
    }
    case "DELETE_FAVORITE": {
      return state.filter((card) => card.id !== action.id);

    }
    default:
      return state;
  }
};

export default FavoriteReducer;