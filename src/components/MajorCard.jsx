import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

export function MajorCard({ major }) {
  return (
    <div className="grid bg-slate-600 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize mb-2">{major.name}</h3>
      <p className="text-gray-900 text-xs font-bold">Duration</p>
      <p className="text-gray-300 ml-3"> {major.numOfSemesters} Semesters</p>
      <p className="text-gray-900 text-xs font-bold">Area</p>
      <p className="text-gray-300 ml-3">{major.area}</p>
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
