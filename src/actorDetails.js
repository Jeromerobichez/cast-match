import { useEffect, useState } from 'react';

import axios from 'axios';

export const ActorDetails = ({ actorDetails}) => {

  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [moviePitch, setMoviePitch] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [activeOverlay, setActiveOverlay] = useState(false);
  const [message, setMessage] = useState(null);

  const movieInfoDisplay = (id) => {

    axios
      .post('http://localhost:5000/movie-detail', { id })
      /* .post("http://localhost:5000/movie-detail", {id}) */ //  http://localhost:5000/movie-detail
      .then(res => {

        setMovieTitle(res.data.title)
        setMoviePitch(res.data.overview)
        setMoviePoster(res.data.poster_path)
        setModalDisplayed(true)
        setActiveOverlay(true)

      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
        console.log(message)
      })
  }
  const closeModal = () => {
    setActiveOverlay(false)
    setModalDisplayed(false)

  }

  if (actorDetails !== undefined) {
    const backgroundStyle = {

      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${actorDetails.profile_path})`,

    }

return (
<div className='modal-center'>
    <div className="modal-container">
      <div className={activeOverlay ? 'second-overlay-active' : "second-overlay-inactive"}
    onClick={closeModal}> </div>
 <div className="movie-detail-modal"
                style={{ display: modalDisplayed ? "flex" : "none" }}>
                <h3>{movieTitle}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
                  alt={movieTitle}
                  className="modal-poster"
                  width={150}
                />
                <h4>Summary :</h4>
                <p>{moviePitch}</p>
              </div>
<div  className="modal-head"  style={backgroundStyle}>
        <h1 className="modal-title">
        {actorDetails.name}
        </h1>
      </div>
   <p className="modal-info">
   Popularity:
          <span className="modal-rating">
             {actorDetails.popularity}
          </span>
        
        </p>
           <p className="modal-overview">
            <h3> Known for: </h3> 
            <ul>
          {actorDetails.known_for !== undefined ? actorDetails.known_for.map((k, i)=>
        
          <li style={{"list-style": "none"}}
           onClick={() => movieInfoDisplay(k.id)} >
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
