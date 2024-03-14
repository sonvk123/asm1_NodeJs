import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import Error from "./Error/Error.jsx";
import PageNotFound from "./Error/PageNotFound.jsx";
import { ApiProvider } from "./store/data_movies.jsx";

function App() {
  return (
    <ApiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ApiProvider>
  );
}

export default App;
