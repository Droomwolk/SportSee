import React from "react";
import { Link } from "react-router-dom";

import "../../styles/main.scss";

const ErrorPage = () => {
  return (
    <div className="error">
      <main className="error__main">
        <h1 className="error__main-title">404</h1>
        <p className="error__main-texte">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to="/home">
          <p className="error__main-footer">Retourner sur la page d'accueil</p>
        </Link>
      </main>
    </div>
  );
};

export default ErrorPage;
