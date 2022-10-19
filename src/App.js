
import ActorsPopulars from './actorsPopulars';
import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Helmet } from 'react-helmet'
import { ActorDetails } from './actorDetails';
import { requestPopularActors } from './Requests';
import Form from './form';

const defaultValues = {
  name: "coucou",
  known_for: ["a", "b", "c"],
  title: "default title"
}
function App() {
  const [actorsData, setActorsData] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [actorId, setActorId] = useState(18918)
  const [actorDetails, setActorDetails] = useState([defaultValues])
  const [page, setPage] = useState(1)


  const  getPopulars = async(n) => {
    setActorsData(await requestPopularActors(n))
    
  }

  useEffect(() => {
    
    
    getPopulars(page)
  }, [page])
  useEffect(() => {
    let data = actorsData.filter((e, i )=> e.id === actorId)
    setActorDetails(data[0])
    

 }, [actorId, actorsData])

  const openActorModal = async(id, page) => {
    setToggleModal(true)
    setOverlay(true)
    setActorId(id)
    setPage(page)
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
     <Helmet>
          <title>Cast Match</title>
        </Helmet>
      <header className="App-header">
     Cast Match
   
      </header>
     
      <div>
      <Form />
      <div className={toggleModal === true ? "overlay-active": "overlay-inactive"}
         onClick={closeActorModal}></div>
         
         <div className={toggleModal === true ? "show-modal": "hide-modal"}>
          <ActorDetails  actorDetails={actorDetails} />
         </div>
         <ActorsPopulars /* data={actorsData} */
         page={1}
          open={openActorModal}
           getActorId={getActorId} />
           <ActorsPopulars /* data={actorsData} */
         page={2}
          open={openActorModal}
           getActorId={getActorId} />
           <ActorsPopulars /* data={actorsData} */
         page={3}
          open={openActorModal}
           getActorId={getActorId} />
      </div>

    </div>
  );
}

export default App;
