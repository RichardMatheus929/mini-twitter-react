import React from "react";

const PostCard = ({ id, content, created_at }) => {
  return (
    <div className="card shadow-sm mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
      {/* Header do post */}
      <div className="card-header bg-white d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            // src={profilePic}
            alt="Profile"
            className="rounded-circle me-2"
            width="50"
            height="40"
          />
          {/* <strong>{username}</strong> */}
        </div>
        <small className="text-muted">{created_at}</small>
      </div>

      {/* Imagem do post */}
      {/* <img src={imageUrl} className="card-img-top" alt="Post" /> */}

      {/* Corpo do post */}
      <div className="card-body">
        <p className="card-text">
          {/* <strong>{username}</strong> */} {content} 
        </p>
        <div className="d-flex justify-content-start gap-3 mt-2">
          <button className="btn btn-sm btn-outline-primary">Curtir</button>
          <button className="btn btn-sm btn-outline-secondary">Comentar</button>
          <button className="btn btn-sm btn-outline-secondary">Compartilhar</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
