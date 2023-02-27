import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

export function StudentCard({ student }) {
  return (
    <div className="grid bg-slate-600 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize mb-2">
        {student.firstName + " " + student.lastName}
      </h3>
      <p className="text-gray-900 text-xs font-bold">ID</p>
      <p className="text-gray-300 ml-3"> {student.studentId}</p>
      <p className="text-gray-900 text-xs font-bold">Email</p>
      <p className="text-gray-300 ml-3">{student.email}</p>
      <p className="text-gray-900 text-xs font-bold">Major</p>
      <p className="text-gray-300 ml-3">{student.major.name}</p>
      <p className="text-gray-900 text-xs font-bold">Campus</p>
      <p className="text-gray-300 ml-3">
        {student.campus.name} ({student.campus.abbreviation})
      </p>
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
