import { useContext } from "react";
import { DBContext } from "../contexts/DBContext";
import { StudentCard } from "./StudentCard";

export function StudentsList() {
  const { students } = useContext(DBContext);

  return (
    <>
      <h1 className="text-red-700 text-3xl font-bold mb-2">Students List</h1>
      <div className="grid grid-cols-3 gap-2">
        {students.map((student) => (
          <StudentCard key={student.studentId} student={student} />
        ))}
      </div>
    </>
  );
}