import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

export default function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/api/v1/categories");
      setCats(res.data);
    };
    getCat();
  }, []);
  console.log("check cat:", cats);
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className="sideBarImg"
          src="https://gallery.yopriceville.com/var/albums/Nature/Beautiful%20sea.jpg?m=1345158000"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          assumenda error velit aperiam, voluptates quis deleniti qui, harum
          exercitationem eaque quia, officia rem necessitatibus eveniet
          distinctio porro tempora doloremque ad!
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats &&
            cats.map((c, index) => (
              <Link key={index} to={`/?cat=${c.name}`} className="link">
                <li className="sideBarListItem">{c.name}</li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
