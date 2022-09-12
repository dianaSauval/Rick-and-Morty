import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICard } from "../types"; 

export interface LoadPersonajesAction extends Action {
  type: "LOAD_PERSONAJES";
  cards: ICard[];
}

export const loadPersonaje: ActionCreator<LoadPersonajesAction> = (cards: ICard[]) => {
  return {
    type: "LOAD_PERSONAJES",
    cards,
  };
};

