type Item = {
  label: string;
  sub?: string;
  onClick?: () => void;
  icon?: string;
};

const items: Item[] = [
  { label: "Content Moderation", sub: "", icon: "🛡️" },
  { label: "Payment Management", sub: "", icon: "💳" },
  { label: "User Verification", sub: "", icon: "✅" },
  { label: "Platform Settings", sub: "", icon: "⚙️" },
];

export function PlatformManagement() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Platform Management</h2>

      <div className="space-y-3">
        {items.map((it) => (
          <button
            key={it.label}
            onClick={it.onClick}
            className="w-full text-left rounded-xl border border-gray-200 p-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 grid place-items-center rounded-xl bg-gray-100">
                <span className="text-lg">{it.icon}</span>
              </div>
              <div>
                <p className="font-medium">{it.label}</p>
                {it.sub && <p className="text-xs text-gray-500">{it.sub}</p>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
