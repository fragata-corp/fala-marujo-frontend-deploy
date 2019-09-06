import React, { useState } from "react";
import Drawer from "react-motion-drawer";
import { logout } from "../../services/auth";
import { Link } from "react-router-dom";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faUser, faToggleOff, faUserFriends } from '@fortawesome/free-solid-svg-icons';
*/ import "./styles.css";

export default function Doca() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer fadeOut open={open} onChange={open => setOpen(open)}>
      <aside>
        <div>
          <header>
            <h1>CREATIVE TIM</h1>
          </header>
          <div>
            <Link to="/user/profile">Perfil</Link>
            <Link to="/user">Usuários</Link>
            <Link to="/create/post">Novo Post</Link>
            <a href="/login" onClick={() => logout()}>
              Sair
            </a>
          </div>
        </div>
      </aside>
    </Drawer>
  );
}
