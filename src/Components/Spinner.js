import React from "react";
import sp from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <img className="visually-hidden" src={sp} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
