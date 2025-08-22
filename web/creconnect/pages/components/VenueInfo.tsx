import { MapPin } from "lucide-react";

export default function VenueInfo() {
  return (
    <section className="px-6 space-y-3">
      <h2 className="text-2xl font-semibold">Palm Shade Gardens</h2>
      <div className="flex gap-1 text-green-600 text-xl">★★★★★</div>
      <div className="flex items-center gap-2 text-gray-500">
        <MapPin size={18} /> Kigali / Gasabo
      </div>
      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Available now
      </span>

      <div className="bg-gradient-to-b from-green-500 to-green-700 text-white p-6 rounded-xl mt-4">
        <h3 className="font-semibold mb-3">About Palm Shade Garden</h3>
        <p className="text-sm leading-relaxed">
          From elegant event spaces to tailored services, our venue is designed
          to turn your moments into memories. Whether it’s a wedding, corporate
          event, birthday, or more, we provide the perfect backdrop.
        </p>
        <ul className="mt-4 text-sm space-y-1">
          <li>✨ Fully equipped spaces</li>
          <li>✨ Friendly on-site staff</li>
          <li>✨ Decoration & setup options</li>
          <li>✨ Catering and sound system on request</li>
        </ul>
      </div>
    </section>
  );
}
