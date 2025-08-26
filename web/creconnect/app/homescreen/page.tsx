"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin } from 'lucide-react';
//page
interface Studio {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  category: 'studio' | 'venue';
}

interface Partner {
  id: number;
  name: string;
  image: string;
  category: 'studio' | 'venue';
}

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
}

const CreativeStudioPage: React.FC = () => {
  const [searchActivity, setSearchActivity] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const studios: Studio[] = [
    {
      id: 1,
      name: 'GASABO',
      location: 'Gasabo District',
      description: 'Studios in Gasabo are well-equipped and ideal for hosting creative projects and commercial photography.',
      image: '/api/placeholder/300/200',
      category: 'studio'
    },
    {
      id: 2,
      name: 'KICUKIRO',
      location: 'Kicukiro District', 
      description: 'Kicukiro has great studios for photography, workshops, perfect for quick and professional events.',
      image: '/api/placeholder/300/200',
      category: 'studio'
    },
    {
      id: 3,
      name: 'NYARUGENGE',
      location: 'Nyarugenge District',
      description: 'Studios in Nyarugenge are ideal for photography and video shoots, located right in the city center.',
      image: '/api/placeholder/300/200',
      category: 'studio'
    }
  ];

  const venues: Studio[] = [
    {
      id: 4,
      name: 'GASABO',
      location: 'Gasabo District',
      description: 'Studios in Gasabo are well-equipped and ideal for hosting creative projects and commercial photography.',
      image: '/api/placeholder/300/200',
      category: 'venue'
    },
    {
      id: 5,
      name: 'KICUKIRO',
      location: 'Kicukiro District',
      description: 'Kicukiro has great studios for photography, workshops, perfect for quick and professional events.',
      image: '/api/placeholder/300/200',
      category: 'venue'
    },
    {
      id: 6,
      name: 'NYARUGENGE',
      location: 'Nyarugenge District',
      description: 'Studios in Nyarugenge are ideal for photography and video shoots, located right in the city center.',
      image: '/api/placeholder/300/200',
      category: 'venue'
    }
  ];

  const studioPartners: Partner[] = [
    { id: 1, name: 'Frame Studio', image: '/api/placeholder/120/120', category: 'studio' },
    { id: 2, name: 'Blackbox', image: '/api/placeholder/120/120', category: 'studio' },
    { id: 3, name: 'Flash Room', image: '/api/placeholder/120/120', category: 'studio' },
    { id: 4, name: 'Viewfinder', image: '/api/placeholder/120/120', category: 'studio' }
  ];

  const venuePartners: Partner[] = [
    { id: 5, name: 'Next Venue', image: '/api/placeholder/120/120', category: 'venue' },
    { id: 6, name: 'The Arts Loft', image: '/api/placeholder/120/120', category: 'venue' },
    { id: 7, name: 'Makers Hall', image: '/api/placeholder/120/120', category: 'venue' },
    { id: 8, name: 'Praxis Space', image: '/api/placeholder/120/120', category: 'venue' }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Agathe',
      avatar: '/api/placeholder/50/50',
      text: 'Our clients can rest assured we have professional and creative their about their projects.'
    },
    {
      id: 2,
      name: 'Frank',
      avatar: '/api/placeholder/50/50',
      text: 'For this chance, they get will to see great result and get value that corresponds to their projects.'
    },
    {
      id: 3,
      name: 'Daniel',
      avatar: '/api/placeholder/50/50',
      text: 'Sometimes, you just need one item from you and put more money in your business'
    }
  ];

  const handleSearch = (type: 'studio' | 'venue') => {
    console.log(`Searching for ${type} with activity: ${searchActivity}, location: ${searchLocation}`);
  };

  return (
    <div className="h-full bg-white">
      {/* Header */}
      <header className="bg-black/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/800')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold">Creconnect</div>
          <div className="space-x-4">
            <button className="px-4 py-2 border border-white/30 rounded hover:bg-white/10 transition">
              Create your space
            </button>
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition">
              Login
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 text-center py-24 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            DISCOVER CREATIVE STUDIOS<br />
            AND SPACES
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-wrap gap-2">
            <select className="px-4 py-3 bg-black/50 text-white rounded flex-1 min-w-[120px] border border-white/20">
              <option>Location</option>
              <option>Gasabo</option>
              <option>Kicukiro</option>
              <option>Nyarugenge</option>
            </select>
            <select className="px-4 py-3 bg-black/50 text-white rounded flex-1 min-w-[120px] border border-white/20">
              <option>Type of space</option>
              <option>Photo Studio</option>
              <option>Event Space</option>
              <option>Workshop</option>
            </select>
            <select className="px-4 py-3 bg-black/50 text-white rounded flex-1 min-w-[120px] border border-white/20">
              <option>Activity</option>
              <option>Photography</option>
              <option>Video Production</option>
              <option>Events</option>
            </select>
            <select className="px-4 py-3 bg-black/50 text-white rounded flex-1 min-w-[120px] border border-white/20">
              <option>Date & Time</option>
            </select>
            <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition">
              SEARCH
            </button>
          </div>
        </div>
      </header>

      {/* Studio Spaces Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover Top Studio Spaces Across Kigali
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {studios.map((studio) => (
              <div key={studio.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  <Image
                    src={studio.image}
                    alt={studio.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{studio.name}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {studio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Venues Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover Top Creative Venues Across Kigali
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div key={venue.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {venue.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Forms Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Photo Studio Search */}
          <div className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Find photo studios near me</h3>
            <p className="text-gray-300 mb-6">
              Discover creative spaces for your ideal location: natural lighting, strobing, reflector, softbox, 
              lighting, camera, softly, professional, and more...
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your activity"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400"
                  value={searchActivity}
                  onChange={(e) => setSearchActivity(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Choose your Location City"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              
              <button
                onClick={() => handleSearch('studio')}
                className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition"
              >
                SEARCH
              </button>
            </div>
          </div>

          {/* Creative Venue Search */}
          <div className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Find creative venue near me</h3>
            <p className="text-gray-300 mb-6">
              Discover creative venue for your ideal location: meeting, workshop, exhibition, 
              recruiting, company celebration, and more...
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your activity"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400"
                  value={searchActivity}
                  onChange={(e) => setSearchActivity(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Choose your Location City"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              
              <button
                onClick={() => handleSearch('venue')}
                className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Studio Partners */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">Book Studio</p>
              <h3 className="text-2xl font-bold">Our Top Studio partners</h3>
            </div>
            
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {studioPartners.map((partner) => (
                <div key={partner.id} className="text-center group cursor-pointer">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 group-hover:scale-105 transition-transform">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Partners */}
          <div>
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">Book Venues</p>
              <h3 className="text-2xl font-bold">Our Top Venue Partners</h3>
            </div>
            
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {venuePartners.map((partner) => (
                <div key={partner.id} className="text-center group cursor-pointer">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200 group-hover:scale-105 transition-transform">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2">Testimonial</p>
            <h3 className="text-3xl font-bold">Our Clients Say!!!</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {'★★★★★'.split('').map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Press & Media</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Help & Support</li>
              <li>Trust & Safety</li>
              <li>Quality Standards</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Why choose Us?</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Expert from Reading</li>
              <li>Book Online</li>
              <li>Pay Online</li>
              <li>Easy access from your browser</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe and get special offer</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l bg-gray-800 border border-gray-700 text-white"
              />
              <button className="px-4 py-2 bg-yellow-500 text-black rounded-r hover:bg-yellow-400 transition">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; Creconnect - All Right Reserved 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativeStudioPage;
