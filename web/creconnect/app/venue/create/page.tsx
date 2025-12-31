import Navbar from "@/pages/components/Booking_nav";
import BookingForm from "@/pages/components/BookingForm";
import Footer from "@/pages/components/Footer";
import ImageGallery from "@/pages/components/ImageGallery";
import LocationMap from "@/pages/components/LocationMap";
import VenueInfo from "@/pages/components/VenueInfo";
import Link from "next/link";
export default function VenuePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <ImageGallery />

        <div className="grid md:grid-cols-3 gap-8 mt-6 px-6">
          <div className="md:col-span-2">
            <VenueInfo />
          </div>
          <BookingForm />
        </div>

        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
