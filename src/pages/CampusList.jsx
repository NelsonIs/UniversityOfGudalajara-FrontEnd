import { useContext } from "react";
import { DBContext } from "../contexts/DBContext";
import { CampusCard } from "../components/CampusCard";

export function CampusList() {
  const { campus } = useContext(DBContext);

  return (
    <>
      <h1 className="text-red-700 text-3xl font-bold mb-2">Campus List</h1>
      <div className="grid grid-cols-3 gap-2">
        {campus.map((campus) => (
          <CampusCard key={campus.campusId} campus={campus} />
        ))}
      </div>
    </>
  );
}
