

import React from 'react'

interface VenueOrStudioProps {
     type: "venue" | "studio";
     switchType: () => void;
}


export default function VenueOrStudio() {

     const card = [
          {
               title: "STUDIOS",
               img: "./assets/studios.png",
               url: "#pages/studios",},
          {
               title: "VENUES",
               img: "./assets/venues.png",
               url: "#pages/venues",},
     ];
  return (
    <main>
      <div className="">
          {card.map((item, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg w-full max-w-md">
                 <img src={item.img} alt={item.title} className="w-full h-auto mb-4"/>
                    <a href={item.url} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                           <p className="text-xl font-semibold mb-2">{item.title}</p>
                    </a>
               </div>
          ))}
      </div>
    </main>
  )
}
