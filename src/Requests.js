import axios from "axios"


  export const  requestPopularActorsNew = async (page) =>{
    let popular
     await axios.post(`https://back-end-cinema.osc-fr1.scalingo.io/populars`, page  )
      .then(res => {
       popular = res.data


     })
     .catch(e => {
       console.log("erreur attrapée : ", e.message)
     })
     return popular
  }
