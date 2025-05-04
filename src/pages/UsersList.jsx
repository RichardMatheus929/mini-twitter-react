import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Usercard from "../components/UserCard";

import { getUsers } from "../api/endpoints/auth";
import PostCard from "../components/PostCard";

const UsersList = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await getUsers();
        console.log(response.data)
        setUsers(response.data);
    }
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />

      <main className="flex-grow-1">
        <section className="h-100">
          <div className="container py-4">
            <div className="text-center mb-4">
              <img
                src="https://gestaoparque.imd.ufrn.br/gestao/arquivo/by-name/23fa93cd-b8ac-4fa7-ae60-a086d3c34c03.png?key=34837e5c4e6469ec6016cf9b41e54abdf6f01080cbd8e3006120c524fc9ab2b7"
                alt="logo"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
              <h2 className="mt-3 fw-bold">
                Lista de <span style={{ color: "#1d9bf0" }}>usuários</span>
              </h2>
            </div>

            <div
              className="p-3"
              style={{
                maxHeight: "62vh",
                overflowY: "auto",
                backgroundColor: "#f8f9fa",
                borderRadius: "0.5rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="row g-3">
                {users.length > 0 ? (
                  users.map((user) => <Usercard key={user.id} {...user} />)
                ) : (
                  <div className="text-center text-muted">Nenhum usuário</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UsersList;
