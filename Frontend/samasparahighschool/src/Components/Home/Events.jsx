import React, { useState } from "react";
import Event1 from "../Assets/Event/Event1.jpg";
import Event2 from "../Assets/Event/Event2.jpg";
const Events = () => {
  const [showDescription, setShowDescription] = useState(false);

  const eventsData = [
    {
      imageUrl: Event1,
      description: "Event 1 description",
    },
    {
      imageUrl: Event2,
      description: "Event 2 description",
    },
  ];

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={toggleDescription}
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
          >
            <img
              src={event.imageUrl}
              alt={`Event ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            {showDescription && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <p>{event.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
