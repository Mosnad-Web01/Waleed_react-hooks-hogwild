import React from "react";
import HogTile from "./HogTile"; // Import the HogTile component

const HogList = ({ hogs }) => {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div className="ui eight wide column" key={hog.name}>
          <HogTile hog={hog} /> {/* Pass each hog to HogTile */}
        </div>
      ))}
    </div>
  );
};

export default HogList;
