import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { Personaje } from "../types";
import { useLocation, useParams } from "react-router-dom";
import { getEpisodiosThunk } from "../actions/episodiosActions";
import { addFavorite, deleteFavorite } from "../actions/favoritosActions";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const favoritos = useAppSelector((state) => state.favoritos);
    const personajes = useAppSelector(state => state.personajes);
    const { episodios, status } = useAppSelector((state) => state.episodios);
    const dispatch = useAppDispatch();
    const [arrayEpisodios, setArrayEpisodios] = useState<(string | undefined)[]>([]);
    const { id } = useParams();


    const location = useLocation();
    const state: any = location.state;
    const personaje: Personaje = { ...state.personaje };


    const personajeDetalle : (Personaje | undefined) = personajes.personajes.find((per)=>per.id === id)
    console.log("personajeDetalle: ", personajeDetalle);


    useEffect(() => {
      if (personajeDetalle) {
        
        const array: (string | undefined)[] = personajeDetalle.episodio.map((episodio) => {
          return episodio.split("/").at(-1);
        });
        setArrayEpisodios(array);        
      }
      
      }, [personajeDetalle, id]);
    
      useEffect(() => {
        dispatch(getEpisodiosThunk(arrayEpisodios));
      }, [arrayEpisodios, dispatch]);

      const getFavorito = (id:string) =>{
        const favorito = favoritos.find((fav)=>fav.id === id)
        let isFavorite = false;
        if(favorito){
          isFavorite=favorito.favorite
        }
        return isFavorite;
      }

      const handleClickFavorito = (id:string) =>{
        const favorito = favoritos.find((fav)=>fav.id === id)
        const personaje = personajes.personajes.find((per)=>per.id === id);
          if (favorito === undefined) {
            dispatch(addFavorite(id, personaje));       
            
          }else{
            dispatch(deleteFavorite(id))
          }      
      } 
      console.log("episodios: ", episodios);
      
      if(status === "cargando") return <div>Cargando personajes...</div>
      if(status === "completado_con_error") return <div>No se encontró ningún personaje...</div>
      if (!personajeDetalle) return <></>
      
      return (
        <div className="container">
            <h3>{personajeDetalle.name}</h3>
            <div className={"detalle"}>
                <div className={"detalle-header"}>
                    <img src={personajeDetalle.image} alt={personajeDetalle.name} />
                    <div className={"detalle-header-texto"}>
                    <p>{personajeDetalle.name}</p>
                    <p>Planeta: {personajeDetalle.origin.name}</p>
                    <p>Genero: {personajeDetalle.gender}</p>
                    </div>
                    <BotonFavorito esFavorito={getFavorito(personajeDetalle.id)} onClick={(e)=>handleClickFavorito(personajeDetalle.id)}/>
                </div>
            </div>
            <h4>Lista de episodios donde apareció el personaje</h4>
            <div className={"episodios-grilla"}>
            { Array.isArray(episodios) ? (
              episodios?.map((episodio) => {
                return (
                    <div key={`episodio_${episodio.id}_${personajeDetalle.name}`}>     
                        <TarjetaEpisodio episodio={episodio} />
                        </div>
                );
              })
            ) : (
                <TarjetaEpisodio episodio={episodios} />
            )}
          </div>
        </div>
      );
    };

export default PaginaDetalle