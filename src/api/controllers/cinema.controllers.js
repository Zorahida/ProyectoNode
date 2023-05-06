const Cinema = require(`../models/cinema.models`);

const getCinema = async (req,res) => {
    try{
        const oneCinema = await Cinema.find();
        return res.json(oneCinema);
    }catch (error) {
        res.status(500).send({message: error})
    }
};

const setNewCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateCinema = async (req, res) => {
    try {
        const { id } = req.params;
        //console.log(id);
        const putCinema = new Cinema(req.body);
        
        putCinema._id = id;
        
        const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new:true,
        });
        return res.status(200).json(updateCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCinema = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCinema = await Cinema.findByIdAndDelete(id);
        return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { 
    getCinema, 
    setNewCinema, 
    updateCinema, 
    deleteCinema,
};