import { useEffect, useState } from "react";
import { followingUser, getFollowingsUsers } from "../api/endpoints/follow";

const UserCard = ({ id, username, email }) => {
  const [followingsUsers, setFollowingsUsers] = useState([]);

  const handleFollows = async (userId) => {
    await followingUser(userId);
    const updatedFollowings = await getFollowingsUsers();
    setFollowingsUsers(updatedFollowings.data);
  };

  const isFollowing = followingsUsers.some((user) => user.id === id);

  useEffect(() => {
    const fetchFollowings = async () => {
      const res = await getFollowingsUsers();
      setFollowingsUsers(res.data);
    };

    fetchFollowings();
  }, []);

  return (
    <div className="col-md-6">
      <div className="border rounded p-3 bg-white shadow-sm">
        <strong>{username}</strong>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <p className="text-muted mb-0">{email}</p>
          <div className="d-flex gap-4">
            {!isFollowing ? (
              <button
                onClick={() => handleFollows(id)}
                className="btn btn-sm btn-outline-primary"
              >
                Seguir
              </button>
            ) : (
              <>
                <button className="btn btn-sm btn-primary" disabled>
                  Seguindo
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  Parar de seguir
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
