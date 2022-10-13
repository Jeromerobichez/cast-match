import { useEffect, useState } from 'react';
import axios from 'axios';

export const ActorDetails = ({ actorDetails}) => {
   /*  const [actorDetails, setActorDetails] = useState([]) */
    console.log("actorsData in details ", actorDetails)


 
     
   
  if (actorDetails !== undefined) {
    const backgroundStyle = {
      backgroundPosition: "right",
      backgroundRepeat: "no-repeat",
      width: "100%",
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${actorDetails.profile_path})`
    }
return (

    <div className="modal__container"
    style={backgroundStyle}
    >

        <h1 className="modal__title">
        {actorDetails.name}
        </h1>
      
   <p className="modal__info">
          <span className="modal__rating">
            Popularity: {actorDetails.popularity}
          </span>
        
        </p>
           <p className="modal__overview">
            <span> Known for: </span> 
            <ul>
          {actorDetails.known_for !== undefined ? actorDetails.known_for.map((k, i)=>
          <li >
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
)
}

}
