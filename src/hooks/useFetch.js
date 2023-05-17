import { useState , useEffect } from 'react'
import  env from "react-dotenv";

export const useFetch = (apiPath, queryTerm="") => {

  // console.log("env ====", process.env.REACT_APP_API_KEY)
    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results)
}
    fetchMovies();

  },[url])
  return (
    {data}
  )
  
}
