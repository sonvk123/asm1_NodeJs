const MoviesRating = require("../models/ratingModel");

exports.getMoviesTrending = (req, res) => {
  let pageSize = 20;
  let currentPage = 1;

  MoviesRating.getMoviesRating(pageSize, currentPage, (data) =>
    res.send({
      results: data.currentPageData,
      page: currentPage,
      total_pages: data.totalPages,
    })
  );
};


