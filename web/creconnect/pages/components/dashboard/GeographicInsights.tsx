type Region = {
  name: string;
  users: number;
  revenue: number;
  changePct: number; // 0.23 -> 23%
  progress: number; // 0..1
};

const regions: Region[] = [
  { name: "Gasabo", users: 342, revenue: 6300, changePct: 0.23, progress: 1.0 },
  { name: "Kicukiro", users: 230, revenue: 3000, changePct: 0.18, progress: 0.7 },
  { name: "Nyarug..", users: 144, revenue: 2345, changePct: 0.08, progress: 0.55 },
  { name: "Kampal..", users: 90, revenue: 345, changePct: 0.02, progress: 0.35 },
];

function Bar({ value }: { value: number }) {
  return (
    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
      <div
        className="h-full rounded-full bg-indigo-600"
        style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }}
      />
    </div>
  );
}

export default function GeographicInsights() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        <span>🌐</span> Geographic Insights
      </h2>

      <div className="space-y-4">
        {regions.map((r) => (
          <div key={r.name} className="space-y-1">
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <p className="font-medium">{r.name}</p>
                <span className="text-xs text-gray-500">{r.users} users</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5">
                  +{Math.round(r.changePct * 100)}%
                </span>
                <span className="text-sm font-semibold">${r.revenue.toLocaleString()}</span>
              </div>
            </div>
            <Bar value={r.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}
