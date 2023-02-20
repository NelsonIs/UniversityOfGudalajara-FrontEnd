import { Link, Route } from "react-router-dom";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { MajorsList } from "../pages/MajorsList";

export function Navbar() {
  return (
    <div>
      <h4>Bienvenido {JSON.parse(localStorage.getItem("sessionUser")).firstName}</h4>
      <ul>
        <li>
        <ProtectedRoutes>
            <Link to="/students">Students</Link>
          </ProtectedRoutes>
        </li>
        <li>
        <ProtectedRoutes>
            <Link to="/campus">Campus</Link>
          </ProtectedRoutes>
        </li>
        <li>
          <ProtectedRoutes>
            <Link to="/majors">Majors</Link>
          </ProtectedRoutes>
        </li>
        <li>
          <Link
            onClick={() => {
              localStorage.removeItem("sessionToken");
              localStorage.removeItem("sessionUser");
            }}
            to="/"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
