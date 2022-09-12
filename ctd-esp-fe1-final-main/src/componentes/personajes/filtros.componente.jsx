import { useState } from 'react';
import './filtros.css';

const Filtros = () => {
/*     const [search, setSearch] = useState('')
    const onSearchChange = (e)=>{
        setCurrentPage(0);
        setSearch(e.target.value);
    } */


    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        /* value={search}
        onChange={onSearchChange} *//>
    </div>
}

export default Filtros;