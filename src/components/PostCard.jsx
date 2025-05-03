import React from "react";
import { like, unlike} from "../api/endpoints/like";

import moment from 'moment';
import 'moment/locale/pt-br'; 

moment.locale('pt-br');

const PostCard = ({ id, content, created_at, user, likes_user }) => {

  const handleLike = () => {
    like({
      "post_id": id,
    })
  }

  const handleUnlike = () => {
    unlike(id);
  }

  const user_id = JSON.parse(localStorage.getItem("user"))?.id;
  const isLiked = likes_user.includes(user_id);

  return (
    <div
      className="card shadow-sm mb-4"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      {/* Header do post */}
      <div className="card-header bg-white d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <strong>{user}</strong>
        </div>
        {/* o moment não quis ficar em português de jeito nenhum 🙁 */}
        <small className="text-muted">{moment(created_at).fromNow()}</small>
      </div>

      {/* Imagem do post */}
      {/* <img src={imageUrl} className="card-img-top" alt="Post" /> */}

      {/* Corpo do post */}
      <div className="card-body">
        <p className="card-text">{content}</p>
        <div className="d-flex justify-content-start gap-3 mt-2">
          <button
            className={`btn btn-sm ${
              isLiked ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={handleLike}
          >
            {isLiked ? "Curtido" : "Curtir"}
          </button>

          {isLiked ? (
            <button className={"btn btn-sm btn-danger"} onClick={handleUnlike}>
              Descurtir
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
