import React, { Component } from 'react';
import { requestPopularActors } from './Requests';


import ActorCarousel from './actorsCarousel';



class ActorsPopulars extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    dataArray: [],
    showButton: false
   
 }


componentDidMount() {
  const getPopulars = async(n) => {
    this.setState({dataArray: await requestPopularActors(n)})
  }
 getPopulars(this.props.page)
  console.log("wolo",this.state.dataArray)
}
handleButtonToggle = () => {
this.setState({showButton: !this.state.showButton})
}

// https://api.themoviedb.org/3/person/popular?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&page=1



 
render() {
const startRank = ((this.props.page-1)*20)+1
const endRank = this.props.page*20

  const slide = (shift) => {
     this.myRef.current.scrollLeft += shift; 
     console.log("hhh",  shift)
/*    console.log('hllo', this.myRef.current)
 */  };

 
  console.log("page", this.props.page)
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
      <h1 className="movieShowcase__heading">MOST POPULAR ACTORS (n°{startRank} to {endRank})</h1>
      <div className="movieShowcase__container"
        onMouseEnter={this.handleButtonToggle}
        onMouseLeave={this.handleButtonToggle}
        ref={this.myRef}
        >
<span className='button-scroll-left'
      onClick={()=> slide(parseInt(`-${this.myRef.current.clientWidth}`))}><span className={this.state.showButton ? "show-chevron": "hide-chevron"}>{"<"}</span></span>
  {dataArray !== undefined ? dataArray.map((e, i)=>
  <div >
   <ActorCarousel actorInfos={e} open={this.props.open} getActorId={this.props.getActorId} page={this.props.page} /></div>): null} 
<span className='button-scroll-right'
      onClick={()=> slide(this.myRef.current.clientWidth)}>
  <span className={this.state.showButton ? "show-chevron": "hide-chevron"}>{">"}</span></span>
      </div>
    </>
  )
      }
}
}



export default ActorsPopulars;
