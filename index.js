const express = require(`express`);
const cors = require(`cors`);
const dotenv = require(`dotenv`);
const app = express();
app.use(cors());
const { connect } = require(`./src/utils/database`);
const routerMovies = require(`./src/api/routes/movies.routes`);
const routerCinema = require(`./src/api/routes/cinema.router`)
//const movies = require('./src/api/models/movies.models');
//const Movies = require('./src/api/models/movies.models');
app.use(express.json());
connect();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(`/movies`, routerMovies);
app.use(`/cinema`, routerCinema);
app.listen(PORT, () => {
    console.log(`Url del servidor : http://localhost:${PORT}`);
});
