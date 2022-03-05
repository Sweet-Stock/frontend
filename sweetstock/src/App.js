import React, { useState, useEffect } from "react";
import "./App.css";
import api from './services/api'

function App() {
  const [url , setUrl] = useState('/linhas')
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get(url)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
       <ul>
      { user.map( (number) => <li key={Math.floor(Date.now() * Math.random()).toString(36)}>{ number.nomeIda }</li>) }
    </ul>
    </div>
  );
}

export default App;
