import { Link, Navigate } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/campus">Campus</Link>
        </li>
        <li>
          <Link to="/majors">Majors</Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              if (localStorage.getItem("sessionToken")) {
                localStorage.removeItem("sessionToken");
              }
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
