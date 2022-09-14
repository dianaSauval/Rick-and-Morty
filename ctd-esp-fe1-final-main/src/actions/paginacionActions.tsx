import { Action, ActionCreator } from "@reduxjs/toolkit";

export interface NexPagesAction extends Action {
  type: "NEXT_PAGES";
  next:number;
  pages:number
}
export interface StatePagesAction extends Action {
  type: "STATE_PAGES";
  pages:number;
  count:number
}

export interface PrevPagesAction extends Action {
  type: "PREV_PAGES";
  prev:number;
  pages:number
}

export type PaginacionAction = NexPagesAction | PrevPagesAction |  StatePagesAction;


export const nextPages: ActionCreator<NexPagesAction> = (pages:number) => {
  return {
    type: "NEXT_PAGES",
    pages,
    next: pages+1
  };
};

export const statePages: ActionCreator<StatePagesAction> = (pages:number) => {
  return {
    type: "STATE_PAGES",
    pages, 
    count:9
  };
};

export const prevPages: ActionCreator<PrevPagesAction> = (pages:number) => {
  return {
    type: "PREV_PAGES",
    prev: pages-1,
    pages
  };
};




