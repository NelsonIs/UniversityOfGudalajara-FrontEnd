import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

export function CampusCard({ campus }) {
  return (
    <div className="grid bg-slate-600 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize mb-2">{campus.name}</h3>
      <p className="text-gray-900 text-xs font-bold">Abbreviation</p>
      <p className="text-gray-300 ml-3">{campus.abbreviation}</p>
      <p className="text-gray-900 text-xs font-bold">Address</p>
      <p className="text-gray-300 ml-3">{campus.address}</p>
      <div className="flex flex-row-reverse">
        <div className="flex justify-center bg-red-700 w-1/4 mt-3 text-center rounded-md ml-1 cursor-pointer">
          <DeleteButton />
        </div>
        <div className="flex justify-center bg-blue-400 w-1/4 mt-3 text-center rounded-md ml-1 cursor-pointer">
          <EditButton />
        </div>
      </div>
    </div>
  );
}
