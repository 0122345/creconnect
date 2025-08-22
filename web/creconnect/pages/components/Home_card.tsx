
import React from 'react'

export default function Home_card() {
   
     const card = [
          {
               title: "Location",
               description: "Connect with your community and find events near you.",
               
          },
          {
               title: "Type of space",
               description: "Discover local events and activities happening around you.",
               
          },
          {
               title: "Activity",
               description: "Become a part of our vibrant community and share your experiences.",
                
          },
          {
               title: "Date & time",
               description: "Subscribe to our newsletter for the latest updates and events.",
               
          },
          {
               title: "Search",
               description: "Subscribe to our newsletter for the latest updates and events.",
               
          },
     ];



  return (
    <main>
          <div className="flex flex-row items-center justify-center p-4 bg-black rounded-lg shadow-md text-white">
          {card.map((item, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>    
            </div>
          ))}
           </div>
    </main>
  )
}
