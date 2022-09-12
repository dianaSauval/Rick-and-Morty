import axios from "axios";

const baseUrl = 'https://rickandmortyapi.com/api/character/?page=19'

export const getPersonajes =async () => {
  const res = await axios.get(baseUrl)
  return res.data  
}

/* export const getPersonajes = async () => {
  try{
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=19");
    return response.json();
  }catch(error){
    console.error(error)
  }
  }; */

  
  
/*   export const addTodo = async (newTodo: any) => {
    const response = await fetch("http://localhost:8001/todo", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    return response.json();
  }; */