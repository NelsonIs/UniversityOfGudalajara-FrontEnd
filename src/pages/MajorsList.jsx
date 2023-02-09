import { useContext, useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { MajorCard } from "../components/MajorCard";
import { Navbar } from "../components/Navbar";

export function MajorsList() {
  const [majors, setMajors] = useState([]);
  const { token } = useContext(SessionContext);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      localStorage.getItem("sessionToken")
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=AED6D79AF2032336C0CFFF93DAD8F3D2");

    var graphql = JSON.stringify({
      query:
        "query{" +
          "getMajors{" +
            "msg " +
            "entity{" +
              "majorId name numOfSemesters area" +
            "}" +
          "}" +
        "}",
      variables: {},
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    fetch("http://localhost:8080/udg/graphql", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMajors(result.data.getMajors.entity);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-red-700 text-3xl font-bold mb-2">Majors List</h1>
      <div className="grid grid-cols-3 gap-2">
        {majors.map((major) => (
          <MajorCard key={major.majorId} major={major} />
        ))}
      </div>
    </>
  );
}
