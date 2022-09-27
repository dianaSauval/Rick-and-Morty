import axios from "axios";
import { statePages } from "../actions/paginacionActions";
import { AxiosPersonajeResponse, Personaje, SmallPersonaje } from "../types";

export const getPersonajes = async (pages:number = 0, name:string =""): Promise<Personaje[]> => {
  const res = await axios.get<AxiosPersonajeResponse>(`https://rickandmortyapi.com/api/character/?page=${pages}&name=${name}`);
  const SmallPersonajeList = res.data.results;
  console.log("count: ",res.data.next);

  const cantidadTarjetasTotales = statePages(SmallPersonajeList, pages).count;
  console.log("SmallPersonajeFiltrados: ", cantidadTarjetasTotales);
  console.log("page: ", 2*cantidadTarjetasTotales);

  return transformSmallPersonajeIntoPersonaje(SmallPersonajeList);
};

const transformSmallPersonajeIntoPersonaje = (
  SmallPersonajeList: SmallPersonaje[]
): Personaje[] => {
  const personajeArray: Personaje[] = SmallPersonajeList.map((personaje) => {
    const persoArray = personaje.url.split("/");
    const id = persoArray[5];
    const personajeImage = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

    return {
      id: id,
      name: personaje.name,
      image: personajeImage,
      favorite:false
    };
  });

  return personajeArray;
};


