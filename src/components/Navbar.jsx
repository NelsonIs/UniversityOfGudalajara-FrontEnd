import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/campus">Campus</NavLink>
        </li>
        <li>
          <NavLink to="/majors">Majors</NavLink>
        </li>
      </ul>
    </div>
  );
}