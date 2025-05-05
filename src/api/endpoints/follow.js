import api from "../axios";

export const followingUser = (followingUserId) => {
    return api.post("follow/", followingUserId);
}

export const getFollowingsUsers = async () => {
    return await api.get("follow/");
}