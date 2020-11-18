import React, { Component } from "react";
import icon_american from "../icons/american.png";

const foodItems = [
  {
    name: "american",
    iconUrl: icon_american,
  },
];

var AppStyle = {
  divStyle: {
    display: "inline",
  },
};

export default class FItem extends Component {
  render() {
    return (
      <div className="food-item-container">
        <div style={AppStyle.divStyle} className="food-item-inner">
          <img
            className="food-item-icon"
            src={foodItems[0].iconUrl}
            alt="american"
          />
          <p className="food-item-name">{foodItems[0].name}</p>
        </div>
      </div>
    );
  }
}