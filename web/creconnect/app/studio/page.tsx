"use client";
import React, { useState } from 'react';
import { Heart, Search, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface Studio {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  available: boolean;
  outOfOffice?: boolean;
  featured?: boolean;
}

const studios: Studio[] = [
  {
    id: 1,
    name: "Kigali Framehouse",
    location: "Kigali/Gasabo",
    price: "50Rwf / Per session",
    image: "https://i.pinimg.com/1200x/c9/bf/35/c9bf3517aa25faeabe5d14d1f883944a.jpg",
    available: true,
    featured: true
  },
  {
    id: 2,
    name: "Vision Hub",
    location: "Kigali/Kicukiro",
    price: "70Rwf / Per session",
    image: "https://i.pinimg.com/1200x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg",
    available: true,
    featured: true
  },
  {
    id: 3,
    name: "Umucyo Studio",
    location: "Kigali/Nyarugenge",
    price: "65Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: false,
    featured: true
  },
  {
    id: 4,
    name: "Apex Creative Hub",
    location: "Kigali/Gasabo",
    price: "45Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: false,
    outOfOffice: true
  },
  {
    id: 5,
    name: "PrimeView",
    location: "Kigali/Gasabo",
    price: "55Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: true,
    featured: true
  },
  {
    id: 6,
    name: "Pixel Portraits",
    location: "Kigali/Gasabo",
    price: "50Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: true,
    featured: true
  },
  {
    id: 7,
    name: "Pixel Portraits",
    location: "Kigali/Nyarugenge",
    price: "65Rwf / Per session",
    image: "https://i.pinimg.com/1200x/c9/bf/35/c9bf3517aa25faeabe5d14d1f883944a.jpg",
    available: true,
    featured: true
  },
  {
    id: 8,
    name: "The Concept Lab",
    location: "Kigali/Gasabo",
    price: "55Rwf / Per session",
    image: "https://i.pinimg.com/1200x/c9/bf/35/c9bf3517aa25faeabe5d14d1f883944a.jpg",
    available: true,
    featured: true
  },
  {
    id: 9,
    name: "Indabo Studio",
    location: "Kigali/Kicukiro",
    price: "65Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: false,
    outOfOffice: true
  },
  {
    id: 10,
    name: "LightCraft Studio",
    location: "Kigali/Kicukiro",
    price: "60Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: true,
    featured: true
  },
  {
    id: 11,
    name: "Ganza Studio",
    location: "Kigali/Gasabo",
    price: "75Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: true,
    featured: true
  },
  {
    id: 12,
    name: "Moodbox Creative",
    location: "Kigali/Gasabo",
    price: "80Rwf / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: false,
    featured: true
  }
];

const DiscoverStudiosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (studioId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(studioId)) {
      newFavorites.delete(studioId);
    } else {
      newFavorites.add(studioId);
    }
    setFavorites(newFavorites);
  };

  const filteredStudios = studios.filter(studio =>
    studio.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Hello 👋, Discover Studios
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                <span className="mr-2">⊙</span>
                Explore
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg">
                Create your space
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-black text-white rounded-r-lg">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Studio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudios.map((studio) => (
            <div key={studio.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="relative">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(studio.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <Heart
                    size={16}
                    className={favorites.has(studio.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {studio.price}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{studio.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  {studio.location}
                </div>
                
                <div className="flex items-center">
                  {studio.outOfOffice ? (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      Out of office
                    </span>
                  ) : studio.available ? (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Available now
                    </span>
                  ) : (
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      Busy | Next session 12pm
                    </span>
                  )}
                  
                  {studio.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full ml-2">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Venues</a></li>
                <li><a href="#" className="hover:text-white">Studios</a></li>
                <li><a href="#" className="hover:text-white">Booking</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  123 Street, Kigali Rwanda
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +250 701 826054
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@preconnect.com
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-3 mt-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Facebook size={16} />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Twitter size={16} />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Why choose Us? */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Why choose Us?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Simple & Fast Booking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Trusted & Verified Listings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Real People, Real Support
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Dolor amet qui placeat amet elit vitae dolore voluptate elit est
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300">© PreConnect - All Right Reserved 2025</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                <a href="#" className="text-gray-300 hover:text-white">Cookies</a>
                <a href="#" className="text-gray-300 hover:text-white">Help</a>
                <a href="#" className="text-gray-300 hover:text-white">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiscoverStudiosPage;