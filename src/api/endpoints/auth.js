import api from "../axios";

export const registerUser = (dataUser) => {
    return api.post("/accounts/signup", dataUser);
}

export const login = (dataUser) => {
    return api.post("/accounts/signin", dataUser);
}

export const getUsers = () => {
    return api.get("/accounts");
}