import api from "../axios";

export const getPosts = (url) => {
    if (url) {
        return api.get(url);
    }
    return api.get("/posts", );
}