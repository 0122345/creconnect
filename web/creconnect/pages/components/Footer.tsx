import Link from "next/link";

export default function Footer() {
  const getYear = () => {
    let year = new Date();
    return year.getFullYear();
    console.log(year)
  }
 getYear();

  return (
    <footer className="bg-black text-gray-300 mt-12 p-8">
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>Venues</li>
            <li>Studios</li>
            <li>Booking</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>123 Street, Kigali, Rwanda</p>
          <p>+250 791636954</p>
          <p>info@creconnect.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Why choose us?</h4>
          <ul className="space-y-1 text-sm">
            <li>✅ Simple & Fast Booking</li>
            <li>✅ Trusted & Verified Listings</li>
            <li>✅ Real People, Real Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg w-full text-black"
            />
            <button className="bg-green-600 px-4 py-2 rounded-lg text-white">
             <Link href="/auth">Signup</Link>  
            </button>
          </form>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-6 text-center">
        <p>&copy; Creconnect - All Right Reserved {getYear()}</p>
      </div>
    </footer>
  );
}
