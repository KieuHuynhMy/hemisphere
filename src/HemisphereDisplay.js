import React from "react";
import "./HemisphereDisplay.css";
import northPic from "./images/north.png";
import southPic from "./images/south.png";

const hemisphereConfig = {
  Northern: {
    text: "It is north hemisphere",
    picture: northPic,
  },
  Southern: {
    text: "It is south hemisphere",
    picture: southPic,
  },
};
const HemisphereDisplay = ({ latitute }) => {
  const hemisphere = latitute > 0 ? "Northern" : "Southern";
  // const picture = latitute > 0 ? northPic : southPic;
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt={hemisphere} />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
