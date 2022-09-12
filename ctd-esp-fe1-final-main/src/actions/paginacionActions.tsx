import { Action, ActionCreator } from "@reduxjs/toolkit";
import { AxiosPersonajeResponse, SmallPersonaje } from "../types"; 

export interface NexPagesAction extends Action {
  type: "NEXT_PAGES";
  next:number;
  pages:number
}
export interface statePagesAction extends Action {
  type: "STATE_PAGES";
  results:SmallPersonaje[];
  pages:number;
  count:number
}

export interface PrevPagesAction extends Action {
  type: "PREV_PAGES";
  prev:number;
  pages:number
}

export const nextPages: ActionCreator<NexPagesAction> = (next:number, pages:number) => {
  return {
    type: "NEXT_PAGES",
    pages,
    next
  };
};

export const statePages: ActionCreator<statePagesAction> = (results:SmallPersonaje[], pages:number) => {
  return {
    type: "STATE_PAGES",
    results,
    pages, 
    count:9
  };
};

export const prevPages: ActionCreator<PrevPagesAction> = (prev:number, pages:number) => {
  return {
    type: "PREV_PAGES",
    prev,
    pages
  };
};

