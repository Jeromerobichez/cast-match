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
  
   
   
   render() {
 
   const openBoxToggle = () => {
 this.setState({ toggleBigPicture: true }); 
     console.log("enter")

   }
   const closeBoxToggle = () => {
 this.setState({ toggleBigPicture: false }); 
      console.log("leave")

   }

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
   <div className='mouse-div'
   onMouseEnter={openBoxToggle}
   onMouseLeave={closeBoxToggle}
   onClick={handleClick}>
         <div 
         className={this.state.toggleBigPicture === true ? "actor-non-display": "actor-display"}
         >
            <img src={actorPictureUrl}
   alt={actorInfos.name}
   className="actor-picture"
  
   /> 
     </div>
         <div className={this.state.toggleBigPicture === true ? "actor-small-modal": "actor-non-display"}>
         <img src={actorPictureUrl}
               alt={actorInfos.name}
               className="actor-picture"
         /> 
         <div>{actorInfos.name}</div>
         <div className="modal-popularity">popularity : {actorInfos.popularity}</div>
         </div>
       {/*   <h1>yoyo</h1> */}
      

   
       
         </div>
      )
   }
}
