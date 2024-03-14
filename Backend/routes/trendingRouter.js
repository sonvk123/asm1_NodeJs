const express = require("express");

const router = express.Router();

const trendingControllers = require("../controllers/trendingControllers");

router.get("/api/movies/trending", trendingControllers.getMoviesTrending);
exports.routes = router;
