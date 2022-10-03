import axios from "axios";
import { statePages } from "../actions/paginacionActions";
import { AxiosPersonajeResponse, Personaje, SmallPersonaje , Episodio} from "../types";

export const fetchEpisodios = async (numbers: (string | undefined)[]): Promise<Episodio | Episodio[]> => {
  const res = await axios.get(`https://rickandmortyapi.com/api/episode/${numbers}`);
  return res.data.results
  /*   return (
    await fetch(`https://rickandmortyapi.com/api/episode/${numbers}`)
  ).json(); */
};



export const getPersonajes = async (pages:number = 0, name:string =""): Promise<Personaje[]> => {
  const res = await axios.get<AxiosPersonajeResponse>(`https://rickandmortyapi.com/api/character/?page=${pages}&name=${name}`);
  const SmallPersonajeList = res.data.results;
  console.log("SmallPersonajeList: ",SmallPersonajeList);

  return transformSmallPersonajeIntoPersonaje(SmallPersonajeList);
};

const transformSmallPersonajeIntoPersonaje = (
  SmallPersonajeList: SmallPersonaje[]
): Personaje[] => {
  const personajeArray: Personaje[] = SmallPersonajeList.map((personaje) => {
    const persoArray = personaje.url.split("/");
    const id = persoArray[5];
    const personajeImage = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
    const episodios = personaje.episode
    const status = personaje.status
    const species = personaje.species
    const gender = personaje.gender
    const originName = personaje.origin.name
    const originURL = personaje.origin.url
    

    return {
      id: id,
      name: personaje.name,
      image: personajeImage,
      favorite:false,
      episodio:episodios,
      status:status,
      species: species,
      gender: gender,
      origin: {
        name: originName,
        url: originURL
      }
    };
  });

  return personajeArray;
};


