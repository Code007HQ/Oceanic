import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: "culinary",
    title: "Culinary Excellence",
    subtitle: "World-Class Dining Venues",
    description:
      "Savor extraordinary cuisine crafted by celebrity chefs and culinary masters from around the world.",
    features: [
      "Michelin-starred chef partnerships",
      "Farm-to-table fresh ingredients",
      "Wine pairings from exclusive vineyards",
      "Private chef experiences available",
    ],
    image: "/culinary.jpg",
    color: "coral",
  },
  {
    id: "wellness",
    title: "Wellness & Relaxation",
    subtitle: "Spa Services & Meditation Spaces",
    description:
      "Rejuvenate your mind, body, and spirit with our comprehensive wellness and relaxation offerings.",
    features: [
      "Full-service luxury spa treatments",
      "State-of-the-art fitness centers",
      "Yoga and meditation pavilions",
      "Thermal suites and relaxation pools",
    ],
    image: "/wellness.jpg",
    color: "seafoam",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    subtitle: "Live Shows & Cultural Performances",
    description:
      "Experience world-class entertainment from Broadway-style shows to intimate cultural performances.",
    features: [
      "Broadway-caliber theatrical productions",
      "Live music and dance performances",
      "Cultural shows featuring local artists",
      "Exclusive nightlife venues",
    ],
    image: "/theatre.jpg",
    color: "gold",
  },
  {
    id: "accommodations",
    title: "Accommodations",
    subtitle: "Luxury Suite Categories",
    description:
      "Retreat to your private sanctuary with ocean views, premium amenities, and personalized service.",
    features: [
      "Ocean-view suites with private balconies",
      "Butler and concierge services",
      "Premium linens and amenities",
      "In-suite dining and entertainment",
    ],
    image: "/accommodation.jpg",
    color: "navy",
  },
];

export function OnboardExperiences() {
  const [activeExperience, setActiveExperience] = useState("culinary");

  const getColorClasses = (color: string, isActive: boolean) => {
    const colorMap = {
      coral: isActive
        ? "bg-coral text-white"
        : "text-coral border-coral hover:bg-coral hover:text-white",
      seafoam: isActive
        ? "bg-seafoam text-white"
        : "text-seafoam border-seafoam hover:bg-seafoam hover:text-white",
      gold: isActive
        ? "bg-gold text-navy"
        : "text-gold border-gold hover:bg-gold hover:text-navy",
      navy: isActive
        ? "bg-navy text-white"
        : "text-navy border-navy hover:bg-navy hover:text-white",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const activeExp = experiences.find((exp) => exp.id === activeExperience)!;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Onboard Experiences
          </h2>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            Discover a world of luxury amenities and exceptional experiences
            designed to exceed your every expectation while at sea.
          </p>
        </div>

        {/* Experience Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              onClick={() => setActiveExperience(experience.id)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${getColorClasses(
                experience.color,
                activeExperience === experience.id
              )}`}
            >
              {experience.title}
            </button>
          ))}
        </div>

        {/* Active Experience Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Experience Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={activeExp.image || "/placeholder.svg"}
                alt={activeExp.title}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="text-2xl font-bold text-navy mb-1">24/7</div>
              <div className="text-sm text-navy/70">
                Premium Service Available
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="space-y-6">
            <div>
              <div className="text-sm font-medium text-coral mb-2">
                {activeExp.subtitle}
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
                {activeExp.title}
              </h3>
              <p className="text-lg text-navy/80 leading-relaxed">
                {activeExp.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {activeExp.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-navy/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-coral hover:bg-coral/90 text-white">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Experience Grid Overview */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                activeExperience === experience.id
                  ? "border-coral shadow-lg"
                  : "border-gray-200 hover:border-coral/50"
              }`}
              onClick={() => setActiveExperience(experience.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {experience.id === "culinary" && (
                    <svg
                      className="w-6 h-6 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  )}
                  {experience.id === "wellness" && (
                    <svg
                      className="w-6 h-6 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                  {experience.id === "entertainment" && (
                    <svg
                      className="w-6 h-6 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v14a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1h8z"
                      />
                    </svg>
                  )}
                  {experience.id === "accommodations" && (
                    <svg
                      className="w-6 h-6 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                </div>
                <h4 className="font-semibold text-navy mb-2">
                  {experience.title}
                </h4>
                <p className="text-sm text-navy/70">{experience.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
