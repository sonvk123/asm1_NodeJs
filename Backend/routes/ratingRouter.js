const express = require("express");

const router = express.Router();

const reatingControllers = require("../controllers/reatingControllers");

router.get("/api/movies/top-rate", reatingControllers.getMoviesTrending);

exports.routes = router;
