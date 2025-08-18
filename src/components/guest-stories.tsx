import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Chen",
    location: "San Francisco, CA",
    cruise: "Mediterranean Jewels",
    year: "2024",
    quote:
      "Our Mediterranean cruise wasn't just a vacation—it was a journey that rekindled our love for adventure and each other. Watching the sunset from our suite's balcony in Santorini while enjoying a private dinner prepared by the ship's chef was pure magic.",
    image: "/guest-couple-mediterranean-sunset.png",
    highlight: "25th Anniversary Celebration",
  },
  {
    id: 2,
    name: "Dr. James Wellington",
    location: "London, UK",
    cruise: "Northern Lights Expedition",
    year: "2024",
    quote:
      "As a retired professor, I thought I'd seen it all. But standing on deck at 2 AM, watching the Aurora Borealis dance across the Norwegian sky while sipping hot cocoa—that moment changed my perspective on the world's remaining wonders.",
    image: "/guest-man-northern-lights-deck.png",
    highlight: "Bucket List Achievement",
  },
  {
    id: 3,
    name: "The Rodriguez Family",
    location: "Miami, FL",
    cruise: "Caribbean Paradise",
    year: "2024",
    quote:
      "Three generations of our family came together for this cruise. Watching our grandchildren's faces light up during the cultural performances while my parents shared stories of their own travels—these are the moments that bind families together forever.",
    image: "/guest-family-caribbean-cultural-show.png",
    highlight: "Multi-Generational Bonding",
  },
  {
    id: 4,
    name: "Emma Thompson",
    location: "Sydney, Australia",
    cruise: "Asian Discovery",
    year: "2024",
    quote:
      "Traveling solo can be intimidating, but the crew made me feel like family from day one. The cooking class in Singapore, the temple visit in Kyoto, the tai chi sessions at sunrise—I discovered not just new places, but a new version of myself.",
    image: "/guest-woman-asian-temple-meditation.png",
    highlight: "Solo Travel Transformation",
  },
  {
    id: 5,
    name: "Robert & Patricia Miller",
    location: "Toronto, Canada",
    cruise: "Alaskan Wilderness",
    year: "2024",
    quote:
      "We've been on many cruises, but nothing prepared us for the raw beauty of Alaska. When that humpback whale surfaced just meters from our ship, and we could hear its song through the hull—it was a spiritual experience that brought tears to our eyes.",
    image: "/guest-couple-alaska-whale-watching.png",
    highlight: "Wildlife Encounter",
  },
];

export function GuestStories() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Guest Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover how our guests' lives have been transformed through
            extraordinary moments and unforgettable connections at sea.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Testimonial Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={current.image || "/placeholder.svg"}
                alt={`${current.name} cruise experience`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>

              {/* Image Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-gold text-sm font-medium mb-1">
                    {current.highlight}
                  </div>
                  <div className="text-white font-semibold">
                    {current.cruise}
                  </div>
                  <div className="text-white/80 text-sm">{current.year}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="text-6xl text-coral font-serif leading-none">"</div>

            <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 font-light italic">
              {current.quote}
            </blockquote>

            <div className="pt-4">
              <div className="font-semibold text-lg text-white">
                {current.name}
              </div>
              <div className="text-white/70">{current.location}</div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 pt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="text-white hover:bg-white/10 p-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-coral w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="text-white hover:bg-white/10 p-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial Preview Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 border-2 ${
                index === currentTestimonial
                  ? "border-coral bg-white/10 backdrop-blur-sm"
                  : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40"
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <CardContent className="p-4">
                <div className="relative mb-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-xs text-white/70">
                  {testimonial.cruise}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-serif text-2xl font-bold mb-4">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join thousands of guests who have discovered the transformative
            power of luxury cruising.
          </p>
          <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-3">
            Start Planning Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
