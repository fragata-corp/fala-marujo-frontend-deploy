import React, { useState } from "react";
import { useAlert } from "react-alert";
import api from "../../services/api";

import { setSession } from "../../services/auth";

import "./styles.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const response = await api.post("login", { email, password });
      await setSession(response.data._id);
      props.history.push("/dash");
    } catch (error) {
      alert.error("Usuário ou senha ivalida!!");
    }
  }

  return (
    <div id="container">
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
          value={email}
          className="txt"
          placeholder="Digite seu E-mail"
        />
        <input
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
          className="txt"
          placeholder="Digite sua Senha"
        />

        <input type="submit" className="btn" />
      </form>
    </div>
  );
}
