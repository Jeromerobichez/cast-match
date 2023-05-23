import './App.scss';

import { useEffect, useState } from 'react';

import { ActorDetails } from './actorDetails';
import ActorsPopulars from './actorsPopulars';
import CastMatchLogo from './cast.png'
import Compte from './compte.svg'
import Form from './form';
import { Helmet } from 'react-helmet'
import Loupe from './loupe.svg'
import axios from 'axios';
import { requestPopularActorsNew } from './Requests';

const defaultValues = {
  name: "coucou",
  known_for: ["a", "b", "c"],
  title: "default title"
}
const navItems = ["Home","Trending actors","Actors by nationality"]
function App() {
  const [actorsData, setActorsData] = useState([])
  const [actorsDataNew, setActorsDataNew] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [actorId, setActorId] = useState(18918)
  const [actorDetails, setActorDetails] = useState([defaultValues])
  const [page, setPage] = useState(2)

  const  getPopulars = async(page) => {
 /* setActorsData(await requestPopularActors(n)) */
  setActorsData(await requestPopularActorsNew({page})) 

  }

  const findActor = async () => {
    let data =  await actorsData.filter((e, i )=> e.id === actorId)
    setActorDetails(data[0])
  }


  useEffect(() => {
    getPopulars(page)

  }, [page])
  useEffect( () => {
findActor()

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

      <div>
        <div className='navbar'>
          <div className='navbar-left'>
          <img className='navbar-logo'
              src={CastMatchLogo}
               alt='cast match'
                /> 
                {navItems.map((item, i)=>
          <span className='navbar-item'>{item}
          </span>
           )}
          </div>
          <div className='navbar-right'>
            <img className='navbar-right-svg'
            src={Loupe} 
            alt="une loupe"
                  height={25}/>
            <img className='navbar-right-svg'
            src={Compte}
            alt='un compte utilisteur'
                 height={25}/>


          </div>
      </div>
       
      <Form />
      <div className={toggleModal === true ? "overlay-active": "overlay-inactive"}
         onClick={closeActorModal}></div>
         
         <div className={toggleModal === true ? "show-modal": "hide-modal"}>
          <ActorDetails  actorDetails={actorDetails} />
         </div>
         <ActorsPopulars data={actorsData}
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
