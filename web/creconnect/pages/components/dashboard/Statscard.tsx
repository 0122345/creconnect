type Props = {
  title: string;
  value: string;
  icon?: string;
};

export default function StatsCard({ title, value, icon }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
      <span className="text-2xl">{icon}</span>
    </div>
  );
}
