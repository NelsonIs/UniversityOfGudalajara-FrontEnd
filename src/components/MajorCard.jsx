export function MajorCard({ major }) {
  return (
    <div className="bg-slate-600 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize mb-2">{major.name}</h3>
      <p className="text-gray-900 text-xs font-bold">Duration</p>
      <p className="text-gray-300 ml-3"> {major.numOfSemesters} Semesters</p>
      <p className="text-gray-900 text-xs font-bold">Area</p>
      <p className="text-gray-300 ml-3">{major.area}</p>
    </div>
  );
}