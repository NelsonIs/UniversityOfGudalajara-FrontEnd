import { useState } from "react";

export function StudentForm() {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        placeholder="Insert the ID of the Student"
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        placeholder="Insert the First Name of the Student"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Insert the Last Name of the Student"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="Insert the email of the Student"
        onChange={(e) => setEmail(e.target.value)}
      />
      <ol
        
      />
    </form>
  );
}

export default StudentForm;
