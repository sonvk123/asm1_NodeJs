const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const { checkAuthentication } = require("./middleware/check");

app.use(bodyParser.json()); // Cho phép Express đọc dữ liệu từ JSON body

const trendingRouter = require("./routes/trendingRouter");

const ratingRouter = require("./routes/ratingRouter");

const categoryRouter = require("./routes/categoryRouter");

const TrailerRouter = require("./routes/TrailerRouter");

const searchRouter = require("./routes/searchRouter");

app.use("/", checkAuthentication);

app.use(trendingRouter.routes);

app.use(ratingRouter.routes);

app.use(categoryRouter.routes);

app.use(TrailerRouter.routes);

app.use(searchRouter.routes);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
