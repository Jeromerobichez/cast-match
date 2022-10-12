
import ActorsPopulars from './actorsPopulars';
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { ActorDetails } from './actorDetails';

const defaultValues = {
  name: "coucou",
  known_for: ["a", "b", "c"],
  title: "default title"
}
function App() {
  const [actorsData, setActorsData] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [actorId, setActorId] = useState(2524)
  const [actorDetails, setActorDetails] = useState([defaultValues])



  let dataProps
  useEffect(() => {
     request()
  }, [])
  useEffect(() => {
    let data = actorsData.filter((e, i )=> e.id === actorId)
    setActorDetails(data[0])
    console.log("KNOWNFOR IN DETAILS", data);

 }, [actorId, actorsData])


  const API_KEY = "224ce27b38a3805ecf6f6c36eb3ba9d0"

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

 

  const openActorModal = async(id) => {
    setToggleModal(true)
    setOverlay(true)
    setActorId(id)
  }
  const displayActorModal = () => {
    openActorModal()


  }
  const closeActorModal = () => {
    setToggleModal(false)
    setOverlay(false)
  }
  const getActorId = (id) => {
    setActorId(id)
  }

  return (
    <div className="App">
      <header className="App-header">
     Cast Match
      </header>
      <div>
      <div className={toggleModal === true ? "overlay-active": "overlay-inactive"}
         onClick={closeActorModal}></div>
         <div className={toggleModal === true ? "show-modal": "hide-modal"}>
          <ActorDetails  id={actorId} API_KEY={API_KEY} actorDetails={actorDetails} />
         </div>
         <ActorsPopulars data={actorsData} open={openActorModal} getActorId={getActorId} />
      </div>

    </div>
  );
}

export default App;
