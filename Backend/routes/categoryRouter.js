const express = require("express");

const router = express.Router();

const categoryControllers = require("../controllers/categoryControllers");

router.get(
  "/api/movies/discover/:genreId",
  categoryControllers.getCategoryMovies
);

exports.routes = router;
