import React from "react";
import "./Single.scss";
import Sidebar from "../../components/SideBar/SideBar";
import SinglePost from "../../components/SinglePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
      Single
    </div>
  );
}
