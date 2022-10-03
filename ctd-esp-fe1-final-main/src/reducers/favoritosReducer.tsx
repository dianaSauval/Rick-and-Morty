import { Reducer } from "redux";
import { ICardFavorite } from "../types"; 
import { AddFavoriteAction, DeleteFavoriteAction, LoadFavoriteAction, DeleteAllFavoriteAction } from "../actions/favoritosActions";
import { castDraft } from "immer";

export type FavoriteState = ICardFavorite[];

const initialState: FavoriteState = [];

const FavoriteReducer: Reducer<
FavoriteState,
  AddFavoriteAction | LoadFavoriteAction  | DeleteFavoriteAction | DeleteAllFavoriteAction
> = (state = initialState, action): FavoriteState => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      return [
        ...state,
        { favorite: true, id: action.id, card:action.card }
      ];
    }
    case "LOAD_FAVORITES": {
      return state.filter((card) => card.favorite === true);
    }
    case "DELETE_FAVORITE": {
      return state.filter((card) => card.id !== action.id);

    }
    case "DELETE_ALL_FAVORITE": {
      state.forEach((card)=>card.favorite=false);
      return initialState;

    }
    default:
      return state;
  }
};

export default FavoriteReducer;