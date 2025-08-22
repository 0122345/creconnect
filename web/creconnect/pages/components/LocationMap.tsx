export default function LocationMap() {
  return (
    <section className="px-6 mt-8">
      <h3 className="text-lg font-semibold mb-3">Location</h3>
      <div className="h-96 w-full rounded-lg overflow-hidden">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}
