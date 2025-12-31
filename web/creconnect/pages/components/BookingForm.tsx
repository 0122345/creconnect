"use client";
import Link from "next/link";
import { useState } from "react";

export default function BookingForm() {
  const [people, setPeople] = useState(0);

  return (
    <aside className="shadow-lg p-6 rounded-xl bg-white w-full md:w-80">
      <p className="text-xl font-semibold">3.5M / Per Session</p>
      <p className="text-sm text-gray-500">Book your Session Now</p>

      <form className="mt-4 flex flex-col gap-3">
        <input type="date" className="border rounded-lg px-3 py-2" />
        <input
          type="number"
          max={20}
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          placeholder="Max 20 people"
          className="border rounded-lg px-3 py-2"
        />
        <div className="flex gap-2">
          <input type="time" className="border rounded-lg px-3 py-2 w-full" />
          <input type="time" className="border rounded-lg px-3 py-2 w-full" />
        </div>
        <select className="border rounded-lg px-3 py-2">
          <option>Choose type of activity</option>
          <option>Wedding</option>
          <option>Corporate</option>
          <option>Birthday</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700"
        >
          <Link href="/dashboards" className="block w-full h-full">
            Request to book
          </Link>
        </button>
        <p className="text-xs text-gray-400 text-center">
          You won’t be charged yet
        </p>
      </form>
    </aside>
  );
}
