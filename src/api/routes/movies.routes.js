const express = require(`express`);
const router = express.Router();

const {
    getAllMovies,
    //getMovieById, 
    setMovie, 
    updateMovie, 
    deleteMovie 
} = require(`../controllers/movies.controllers`);

router.get("/", getAllMovies);

//router.get("/:id", getMovieById);

router.post("/", setMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);


module.exports = router;