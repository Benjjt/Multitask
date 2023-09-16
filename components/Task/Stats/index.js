import React from "react";

const Stats = ({ outputArr }) => {
  return (
    outputArr.length > 0 && (
      <div className="absolute left-10 top-10 flex  justify-center items-center border bg-black rounded-lg text-white p-5 gap-4">
        <span>Moves Made: </span>
        <span className="text-xl font-bold">{outputArr.length}</span>
      </div>
    )
  );
};

export default Stats;
