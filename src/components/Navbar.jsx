import { Link, Route } from "react-router-dom";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { MajorsList } from "../pages/MajorsList";

export function Navbar() {
  return (
    <div className="flex basis-1/5 bg-slate-600 p-4">
      <p className="text-white text-xl m-3">
        Bienvenido {JSON.parse(localStorage.getItem("sessionUser")).firstName}
      </p>
      <div className="basis-4/5">
        <ul className="flex flex-row-reverse">
          <li className="hover:bg-red-600 p-3 rounded-md text-lg fond-bold text-white">
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
          <li className="hover:bg-slate-400 p-3 rounded-md text-lg fond-bold text-white hover:text-black">
            <ProtectedRoutes>
              <Link to="/majors">Majors</Link>
            </ProtectedRoutes>
          </li>
          <li className="hover:bg-slate-400 p-3 rounded-md text-lg fond-bold text-white hover:text-black">
            <ProtectedRoutes>
              <Link to="/campus">Campus</Link>
            </ProtectedRoutes>
          </li>
          <li className="hover:bg-slate-400 p-3 rounded-md text-lg fond-bold text-white hover:text-black">
            <ProtectedRoutes>
              <Link to="/students">Students</Link>
            </ProtectedRoutes>
          </li>
        </ul>
      </div>
    </div>
  );
}
