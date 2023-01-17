import { StudentsList } from "./pages/StudentsList";
import { CampusList } from "./pages/CampusList";
import { MajorsList } from "./pages/MajorsList";
import { LoginForm } from "./pages/LoginForm";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/campus" element={<CampusList />} />
        <Route path="/majors" element={<MajorsList />} />
      </Routes>
    </BrowserRouter>
  );
}
