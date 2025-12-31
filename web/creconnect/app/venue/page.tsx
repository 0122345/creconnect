"use client";
import React, { useState } from 'react';
import { Heart, Search, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface Venue {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  available: boolean;
  outOfOffice?: boolean;
  featured?: boolean;
}

const venues: Venue[] = [
  {
    id: 1,
    name: "Palm Shade Gardens",
    location: "Kigali/Gasabo",
    price: "3.5M / Per session",
    image: "https://i.pinimg.com/1200x/c9/bf/35/c9bf3517aa25faeabe5d14d1f883944a.jpg",
    available: true,
    featured: true
  },
  {
    id: 2,
    name: "Event Paradise",
    location: "Kigali/Kicukiro",
    price: "4.2M / Per session",
    image: "https://i.pinimg.com/1200x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg",
    available: true,
    featured: true
  },
  {
    id: 3,
    name: "Royal Gardens",
    location: "Kigali/Nyarugenge",
    price: "5.0M / Per session",
    image: "https://i.pinimg.com/736x/f8/47/bd/f847bdb3e9eb135fb2e6818bbd3f136e.jpg",
    available: false,
    featured: true
  }
];

const DiscoverVenuesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (venueId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(venueId)) {
      newFavorites.delete(venueId);
    } else {
      newFavorites.add(venueId);
    }
    setFavorites(newFavorites);
  };

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-xl font-bold text-gray-900 cursor-pointer">
                  Hello 👋, Discover Venues
                </h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/studio">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                  <span className="mr-2">⊙</span>
                  Explore Studios
                </button>
              </Link>
              <Link href="/auth">
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg">
                  Create your space
                </button>
              </Link>
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

      {/* Venue Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <Link key={venue.id} href={`/venue/${venue.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer">
                <div className="relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(venue.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                  >
                    <Heart
                      size={16}
                      className={favorites.has(venue.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                    />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {venue.price}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{venue.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {venue.location}
                  </div>
                  
                  <div className="flex items-center">
                    {venue.available ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Available now
                      </span>
                    ) : (
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                        Busy | Next session 12pm
                      </span>
                    )}
                    
                    {venue.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full ml-2">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverVenuesPage;