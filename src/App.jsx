import { StudentsList } from "./pages/StudentsList";
import { CampusList } from "./pages/CampusList";
import { MajorsList } from "./pages/MajorsList";
import { LoginForm } from "./pages/LoginForm";
import { ProtectedRoutes } from "./pages/ProtectedRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div className="bg-slate-400">
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/students" element={<StudentsList />} />
          <Route path="/campus" element={<CampusList />} />
          <Route path="/majors" element={<MajorsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
