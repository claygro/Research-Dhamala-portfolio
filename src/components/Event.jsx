import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const Event = () => {
  // Array of event objects as requested
  const eventData = [
    {
      eventname: "Tech Innovation Summit 2026",
      description:
        "A keynote session discussing the future of full-stack development and real-time application security.",
      photo:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      location: "Kathmandu, Nepal",
    },
    {
      eventname: "MERN Stack Workshop",
      description:
        "An intensive hands-on session focusing on building scalable file management systems and secure APIs.",
      photo:
        "https://images.unsplash.com/photo-1540575861501-7ad058a86930?auto=format&fit=crop&q=80&w=800",
      location: "Siddhi Vinayak Hall",
    },
    {
      eventname: "Cybersecurity & SDLC Meetup",
      description:
        "Connecting with local developers to discuss recent library compromises and defensive coding practices.",
      photo:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      location: "Virtual Conference",
    },
  ];

  return (
    <section
      id="event"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-800"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Latest <span className="text-orange-500">Events</span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
          <p className="text-gray-400 max-w-lg">
            A look back at recent workshops, speaking engagements, and tech
            community gatherings.
          </p>
        </div>
        <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all duration-300 group">
          View All Events{" "}
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="group relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/30 transition-all duration-500 flex flex-col h-full"
          >
            {/* Event Photo with Overlay */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={event.photo}
                alt={event.eventname}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-4 left-4 bg-orange-600/90 backdrop-blur-md text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Event
              </div>
            </div>

            {/* Event Details */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {event.eventname}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {event.description}
              </p>

              <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin size={18} className="mr-2 text-orange-500" />
                  <span>{event.location}</span>
                </div>
                <div className="bg-gray-800/50 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <Calendar size={18} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
