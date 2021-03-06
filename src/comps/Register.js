import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fio, setFio] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post(
        "http://localhost:5000/register",
        {
          username,
          fio,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => (window.location.href = "/"));
  };
  return (
    <div id="register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="fio"
        onChange={(e) => setFio(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
