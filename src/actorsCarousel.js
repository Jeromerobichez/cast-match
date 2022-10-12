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

      const handleClick = () => {
         this.props.open(actorInfos.id)
      }

 const actorPictureUrl = `https://image.tmdb.org/t/p/w500/${actorInfos.profile_path}` 

return (
         <div className="actor-display">
       {/*   <h1>yoyo</h1> */}
      
<img src={actorPictureUrl}
   alt={actorInfos.name}
   className="actor-picture"
   onClick={handleClick}
   /> 
   
         </div>
      )
   }
}
