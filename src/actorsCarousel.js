import React, { Component } from 'react'

/* import ActorDetails from '../components/movie/ActorDetails'; */
/* import Backdrop from './UI/Backdrop'; */

export default class ActorCarousel extends Component {
   state = {
      toggleModal: false,
      overlay: false,
      toggleBigPicture: false
   }

   handleToggleModal = () => {
      this.setState({ toggleModal: true });
      this.setState({ overlay: true });

   }
   handleBoxToggle = () => {
      this.setState({ toggleBigPicture: !this.state.toggleBigPicture });

   }

   
   
   render() {
      const closeActorModal = () => {
         this.setState({ toggleModal: false })
         this.setState({ overlay: false });
      }
     
      let actorInfos = this.props.actorInfos

      const handleClick = () => {
         this.props.open(actorInfos.id, this.props.page)
      }

 const actorPictureUrl = `https://image.tmdb.org/t/p/w500/${actorInfos.profile_path}` 

return (
         <div 
         className={this.state.toggleBigPicture === true ? "actor-big-display": "actor-display"}
         onMouseEnter={this.handleBoxToggle}
         onMouseLeave={this.handleBoxToggle}
         onClick={handleClick}>
         
       {/*   <h1>yoyo</h1> */}
      
<img src={actorPictureUrl}
   alt={actorInfos.name}
   className="actor-picture"
   /> 
   
         </div>
      )
   }
}
