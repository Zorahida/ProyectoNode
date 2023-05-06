const express = require(`express`);
const router = express.Router();

const {
    getCinema,
    setNewCinema,
    updateCinema,
    deleteCinema,

} = require(`../controllers/cinema.controllers`);

router.get("/", getCinema);
router.post("/", setNewCinema);
router.put("/:id", updateCinema);
router.delete("/:id", deleteCinema);


module.exports = router;