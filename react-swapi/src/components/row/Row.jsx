import React from "react";

const Row = ({ left, right }) => {
  return (
    <div className="items row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};


export default Row