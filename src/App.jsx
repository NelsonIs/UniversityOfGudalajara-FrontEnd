import { StudentsList } from "./components/StudentsList";
import { CampusList } from "./components/CampusList";
import { MajorsList } from "./components/MajorsList";
import { LoginForm } from "./components/LoginForm";

export function App() {
  return (
    <main className="bg-neutral-700 h-screen">
      <div className="container mx-auto p-10">
        <LoginForm />
        <StudentsList />
        <CampusList />
        <MajorsList />
      </div>
    </main>
  );
}
