"use client";
import React, { useState } from 'react';
import { Home, MapPin, Upload } from 'lucide-react';
import Footer from "@/pages/components/Footer";
import Link from 'next/link';

const CreateStudio: React.FC = () => {
  const [studioName, setstudioName] = useState('');
  const [location, setLocation] = useState('');
  const [aboutstudio, setAboutstudio] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload here
      console.log(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload here
      console.log(e.target.files);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            CREATE studio
          </h1>
          <p className="text-gray-500 mb-12">Enter studio details here!</p>

          {/* studio Name */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              studio Name:
            </label>
            <div className="relative">
              <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter studio Name"
                value={studioName}
                onChange={(e) => setstudioName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Location */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              Location:
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter your address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* About studio */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              About studio :
            </label>
            <textarea
              placeholder="Say something about your studio..."
              value={aboutstudio}
              onChange={(e) => setAboutstudio(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Upload Files */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-1">
              Upload files
            </label>
            <p className="text-gray-400 text-sm mb-4">
              Select and upload pictures of your choice
            </p>
            
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".jpg,.jpeg,.png"
                multiple
                onChange={handleFileChange}
              />
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 20 L30 35 L42 35 L42 50 L58 50 L58 35 L70 35 Z M25 60 Q25 70 35 75 Q45 80 50 80 Q55 80 65 75 Q75 70 75 60"
                      fill="none"
                      stroke="#5B51D8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-gray-900 font-medium">
                    Choose A File or Drag & Drop it Here
                  </span>
                </label>
                
                <p className="text-gray-400 text-sm mt-2">
                  Formats : JPEG,PNG,JPG
                </p>
                <p className="text-gray-900 font-semibold text-sm mt-1">
                  20Mbs Max
                </p>
              </div>
            </div>

            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Welcome Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-800 items-center justify-center p-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            WELCOME BACK !
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Please enter all the required details in the<br />
            form to stay updated!
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Link href="/dashboards">Back to dashboard</Link>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
//studio
export default CreateStudio;