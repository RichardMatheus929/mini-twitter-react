import api from "../axios";
import { alertLikeError, alertLikePost } from "../../utils/Alerts";

export const like = (post) => {
  api.post("/likes/", post).then((response) => {
      if (response.status === 201) {
        alertLikePost();
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alertLikeError();
      }
    });
};
