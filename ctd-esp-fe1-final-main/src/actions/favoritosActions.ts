import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICard } from "../types"; 

export interface AddFavoriteAction extends Action {
  type: "ADD_FAVORITE";
  id: number;
  favorite: boolean;
}

export interface LoadFavoriteAction extends Action {
  type: "LOAD_FAVORITES";
  cards: ICard[];
}

export interface DeleteFavoriteAction extends Action {
  type: "DELETE_FAVORITE";
  id: number;
  favorite: boolean;
}

export const addFavorite: ActionCreator<AddFavoriteAction> = (id: number) => {
  return {
    type: "ADD_FAVORITE",
    id,
    favorite: true,
  };
};

export const loadFavorites: ActionCreator<LoadFavoriteAction> = (cards: ICard[]) => {
  return {
    type: "LOAD_FAVORITES",
    cards,
  };
};

export const deleteTodo: ActionCreator<DeleteFavoriteAction> = (id: number) => {
  return {
    type: "DELETE_FAVORITE",
    id,
    favorite: false,
  };
};
