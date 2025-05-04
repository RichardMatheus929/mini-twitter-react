import api from "../axios";

export const login = (dataUser) => {
    return api.post("/accounts/signin", dataUser);
}

export const getUsers = () => {
    return api.get("/accounts");
}