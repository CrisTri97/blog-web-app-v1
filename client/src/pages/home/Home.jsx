import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";
import "./Home.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/v1/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
