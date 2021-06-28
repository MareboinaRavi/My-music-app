import React from "react";

const Card = ({ songs }) => {
  return (
    <div>
      <div className="row">
        {songs.map((song, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card" style={{ width: "17.5rem" }}>
                <center>
                  <img
                    src={song.img}
                    className="img-fluid card-img-top"
                    alt={song.title}
                  />
                </center>
                <div className="card-body">
                  <h5 className="card-title">
                    {song.title} - {song.movie}
                  </h5>
                  <audio controls src={song.song} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
