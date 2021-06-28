import axios from "axios";
import React from "react";
import Card from "./Components/Card";
import Spinner from "./Components/Spinner";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json"
      )
      .then((res) => {
        !search
          ? setData(res.data)
          : setData(
              res.data.filter((songs) =>
                songs.title.toLowerCase().includes(search.toLowerCase())
              )
            );
      });
  }, [search]);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand">
            <span style={{ color: "coral" }}>𝄞</span> Ravi Music World{" "}
            <span style={{ color: "coral" }}>𝄞</span>
          </h3>
          <form className="d-flex">
            <input
              className="form-control me-4"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for any song you want...."
              aria-label="Search"
              style={{ width: "300px" }}
            />
          </form>
        </div>
      </nav>
      {data.length >= 1 ? (
        <center>
          <Card songs={data} />
        </center>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
