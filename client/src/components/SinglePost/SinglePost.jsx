import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SinglePost.scss";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState("");
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateModel, setUpdateModel] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/api/v1/posts/${postId}`);
      setPost(res.data);
    };
    getPost();
  }, [postId]);
  const PF = "http://localhost:8000/images/";

  const handleDelete = async () => {
    try {
      await axios.delete("/api/v1/posts/" + postId, {
        data: { username: user.username },
      });

      navigate("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put("/api/v1/posts/" + postId, {
        username: user.username,
        title,
        desc,
      });
      setUpdateModel(false);
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateModel ? (
          <input
            placeholder="Change title here "
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}

            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateModel(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateModel ? (
          <textarea
            placeholder="Change description here"
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
        {updateModel && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
