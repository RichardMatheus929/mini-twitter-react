import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

import { getPosts } from "../api/endpoints/posts";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulando requisição assíncrona
    const fetchPosts = async () => {
      // Aqui você pode trocar por uma requisição real (fetch/axios)
      const response = await getPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="h-100">
      <div className="container py-4">
        <div className="text-center mb-4">
          <img
            src="https://gestaoparque.imd.ufrn.br/gestao/arquivo/by-name/23fa93cd-b8ac-4fa7-ae60-a086d3c34c03.png?key=34837e5c4e6469ec6016cf9b41e54abdf6f01080cbd8e3006120c524fc9ab2b7"
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
          <h2 className="mt-3 fw-bold">
            Feed <span style={{ color: "#1d9bf0" }}>mini-twitter</span>
          </h2>
        </div>

        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} {...post} />)
        ) : (
          <div className="text-center text-muted">{}</div>
        )}
      </div>
    </section>
  );
};

export default Feed;