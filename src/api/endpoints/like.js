import api from "../axios";
import { alertLikeError, alertLikePost, alertUnlikePost } from "../../utils/Alerts";

export const like = (post) => {
  api.post("/likes/", post).then((response) => {
      if (response.status === 201) {
        alertLikePost();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alertLikeError();
      }
    });
};

export const unlike = (post_id) => {
  api.delete(`/likes/${post_id}/`).then((response) => {
      if (response.status === 204) {
        alertUnlikePost();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    })
} 
