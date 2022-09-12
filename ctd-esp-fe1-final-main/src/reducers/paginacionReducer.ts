import { Reducer } from "redux";
import { SmallPersonaje } from "../types"; 
import { NexPagesAction, statePagesAction, PrevPagesAction } from "../actions/paginacionActions"; 

export type PaginacionState = {
    count: number;
    pages: number;
    next:number;
    prev:number | null;
    results:SmallPersonaje[];
}

const initialState: PaginacionState = {
    count: 20,
    pages: 0,
    next:1,
    prev:null,
    results:[]
};

const PaginacionReducer: Reducer<
PaginacionState, 
NexPagesAction | statePagesAction | PrevPagesAction 
> = (state = initialState, action): PaginacionState => {
  switch (action.type) {
    case "NEXT_PAGES": 
    return {
      ...state,
      pages:action.pages,
      next:action.pages +1
  }
    case "STATE_PAGES": 
      return {
        ...state,
        results: action.results,
        pages:action.pages,
        count:action.count
    }
    case "PREV_PAGES": 
    return {
        ...state,
        pages:action.pages,
        prev:action.pages - 1,
        
  }
    default:
      return state;
  }
};

export default PaginacionReducer;