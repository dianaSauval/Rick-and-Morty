import { Reducer } from "redux"; 
import { PaginacionAction } from "../actions/paginacionActions"; 

export type PaginacionState = {
  count:number
    pages: number;
    next:number;
    prev:number | null;
}

const initialState: PaginacionState = {
    count: 9,
    pages: 0,
    next:1,
    prev:null,
};

const PaginacionReducer: Reducer<
PaginacionState, 
PaginacionAction 
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