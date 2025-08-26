type Performer = {
  rank: number;
  name: string;
  kind: "Studio" | "Venue";
  rating: number;
  revenue: number;
  bookings: number;
};

const top: Performer[] = [
  { rank: 1, name: "Light craft studio", kind: "Studio", rating: 4.9, revenue: 5400, bookings: 28 },
  { rank: 2, name: "Modern Art Gallery", kind: "Venue", rating: 4.6, revenue: 3200, bookings: 22 },
  { rank: 3, name: "Ishema Venue", kind: "Venue", rating: 4.3, revenue: 3120, bookings: 21 },
  { rank: 4, name: "Umoja studio", kind: "Studio", rating: 4.9, revenue: 2000, bookings: 30 },
];

export function TopPerformers() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        <span>🧩</span> Top performers this month
      </h2>

      <div className="space-y-3">
        {top.map((p) => (
          <div
            key={p.rank}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-3 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white grid place-items-center text-sm font-semibold">
                {p.rank}
              </div>
              <div>
                <p className="font-medium">{p.name}</p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="px-2 py-0.5 rounded-full bg-gray-100">{p.kind}</span>
                  <span>⭐ {p.rating}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">${p.revenue.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{p.bookings} bookings</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
