import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch();
/*     const [search, setSearch] = useState('')
    const onSearchChange = (e)=>{
        setCurrentPage(0);
        setSearch(e.target.value);
    } */


    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        /* value={search}
        onChange={(e)=> dispatch(buscarPersonaje(e.target.value))} *//>
    </div>
}

export default Filtros;