import React, {useEffect, useState} from 'react';

import Cinema from './cinema.jpeg'
import Results from './Results'
import axios from 'axios'
import svgLogo from './castMatchSvg.svg'

function Form  ()  {
  
    const [nameFirstActor, setNameFirstActor] = useState('');
    const [nameSecondActor, setNameSecondActor] = useState('');
    const [message, setMessage] = useState(null);
    const [resultats, setResultats] = useState([]);
    const [firstActorPic, setFirstActorPic] = useState('');
    const [secondActorPic, setSecondActorPic] = useState('');
    const [firstActorName, setFirstActorName] = useState('');
    const [secondActorName, setSecondActorName] = useState('');
    const [toggleModal, setToggleModal] = useState(false);


      let data = {nameFirstActor, nameSecondActor };

      let resultsTitles = []

     /*  const options = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json' 
          },
      } */

 const submitForm = e => {
    e.preventDefault()
    axios
      /* .post('https://back-end-cinema.osc-fr1.scalingo.io/api', data) */
      .post('http://localhost:5000/api', data) 
      .then(res => {
       setResultats(res.data.results)
       setFirstActorPic(res.data.firstPic)
       setSecondActorPic(res.data.secondPic)
       setFirstActorName(res.data.nameActorOne)
       setSecondActorName(res.data.nameActorTwo)
       setToggleModal(true)

      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
        console.log(message)
      })
  }
  
  const closeActorModal = () => {
    setToggleModal(false)
  }

  const cinemaStyle = {
    backgroundImage: "url('https://media.lesechos.com/api/v1/images/view/62c696f7cde6181c2d44dafb/1024x576-webp/0701967133971-web-tete.webp')",
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',

  }
    return (
     
    <div className='form-div'
       style={cinemaStyle}>
       <div className='form-div-container' >
       <h1>Welcome on Cast Match</h1>
        <span className="form-div-h3">This app is designed to give you the list of all the movies in which two actors appear together </span>
   
          <div className='input-card'>
       <span> Please Enter the two actors you want to search : </span>
        <div>
        <div className='input-div'>
            <form className='input-form'>
              <div className='input-label-div'>
            <label className='input-label'> the first actor : 
            <input type="text" id="id-input" name="actor-input-1" className='actor-input'
             placeholder="first actor"
            
             onChange={(e) => setNameFirstActor(e.target.value)}/> 
            
            </label>
            </div>
            <br/>
            <div  className='input-label-div'>
            <label className='input-label'> the second actor : 
            <input type="text" id="id-input" name="actor-input-2" className='actor-input'
           placeholder="second actor"
            onChange={(e) => setNameSecondActor(e.target.value)}/>
            </label>
            </div>
            <div className='input-submit-div'>
              <label>
                <input type="submit"
                id="submit-input"
                className={nameFirstActor != '' && nameSecondActor!= '' ? 'submit-button' : 'non-active-button'}
                onClick={submitForm}
                value="Submit your two actors" />
                 
              </label>
            </div>
            </form>
            </div>

        </div> 
       
        </div>
        </div>

        <div className={toggleModal === true ? "overlay-active": "overlay-inactive"}
         onClick={closeActorModal}></div>
         <div className={toggleModal === true ? "show-modal-results": "hide-modal"}>
  <Results data={resultats}
   firstActor={nameFirstActor}
    secondActor={nameSecondActor} 
    firstPic={firstActorPic}
    secondPic={secondActorPic}
    firstActorName={firstActorName} 
    secondActorName={secondActorName}
   /> 
    </div>
    </div>
   
    )
}

export default Form;
