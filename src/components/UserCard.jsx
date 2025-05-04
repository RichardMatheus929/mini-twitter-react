const UserCard = ({ id, username, email }) => {
    return (
      <div className="col-md-6">
        <div className="border rounded p-3 bg-white shadow-sm">
          <strong>{username}</strong>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="text-muted mb-0">{email}</p>
            <div className="d-flex gap-4">
              <button className={"btn btn-sm btn-outline-primary"}>
                Seguir
              </button>
              <button className={"btn btn-sm btn-outline-danger"}>
                Parar de seguir
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserCard;
  