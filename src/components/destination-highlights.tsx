import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Mediterranean Jewels",
    region: "Europe",
    ports: ["Barcelona", "Monaco", "Rome", "Santorini"],
    duration: "7 Days",
    highlight: "Ancient ruins meet azure waters",
    image: "/mediterranean.jpg",
    position: { top: "41%", left: "50%" },
  },
  {
    id: 2,
    name: "Caribbean Paradise",
    region: "Caribbean",
    ports: ["Barbados", "St. Lucia", "Aruba", "Cozumel"],
    duration: "10 Days",
    highlight: "Pristine beaches and vibrant culture",
    image: "/caribbean.jpg",
    position: { top: "45%", left: "25%" },
  },
  {
    id: 3,
    name: "Northern Lights Expedition",
    region: "Arctic",
    ports: ["Reykjavik", "Tromsø", "Bergen", "Ålesund"],
    duration: "12 Days",
    highlight: "Aurora borealis and dramatic fjords",
    image: "/northern-lights.jpg",
    position: { top: "20%", left: "50%" },
  },
  {
    id: 4,
    name: "Asian Discovery",
    region: "Asia",
    ports: ["Singapore", "Hong Kong", "Kyoto", "Shanghai"],
    duration: "14 Days",
    highlight: "Ancient traditions meet modern marvels",
    image: "/asian-temple.jpg",
    position: { top: "40%", left: "75%" },
  },
  {
    id: 5,
    name: "Alaskan Wilderness",
    region: "Alaska",
    ports: ["Juneau", "Ketchikan", "Skagway", "Glacier Bay"],
    duration: "8 Days",
    highlight: "Glaciers, wildlife, and untamed beauty",
    image: "/alaska.jpg",
    position: { top: "18%", left: "13%" },
  },
];

export function DestinationHighlights() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(
    null
  );
  const [hoveredDestination, setHoveredDestination] = useState<number | null>(
    null
  );

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Discover Extraordinary Destinations
          </h2>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            Embark on carefully curated voyages to the world's most captivating
            destinations, where each port offers unique cultural treasures and
            breathtaking natural wonders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 min-[430px]:gap-12 items-start">
          {/* Interactive World Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 aspect-video relative overflow-hidden">
              {/* Simplified World Map Background */}
              <div className="absolute inset-0 opacity-90">
                <img
                  src="world-map.png"
                  alt="world map"
                  className="w-full h-full"
                />
              </div>

              {/* Destination Markers */}
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    top: destination.position.top,
                    left: destination.position.left,
                  }}
                  onMouseEnter={() => setHoveredDestination(destination.id)}
                  onMouseLeave={() => setHoveredDestination(null)}
                  onClick={() => setSelectedDestination(destination.id)}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      hoveredDestination === destination.id ||
                      selectedDestination === destination.id
                        ? "bg-coral scale-150 shadow-lg"
                        : "bg-navy hover:bg-coral hover:scale-125"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping bg-coral opacity-30"></div>
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
                      hoveredDestination === destination.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-navy text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                      {destination.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-navy"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {/* Quick Route Overview */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-[430px]:hidden">
              {destinations.slice(0, 4).map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => setSelectedDestination(destination.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedDestination === destination.id
                      ? "border-coral bg-coral/5"
                      : "border-gray-200 hover:border-coral/50 bg-white"
                  }`}
                >
                  <div className="font-semibold text-navy text-sm">
                    {destination.name}
                  </div>
                  <div className="text-xs text-navy/60 mt-1">
                    {destination.duration} • {destination.ports.length} Ports
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Destination Details */}
          <div className="lg:mt-6">
            {selectedDestination ? (
              <Card className="border-0 shadow-xl bg-white pt-0">
                <CardContent className="p-0">
                  {(() => {
                    const destination = destinations.find(
                      (d) => d.id === selectedDestination
                    )!;
                    return (
                      <>
                        <div className="relative h-64 overflow-hidden rounded-t-lg">
                          <img
                            src={destination.image || "/placeholder.svg"}
                            alt={destination.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-6 text-white">
                            <div className="text-sm font-medium text-gold mb-1">
                              {destination.duration}
                            </div>
                            <h3 className="font-serif text-2xl font-bold">
                              {destination.name}
                            </h3>
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="text-lg text-navy/80 mb-4 italic">
                            "{destination.highlight}"
                          </p>

                          <div className="mb-4">
                            <h4 className="font-semibold text-navy mb-2">
                              Featured Ports:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {destination.ports.map((port, index) => (
                                <span
                                  key={index}
                                  className="bg-seafoam/20 text-navy px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {port}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button className="w-full bg-coral hover:bg-coral/90 text-white py-3 rounded-lg font-medium transition-colors">
                            Explore This Route
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                  Select a Destination
                </h3>
                <p className="text-navy/70">
                  Click on any marker to explore our luxury cruise routes and
                  discover the unique experiences awaiting you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
