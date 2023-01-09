export function CampusCard({ campus }) {
    return (
      <div className="bg-slate-600 text-white p-4 rounded-md">
        <h3 className="text-xl font-bold capitalize mb-2">
          {campus.name}
        </h3>
        <p className="text-gray-900 text-xs font-bold">Abbreviation</p>
        <p className="text-gray-300 ml-3">
          {campus.abbreviation}
        </p>
        <p className="text-gray-900 text-xs font-bold">Address</p>
        <p className="text-gray-300 ml-3">
          {campus.address}
        </p>
      </div>
    );
  }