
import ActorsPopulars from './actorsPopulars';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [actorsData, setActorsData] = useState([])
  let dataProps
  useEffect(() => {
     request()
  }, [])
  const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';
 let results
  const request = async()=>{
    await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&page=1`)
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
        <h1>Netflix like "actors"</h1>
      </header>
<ActorsPopulars data={actorsData} />
    </div>
  );
}

export default App;
