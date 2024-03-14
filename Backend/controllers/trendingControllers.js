const MoviesTrending = require("../models/trendingModel");

exports.getMoviesTrending = (req, res) => {
  let pageSize = 20;
  let currentPage = 1;

  MoviesTrending.getMoviesTrending(pageSize, currentPage, (data) => {
    res.send({
      results: data.currentPageData,
      page: currentPage,
      total_pages: data.totalPages,
    });
  });
};
