import React, { Component } from 'react'

/* import ActorDetails from '../components/movie/ActorDetails'; */
/* import Backdrop from './UI/Backdrop'; */

export default class ActorCarousel extends Component {
   state = {
      toggleModal: false
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
   }

   
   
   render() {
      const closeActorModal = () => {
         this.setState({ toggleModal: false })
      }
      let actorInfos = this.props.actorInfos
console.log("props de carousel", this.props.actorInfos)
 const actorPictureUrl = `https://image.tmdb.org/t/p/w500/${actorInfos.profile_path}` 
  
return (
         <div className="coucou">
       {/*   <h1>yoyo</h1> */}
        
  <h1>{actorInfos.name}</h1>
<img src={actorPictureUrl}
   alt={actorInfos.name}
   /> 
         </div>
      )
   }
}
