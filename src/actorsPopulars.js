import React, { Component } from 'react';
import { requestPopularActors } from './Requests';


import ActorCarousel from './actorsCarousel';



class ActorsPopulars extends Component {
  state = {
    dataArray: []
   
 }


componentDidMount() {
  const getPopulars = async(n) => {
    this.setState({dataArray: await requestPopularActors(n)})
  }
 getPopulars(this.props.page)
  console.log("wolo",this.state.dataArray)
}
 
// https://api.themoviedb.org/3/person/popular?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&page=1



 
render() {


 
  console.log("DATA ARRAY", this.state.dataArray)
  let dataArray = this.state.dataArray
  /* const data
  Array = this.props.data

  console.log("dataArray =>", dataArray)
 */

  

  // Call getMoviesRows function only when we get the data back 
  // from the API through redux 
 
if (this.state.dataArray !== []) {
  return (
    <>
      <h1 className="movieShowcase__heading">MOST POPULAR ACTORS (n°1 to 20)</h1>
      <div className="movieShowcase__container">

  {dataArray !== undefined ? dataArray.map((e, i)=>
   <ActorCarousel actorInfos={e} open={this.props.open} getActorId={this.props.getActorId} />): null} 
    {/*   {results != undefined ?{ results} : null} */}
      {/* results.map((e, i)=> 
      <img 
        src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
        alt={e.name}
        className="movieShowcase__container--movie-image"
        />): null} */}
      </div>
    </>
  )
      }
}
}



export default ActorsPopulars;
