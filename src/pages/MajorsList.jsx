import { useContext } from "react";
import { DBContext } from "../contexts/DBContext";
import { MajorCard } from "../components/MajorCard";

export function MajorsList() {
  const { majors } = useContext(DBContext);

  return (
    <>
      <h1 className="text-red-700 text-3xl font-bold mb-2">Majors List</h1>
      <div className="grid grid-cols-3 gap-2">
        {majors.map((major) => (
          <MajorCard key={major.majorId} major={major} />
        ))}
      </div>
    </>
  );
}