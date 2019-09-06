import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Doca from "../Doca";
import { getSession } from "../../services/auth";

export default function Profile() {
  const [user, setUser] = useState({});

  async function loadUsers() {
    const id = getSession();
    const response = await api.get(`/users/${id}`);

    setUser(response.data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Doca />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Rua</th>
            <th>Nº</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/users/edit/${user._id}`}>Editar</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
