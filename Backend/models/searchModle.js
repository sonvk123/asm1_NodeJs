const Movies = require("./Movies");
const paginate = require("../utils/Paging");

const DATA_PATH = "../Backend/data/movieList.json";
const DATA_PATH_genre = "../Backend/data/genreList.json";

module.exports = class Search {
  static postSearch(
    keyword,
    genre_input,
    type,
    language,
    year,
    pageSize,
    currentPage,
    cb
  ) {
    // lấy dữ liệu từ file json
    const data = Movies.all(DATA_PATH);
    const genre_list = Movies.all(DATA_PATH_genre);
    let data_video = [];
    // kiểm tra xem keyword có thuộc value["title"] hoặc value["overview"] hay không
    const data_video_keyword = data.filter((value) => {
      return (
        (value["title"] &&
          value["title"].toLowerCase().includes(keyword.toLowerCase())) ||
        (value["overview"] &&
          value["overview"].toLowerCase().includes(keyword.toLowerCase()))
      );
    });

    // tìm kiếm phim theo language
    const data_video_language = data_video_keyword.filter((value) => {
      return value["original_language"] === language;
    });

    // tìm kiếm phim theo type
    const data_video_type = data_video_language.filter((value) => {
      if (type === "all") {
        return value;
      }
      return value["media_type"] === type;
    });

    // tìm kiếm phim theo năm
    const data_video_year = data_video_type.filter((value) => {
      if (year) {
        const dateString = value["first_air_date"];
        const date = new Date(dateString);
        const value_year = date.getFullYear();
        return value_year == year;
      }
      return value;
    });

    const selectedIDs = [];
    for (const genre of genre_list) {
      if (genre["name"].toLowerCase().includes(genre_input.toLowerCase())) {
        // Kiểm tra xem chuỗi con có tồn tại.
        selectedIDs.push(genre.id); // Thêm ID vào mảng.
      }
    }

    const data_video_genre = data_video_year.filter((value) => {
      if (!genre_input) {
        return value;
      }
      value.genre_ids.some((id) => selectedIDs.includes(id));
    });

    data_video = data_video_genre;
    if (data_video.length > 0) {
      const {
        totalRecords,
        totalPages,
        currentPageData,
        currentPageDataLength,
      } = paginate(data_video, pageSize, currentPage);

      // In ra kết quả
      cb({
        results: currentPageData,
        page: 1,
        total_pages: totalPages,
        keyword: keyword,
        currentPageDataLength: currentPageDataLength,
      });
    } else {
      cb([]);
    }
  }
};
