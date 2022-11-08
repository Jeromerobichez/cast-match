
import React, {useState, useEffect} from 'react';
import axios from 'axios'
const Results = ({
  data,
  firstActor,
  secondActor,
  firstPic,
  secondPic,
  showModal, 
  firstActorName,
  secondActorName }) => {

  const [message, setMessage] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const [modalDisplayed, setModalDisplayed] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [moviePitch, setMoviePitch] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [activeOverlay, setActiveOverlay] = useState(false);

const getMovieId = (e) => {
  e.preventDefault()
  movieInfoDisplay()

}
  const movieInfoDisplay = (id) => {
  
    axios 
      .post('https://back-end-cinema.osc-fr1.scalingo.io/movie-detail', {id}) 
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
    return (
      data === "no data for actor1" ?
      <div className="unknown-div"> Sorry we can't find any actor under the name <span className="unknown-actor">{firstActor}</span>  </div> :
      data === "no data for actor2" ?
      <div className="unknown-div"> Sorry we can't find any actor under the name  <span className="unknown-actor">{secondActor} </span> </div> :
      data === "no common movie" ? 
      <div className="sorry-div">
        <div>Unfortunately {firstActorName}  and {secondActorName} never appeared together in a movie</div>
       
        <div className="photo-div">
        <img className="actor-pics"
            src={`https://image.tmdb.org/t/p/w500/${firstPic}`}
            width={150}/>
           <img className="actor-pics"
            src={`https://image.tmdb.org/t/p/w500/${secondPic}`}
            width={150}/>
            </div>
       </div>:
      data.length !== 0 ?
        <div className="movies-results">
         
         {data.length > 1 ?
      
        <h3>{firstActorName} and {secondActorName} appareared in <span className="movie-number"> {data.length} films</span> together</h3> 
         : 
         <h3>{firstActorName} and {secondActorName} appareared in <span className="movie-number"> {data.length} film</span> together</h3>}
       {/* <Modal isShowing={modalDisplayed ? true : false}/> */}
       <div className={activeOverlay ? 'overlay-active': "overlay-inactive"}
        onClick={closeModal}> </div>
       <div className= "modal-detail-modal"
         style={{display: modalDisplayed ?  "flex" : "none"}}>
           <h3>{movieTitle}</h3>
           <img src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
           className="modal-poster"
            />
           <h4>Summary :</h4>
           <p>{moviePitch}</p>
            </div> 
        <div className="photo-div">
           <img className="actor-pics"
            src={`https://image.tmdb.org/t/p/w500/${firstPic}`}
            width={150}/>
           <img className="actor-pics"
            src={`https://image.tmdb.org/t/p/w500/${secondPic}`}
            width={150}/>
        </div>
        <table className='results-table'>
          <tbody>
          <tr>
            <th className="td-movie-numero"></th>
            <th className='td-movie-poster'></th>
            <th className="td-movie-details"></th>
            <th className="td-movie-date"></th>
          </tr>

      {data.map((e, i)=> 
     
        <tr className="movie-infos">
     
        
        <td className="td-movie-numero"><span className="movie-numero">{i+1}</span></td>
       <td className='td-movie-poster'> <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
        width={100}
        onClick={() => movieInfoDisplay(e.id)}/>
        </td>
        <td className="td-movie-details"> {/*  <div className="movie-details">  */}
       <div className="movie-title-summary">
        <h4 className="h4-title"
        onClick={() => movieInfoDisplay(e.id)}>{e.title} 
       
        </h4> 
        <span className="movie-summary">{e.overview !== "" ? e.overview : "il n'y a pas de description disponible" }</span>
        </div>
       {/*  </div> */}
        </td>

        <td className="td-movie-date">
        <div className="movie-date">Release date&nbsp;: <p className="date-span">  {new Date(e.release_date).toDateString()} </p> </div></td> 

        </tr>
        )
       }  
       </tbody>
        </table>
    
        
        </div>
        : 

 
          <div className="no-input">The list will appear here</div> 
    )
}

export default Results;
