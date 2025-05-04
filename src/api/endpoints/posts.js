import api from "../axios";

export const getPosts = (url, order) => {

    if (url) {
        if (order && url.includes("?") && !url.includes("order")) {
            url += `&order=${order}`;
        }
        return api.get(url);
    }

    if (order) {
        return api.get("/posts"+`?order=${order}`);
    }
    return api.get("/posts", );
}

export const