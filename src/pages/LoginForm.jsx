import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import "../styles/login.css";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=F663B385B8E99FC152F311508FBDDF09");

    var raw = JSON.stringify({
      username,
      password,
    });
    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/udg/signin", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!response.token) {
          return (window.location = "/");
        }
        localStorage.setItem("sessionToken", response.token);
        return (window.location = "/students");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div class="form">
        <div class="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" />
        </div>
        <form class="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
