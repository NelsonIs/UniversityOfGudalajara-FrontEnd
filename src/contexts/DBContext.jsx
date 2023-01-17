import { createContext, useState, useEffect } from "react";

export const DBContext = createContext();

export function DBContextProvider(props) {
  const [students, setStudents] = useState([]);
  const [campus, setCampus] = useState([]);
  const [majors, setMajors] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    doFetch("http://localhost:8080/udg/students", token, setStudents);
    doFetch("http://localhost:8080/udg/campus", token, setCampus);
    doFetch("http://localhost:8080/udg/majors", token, setMajors);
  }, []);

  return (
    <DBContext.Provider
      value={{
        students,
        campus,
        majors,
        setToken,
      }}
    >
      {props.children}
    </DBContext.Provider>
  );
}

function doFetch(url, token, setEntity) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiTmVsc29uSXMiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjczOTgzOTA0LCJleHAiOjE2NzM5ODQ1MDR9.H56k71emzYDv7j_kVV7Q6yR-Fv-G3aC3yH50R9PAd3i1jkeo3UT56WdSktBbqYarDAF1mlDD_iC8TUzNl3WxHQ");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      setEntity(response.entity);
    })
    .catch((error) => console.log("error", error));
}
