import Image from "next/image";

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="col-span-2 relative h-96">
        <Image src="/assets/venue-main.png" alt="Main Venue" fill className="object-cover rounded-xl" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative h-44">
          <Image src="/assets/venue-1.png" alt="Venue 1" fill className="object-cover rounded-xl" />
        </div>
        <div className="relative h-44">
          <Image src="/assets/venue-2.png" alt="Venue 2" fill className="object-cover rounded-xl" />
          <button className="absolute bottom-2 right-2 bg-green-600 text-white px-3 py-1 rounded-md text-sm">
            See all 30 photos
          </button>
        </div>
      </div>
    </div>
  );
}
