const button = document.querySelector("#getMoviesList") 
//const movieList = document.querySelector("#movieList")
const displayMovies = ()=>{
    const movieList = document.querySelector("#movieList")  
}
//api = mesero, intermediario que te permite hacer peticion
//api = plicattion programing interfase: es una interfase entre dos aplicaciones- interfase como un tipo mediador, un mensajero
//un restaurante, un mesero y un cliente entran a un bar
const getHorrorMovies = ( ) =>{
   const apikey = "a45064f3"
   const searchQuery = "horror"
   const apiEndPoint = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}`
   //fetch es una funcion que nos permite hacer peticiones a una api
   //no sabemos cuanto tiempo se lleva la peticion
   //fetch sabe que trabajamos con comportamiento asincrono
   //fetch trabaja con promesas, tiene tres estados 
   //primer estado, pending = en espera a una respuestta
   //segundo estado puede ser opcionas, completado o rechazado
   fetch(apiEndPoint).then((response)=>{
    return response.json()
   }).then((data)=>{
    const horrorMovies = data.Search
    console.log(data)
   })
}


button.addEventListener("click", getHorrorMovies)

