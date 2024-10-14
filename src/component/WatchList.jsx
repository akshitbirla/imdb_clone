import React, { useEffect, useState } from "react";
import genreids from "../utility_/Genre";


function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  let popIncreasing = () => {
    let popularityIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchList([...popularityIncreasing]);
  };

  let popDecreasing = () => {
    let popularityDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchList([...popularityDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-6 cursor-pointer">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "flex justify-center h-[3rem] w-[9rem] rounded-xl items-center text-white font-bold bg-blue-400"
                  : "flex justify-center h-[3rem] w-[9rem] rounded-xl items-center text-white font-bold bg-gray-400"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none px-5 rounded-xl"
        />
      </div>

      <div className="border border-gray-200 m-8 overflow-hidden rounded-lg">
        <table className="w-full  text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center ">
                <div className="p-2">
                  <i
                    onClick={sortIncreasing}
                    className="fa-solid fa-arrow-up"
                  ></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2">
                  <i
                    onClick={sortDecreasing}
                    className="fa-solid fa-arrow-down"
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  <div className="p-2">
                    <i
                      onClick={popIncreasing}
                      className="fa-solid fa-arrow-up"
                    ></i>
                  </div>
                  <div className="p-2">Popularity</div>
                  <div className="p-2">
                    <i
                      onClick={popDecreasing}
                      className="fa-solid fa-arrow-down"
                    ></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == 'All Genres'){
                  return true
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-800 cursor-pointer">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
