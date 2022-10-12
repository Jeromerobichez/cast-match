import React, { Component } from 'react'

/* import ActorDetails from '../components/movie/ActorDetails'; */
/* import Backdrop from './UI/Backdrop'; */

export default class ActorCarousel extends Component {
   state = {
      toggleModal: false,
      overlay: false
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
      this.setState({ overlay: true });

   }

   
   
   render() {
      const closeActorModal = () => {
         this.setState({ toggleModal: false })
         this.setState({ overlay: false });

         
      }
      let actorInfos = this.props.actorInfos
console.log("props de carousel", this.props.actorInfos)
 const actorPictureUrl = `https://image.tmdb.org/t/p/w500/${actorInfos.profile_path}` 
  console.log("toggleModal", this.state.toggleModal)
return (
         <div className="actor-display">
       {/*   <h1>yoyo</h1> */}
        <div className={this.state.toggleModal === true ? "overlay-active": "overlay-inactive"}
         onClick={closeActorModal}></div>
<img src={actorPictureUrl}
   alt={actorInfos.name}
   className="actor-picture"
   onClick={this.handleToggleModal}
   /> 
   
         </div>
      )
   }
}
