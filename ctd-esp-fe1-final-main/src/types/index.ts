export interface ICardFavorite {
    id: string;
    favorite: boolean;
    card:Personaje    
  }

  export interface ListFavorite {
    cards: ICardFavorite[];
  };

  export interface AxiosPersonajeResponse{
    count: number;
    pages: number;
    next:number;
    prev:null | number;
    results:SmallPersonaje[];
  }

  export interface SmallPersonaje{
    name:string;
    url:string;
  }

  export interface Personaje{
    name:string;
    image: string;
    id:string;
  }