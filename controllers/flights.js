module.exports = {
    new: newFlight,
    create,
    index
}

const Flight = require('../models/flight');

async function index(req, res){
    const flightsAll = await Flight.find({})
    res.render('flights/index', {
        flights: flightsAll
    })
}

function newFlight(req, res){
    res.render('flights/new', {errorMsg: ''});
}

async function create(req, res){
    // convert nowShowing's checkbox of nothing or 'on' to boolean
        // req.body.nowShowing = !!req.body.nowShowing
        // //remove any whitespace at start and end of cast
        // req.body.cast = req.body.cast.trim();
        // //split cast into an array if not an empty string
        // if(req.body.cast) req.body.cast = req.body.cast.split(/\s*, \s*/);
        // for(let key in req.body){
        //     if (req.body[key] === '') delete req.body[key]
        // }

        console.log(req.body)
        try {
            await Flight.create(req.body);
            console.log(req.body)
            res.redirect('/flights')
        } catch(err) {
            console.log(err)
            res.render('flights/new', {errorMsg: err.message});
        }
    }
    