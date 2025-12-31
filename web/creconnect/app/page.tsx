"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin } from 'lucide-react';
import Footer from '@/pages/components/Footer';

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

    

 const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://creconnect-backend.onrender.com';
  const studios: Studio[] = [
    {
      id: 1,
      name: 'GASABO',
      location: 'Gasabo District',
      description: 'Studios in Gasabo are well-equipped and ideal for hosting creative projects and commercial photography.',
      image: 'https://i.pinimg.com/474x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg',
      category: 'studio'
    },
    {
      id: 2,
      name: 'KICUKIRO',
      location: 'Kicukiro District', 
      description: 'Kicukiro has great studios for photography, workshops, perfect for quick and professional events.',
      image: 'https://i.pinimg.com/474x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg',
      category: 'studio'
    },
    {
      id: 3,
      name: 'NYARUGENGE',
      location: 'Nyarugenge District',
      description: 'Studios in Nyarugenge are ideal for photography and video shoots, located right in the city center.',
      image: '/assets/nyarugenge.png',
      category: 'studio'
    }
  ];

  const venues: Studio[] = [
    {
      id: 4,
      name: 'GASABO',
      location: 'Gasabo District',
      description: 'Studios in Gasabo are well-equipped and ideal for hosting creative projects and commercial photography.',
      image: 'https://i.pinimg.com/474x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg',
      category: 'venue'
    },
    {
      id: 5,
      name: 'KICUKIRO',
      location: 'Kicukiro District',
      description: 'Kicukiro has great studios for photography, workshops, perfect for quick and professional events.',
      image: 'https://i.pinimg.com/474x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg',
      category: 'venue'
    },
    {
      id: 6,
      name: 'NYARUGENGE',
      location: 'Nyarugenge District',
      description: 'Studios in Nyarugenge are ideal for photography and video shoots, located right in the city center.',
      image: 'https://i.pinimg.com/474x/a8/6d/e7/a86de7f0124f9a1940b826a85b891ff5.jpg',
      category: 'venue'
    }
  ];

  const studioPartners: Partner[] = [
    { id: 1, name: 'Frame Studio', image: 'https://i.pinimg.com/474x/b9/b0/4c/b9b04c5e3fd47e915313609b7b1df0db.jpg', category: 'studio' },
    { id: 2, name: 'Blackbox', image: 'https://i.pinimg.com/474x/b9/b0/4c/b9b04c5e3fd47e915313609b7b1df0db.jpg', category: 'studio' },
    { id: 3, name: 'Flash Room', image: '/assets/nyarugenge.png', category: 'studio' },
    { id: 4, name: 'Viewfinder', image: 'https://i.pinimg.com/474x/b9/b0/4c/b9b04c5e3fd47e915313609b7b1df0db.jpg', category: 'studio' }
  ];

  const venuePartners: Partner[] = [
    { id: 5, name: 'Next Venue', image: '/assets/nyarugenge.png', category: 'venue' },
    { id: 6, name: 'The Arts Loft', image: 'https://i.pinimg.com/474x/b9/b0/4c/b9b04c5e3fd47e915313609b7b1df0db.jpg', category: 'venue' },
    { id: 7, name: 'Makers Hall', image: 'https://i.pinimg.com/474x/b9/b0/4c/b9b04c5e3fd47e915313609b7b1df0db.jpg', category: 'venue' },
    { id: 8, name: 'Praxis Space', image: 'https://i.pinimg.com/474x/b9/b0/4c/b9b04c5e3fd47e915313609b7b1df0db.jpg', category: 'venue' }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Agathe',
      avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
      text: 'Our clients can rest assured we have professional and creative their about their projects.'
    },
    {
      id: 2,
      name: 'Frank',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      text: 'For this chance, they get will to see great result and get value that corresponds to their projects.'
    },
    {
      id: 3,
      name: 'Daniel',
      avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
      text: 'Sometimes, you just need one item from you and put more money in your business'
    }
  ];

  const handleSearch = (type: 'studio' | 'venue') => {
    console.log(`Searching for ${type} with activity: ${searchActivity}, location: ${searchLocation}`);
  };

  return (
    <div className="h-full bg-white text-black"> 
        {/* Hero Section */}
        <div className="w-dvw h-dvh relative text-center px-6">
          <nav className='absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 text-white font-bold'>     
          <div className="text-2xl font-bold">Creconnect</div>
          <div className="space-x-4">
           <Link href="/auth">
            <button className="border border-white/30 rounded hover:bg-white/10 transition">
              Create your space
            </button>
            </Link>
            <Link href="/auth">
            <button className="bg-white text-black rounded hover:bg-gray-100 transition">
              Login
            </button>
            </Link>
          </div>
        </nav>

           <Image
            src="https://www.shootfactory.co.uk/wp-content/uploads/2019/04/What-is-Studio-Photography.jpg"
            alt="Hero Image"
            fill
            className="object-cover hover:scale-110 transition duration-700"
            />
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
       

      {/* Studio Spaces Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover Top Studio Spaces Across Kigali
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {studios.map((studio) => (
              <Link key={studio.id} href='/studio'>
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
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
              </Link>
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
              <Link key={venue.id} href='/venue'>
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
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
              </Link>
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

      <Footer />
    </div>

  );
};

export default CreativeStudioPage;
