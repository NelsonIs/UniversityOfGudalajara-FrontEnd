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
  myHeaders.append("Authorization", token);
  myHeaders.append("Cookie", "JSESSIONID=F663B385B8E99FC152F311508FBDDF09");

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
