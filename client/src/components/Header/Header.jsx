import React from "react";
import "./Header.scss";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://image.shutterstock.com/shutterstock/photos/356223779/display_1500/stock-photo-beautiful-girl-in-sea-style-sitting-on-wooden-bridge-travel-and-vacation-freedom-concept-sensual-356223779.jpg"
        alt="img-header"
        className="headerImg"
      />
    </div>
  );
}
