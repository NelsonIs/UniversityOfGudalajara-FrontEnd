import { useState, useEffect } from "react";
import { CampusCard } from "../components/CampusCard";
import { Navbar } from "../components/Navbar";

export function CampusList() {
  const [campus, setCampus] = useState([]);

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
          "getCampuses{" +
            "msg " +
            "entity{" +
              "campusId name abbreviation address" +
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
        setCampus(result.data.getCampuses.entity);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-red-700 text-3xl font-bold mb-2">Campus List</h1>
      <div className="grid grid-cols-3 gap-2">
        {campus.map((campus) => (
          <CampusCard key={campus.campusId} campus={campus} />
        ))}
      </div>
    </>
  );
}
