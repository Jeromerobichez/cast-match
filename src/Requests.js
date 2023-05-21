import axios from "axios"

export const  requestPopularActorsNew = async (page) =>{
    let popular
     await axios.post(`http://localhost:5000/populars`, page  )
      .then(res => {
       popular = res.data


     })
     .catch(e => {
       console.log("erreur attrapée : ", e.message)
     })
     return popular
  }
