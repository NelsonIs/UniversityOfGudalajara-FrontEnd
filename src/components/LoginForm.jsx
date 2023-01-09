import { useState, useContext } from "react";
import { DBContext } from "../contexts/DBContext";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(DBContext);

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
        setToken(response.token);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Signin</button>
    </form>
  );
}
