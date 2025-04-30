import axios from "axios";

import api from "../axios";

export const login = (dataUser) => {
    return api.post("/accounts/signin", dataUser);
}