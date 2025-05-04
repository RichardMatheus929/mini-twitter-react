import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import { createPost } from "../api/endpoints/posts";

const CreatePost = () => {

const [message, setMessage] = useState("");
const [content, setContent] = useState("");
const [image, setImage] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("content", content);
    if (image) {
      form.append("image_content", image);
    }

    createPost(form);
}

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
                Criar <span style={{ color: "#1d9bf0" }}>post</span>
              </h2>
            </div>

            <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
              {message && <div className="alert alert-info">{message}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Conteúdo do post
                  </label>
                  <textarea
                    id="content"
                    className="form-control"
                    rows="4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Imagem (opcional)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Publicar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreatePost;
