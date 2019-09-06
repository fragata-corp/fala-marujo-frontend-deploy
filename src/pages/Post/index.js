import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";

export default function Post(props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    _getPost(props.match.params.id);
  }, [props.match.params.id]);

  async function _getPost(id) {
    const response = await api.get(`/posts/${id}`);

    setPost(response.data);
  }

  return (
    <div className="product-info">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>
        URL: <a href={post.url}>{post.url}</a>
      </p>
    </div>
  );
}
