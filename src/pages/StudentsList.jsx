import { useContext, useState, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { StudentCard } from "../components/StudentCard";
import { Navbar } from "../components/Navbar";

export function StudentsList() {
  const [students, setStudents] = useState([]);
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
          "getStudents{" +
            "msg " +
            "entity{" +
              "studentId firstName lastName email major{name} campus{name abbreviation}" +
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
        setStudents(result.data.getStudents.entity);
      })
      .catch((error) => console.log("error", error));

  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-red-700 text-3xl font-bold mb-2">Students List</h1>
      <div className="grid grid-cols-3 gap-2">
        {students.map((student) => (
          <StudentCard key={student.studentId} student={student} />
        ))}
      </div>
    </>
  );
}
