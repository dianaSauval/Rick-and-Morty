export interface ICard {
    id: number;
    favorite: boolean;    
  }

  export type CardContextType = {
    cards: ICard[];
    saveTodo: (card: ICard) => void;
  };