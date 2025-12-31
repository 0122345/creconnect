"use client";

type Category = {
     name: string;
     bookings: number;
     revenue: number;
     changePct: number;
     progress: number;
}


const data: Category[] = [
     {name: "Photography", bookings: 120, revenue: 12300, changePct: 0.25, progress: 1.0},
     { name: "Wedding", bookings: 89, revenue: 12300, changePct: 0.18, progress: 0.86 },
     { name: "Events", bookings: 45, revenue: 5400, changePct: 0.32, progress: 0.75 },
     { name: "Art Spaces", bookings: 145, revenue: 3000, changePct: 0.08, progress: 0.42 },
];

function ProgressBar({value}: {value: number}) {
     return (
          <div className="w-full rounded-full bg-gray-200 overflow-hidden">
               <div
               className="h-full bg-indigo-600 rounded-full"
               style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }}
               />
          </div>
     );
}


export default function CategoryPerformance() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        <span className="inline-block">📊</span> Category Performance
      </h2>

      <div className="space-y-4">
        {data.map((c) => (
          <div key={c.name} className="space-y-1">
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <p className="font-medium">{c.name}</p>
                <span className="text-xs text-gray-500">{c.bookings} Bookings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5">
                  +{Math.round(c.changePct * 100)}%
                </span>
                <span className="text-sm font-semibold">${c.revenue.toLocaleString()}</span>
              </div>
            </div>
            <ProgressBar value={c.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}