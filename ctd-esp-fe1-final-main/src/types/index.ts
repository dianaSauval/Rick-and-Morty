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
    episode: string[];
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string,
        url: string
    }
  }

  export interface Personaje{
    name:string;
    image: string;
    id:string;
    episodio: string[];
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string,
        url: string
    }
  }

  export interface Episodio{
    id:string,
    name:string,
    url:string,
    episode:string,
    air_date:string,
    personajes: string[];
  }