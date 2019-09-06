import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const response = await api.get(`/posts`);
    const posts = response.data;
    setPosts(posts);
  }
  return (
    <div className="product-list">
      {posts.map(post => {
        return (
          <article key={post._id}>
            <strong>{post.title}</strong>
            <p>{post.description}</p>
            <Link to={`/posts/${post._id}`}>Acessar</Link>
          </article>
        );
      })}
    </div>
  );
}
