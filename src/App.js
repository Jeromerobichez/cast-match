
import ActorsPopulars from './actorsPopulars';
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const [actorsData, setActorsData] = useState([])
  let dataProps
  useEffect(() => {
     request()
  }, [])
  const API_KEY = "224ce27b38a3805ecf6f6c36eb3ba9d0"
  console.log("api_key =", API_KEY)
 let results
  const request = async()=>{
    await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => {
      console.log('lalalalal', res.data.results)
      setActorsData(res.data.results)
       
     })
     .catch(e => {
       console.log("erreur catché", e.message)
     })
  }
  console.log("actoooooor", actorsData)
  return (
    <div className="App">
      <header className="App-header">
     Cast Match
      </header>
      <div>
         <ActorsPopulars data={actorsData} />
      </div>

    </div>
  );
}

export default App;
