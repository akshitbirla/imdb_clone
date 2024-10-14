import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import Movies from "./component/Movies";
import WatchList from "./component/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./component/Banner";
import { useEffect } from "react";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchList(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
