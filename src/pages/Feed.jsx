import React, { useEffect, useState } from "react";

import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

import { getPosts } from "../api/endpoints/posts";

const Feed = () => {
  
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(null);

  const fetchPosts = async (url = null) => {
    const response = await getPosts(url);
    setPosts(response.data.results);
    setCount(response.data.count);
    setNext(response.data.next);
    setPrevious(response.data.previous);
    setCurrentUrl(url);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />

      <main className="flex-grow-1">
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

            <div className="d-flex justify-content-center align-items-center mb-4" style={{ gap: "1rem" }}>
              <button
                className="btn btn-outline-primary"
                onClick={() => fetchPosts(previous)}
                disabled={!previous}
              >
                Anterior
              </button>

              <span className="text-muted">Vendo {posts.length} de {count}</span>

              <button
                className="btn btn-outline-primary"
                onClick={() => fetchPosts(next)}
                disabled={!next}
              >
                Próxima
              </button>
            </div>
            <div
              style={{
                maxHeight: "62vh",
                overflowY: "auto",
                backgroundColor: "#f8f9fa",
                borderRadius: "0.5rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.05)",
              }}
            >
              {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.id} {...post} />)
              ) : (
                <div className="text-center text-muted">Nenhuma postagem</div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Feed;
