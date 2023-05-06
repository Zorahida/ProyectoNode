//console.log('Movies');

const mongoose = require(`mongoose`);

const dotenv = require(`dotenv`);

const Movies = require("../models/movies.models");

dotenv.config();

const arrayMovies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción"
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción"
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación"
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación"
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción"
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica"
  },
];

mongoose.connect(process.env.DB_URL)
.then(async() => {
    const allMovies = await Movies.find();
    if(allMovies.length > 0){
      await Movies.collection.drop()
      console.log("MoviesOut");
    }
  }
)
.catch((error) => {
  console.log(`Error ${error}`)
})
.then(async () =>{
  const moviesMap = arrayMovies.map(Movie => new Movie (Movie));
  await Movies.insertMany(moviesMap);
console.log('Movies in');
})
.catch((error) =>console.log(`Error insertando Movies ${error}`))
.finally( () => mongoose.disconnect());
        