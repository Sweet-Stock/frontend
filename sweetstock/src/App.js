import React, { useState, useEffect } from "react";
import "./App.css";
import api from './services/api'
import cors from 'cors'

cors()

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get("/paises/mostrar-paises")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        <li>{user[0]?.nome}</li>
        <li>{user[1]?.nome}</li>
        <li>{user[2]?.nome}</li>
      </ul>
    </div>
  );
}

export default App;
