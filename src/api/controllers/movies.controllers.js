const Movies = require(`../models/movies.models`);

const getAllMovies = async (req,res) => {
    try{
        const numMovies = await Movies.find();
        return res.json(numMovies);
    }catch (error) {
        res.status(500).send({message: error})
    }
};

//const getMovieById = async (req, res) => {
  //  try {
       
    //    const { id } = req.params;
      //  const getMovie = await Movie.findById(id);
 //       res.status(200).json(getMovie);
   // } catch (error) {
   //     return res.status(500).json(error);
  //  }
//}; 

const setMovie = async (req, res) => {
    try {
        const newMovie = new Movies(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        //console.log(id);
        const putMovie = new Movies(req.body);
        
        putMovie._id = id;
        
        const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {new:true,
        });
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMovie = await Movies.findByIdAndDelete(id);
        return res.status(200).json(deleteMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { 
    getAllMovies, 
    //getMovieById, 
    setMovie, 
    updateMovie, 
    deleteMovie,
};