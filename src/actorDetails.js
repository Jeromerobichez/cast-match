import { useEffect, useState } from 'react';
import axios from 'axios';

export const ActorDetails = ({ actorDetails}) => {
   /*  const [actorDetails, setActorDetails] = useState([]) */
    console.log("actorsData in details ", actorDetails)


 
     
   
  if (actorDetails !== undefined) {
    const backgroundStyle = {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${actorDetails.profile_path})`,

    }
return (
<div className='modal-center'>
    <div className="modal-container"
   
    >
<div  className="modal-head"  style={backgroundStyle}>
        <h1 className="modal-title">
        {actorDetails.name}
        </h1>
      </div>
   <p className="modal__info">
   Popularity:
          <span className="modal__rating">
             {actorDetails.popularity}
          </span>
        
        </p>
           <p className="modal__overview">
            <span> Known for: </span> 
            <ul>
          {actorDetails.known_for !== undefined ? actorDetails.known_for.map((k, i)=>
          <li style={{"list-style": "none"}} >
            <span
            className='li-knownfor'
            >{k.title}</span></li>): "coucou"}</ul>
         </p> 
       {/*  <button className="modal__btn modal__btn--red">
          <PlayIcon className="modal__btn--icon" />
          Play
        </button>
        <button className="modal__btn">
          <AddIcon className="modal__btn--icon" />
          My List
        </button>  */}
      </div> 
      </div>

)
}

}
