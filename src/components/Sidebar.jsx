import React from "react";
import { FaHome, FaUser, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const username = JSON.parse(localStorage.getItem("user"))?.username;


  return (
    <div
        className="d-flex flex-column vh-100 p-3 text-white bg-primary"
        style={{ width: "250px", minWidth: "250px" }}
    >
      <h4 className="mb-4 text-warning">MiniTwitter</h4>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white">
            <FaHome className="me-2 text-warning" />
            Feed
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/users" className="nav-link text-white">
            <FaUser className="me-2 text-warning" />
            Perfis
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/create-post" className="nav-link text-white">
            <FaPlus className="me-2 text-warning" />
            Criar postagem
          </Link>
        </li>
      </ul>

      <hr className="text-warning" />
      <div>
        <span className="text-white-50">Logado como</span>
        <br />
        <strong className="text-warning">{username}</strong>
      </div>
    </div>
  );
};

export default Sidebar;
