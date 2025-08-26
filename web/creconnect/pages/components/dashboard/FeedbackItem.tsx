type Props = {
  name: string;
  time: string;
  feedback: string;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const [a, b] = [parts[0]?.[0], parts[1]?.[0]];
  return (a || "") + (b || "");
}

export function FeedbackItem({ name, time, feedback }: Props) {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">
        {initials(name)}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{name}</p>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600">{feedback}</p>
      </div>
    </div>
  );
}
