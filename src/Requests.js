import axios from "axios"

const API_KEY = "224ce27b38a3805ecf6f6c36eb3ba9d0"

export const  requestPopularActors = async(page )=>{
    let popular
    await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(res => {
      popular = res.data.results

     })
     .catch(e => {
       console.log("erreur catché", e.message)
     })

     return popular
  }
