import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cruiseOptions = [
  {
    id: "med-jewels",
    name: "Mediterranean Jewels",
    duration: "7 Days",
    startingPrice: 2499,
    dates: ["2024-05-15", "2024-06-12", "2024-07-10", "2024-08-14"],
  },
  {
    id: "caribbean-paradise",
    name: "Caribbean Paradise",
    duration: "10 Days",
    startingPrice: 3299,
    dates: ["2024-04-20", "2024-05-25", "2024-06-22", "2024-07-27"],
  },
  {
    id: "northern-lights",
    name: "Northern Lights Expedition",
    duration: "12 Days",
    startingPrice: 4599,
    dates: ["2024-09-15", "2024-10-13", "2024-11-10", "2024-12-08"],
  },
];

const cabinTypes = [
  {
    id: "interior",
    name: "Interior Stateroom",
    size: "185 sq ft",
    price: 0,
    features: [
      "Queen bed",
      "Private bathroom",
      "Climate control",
      "Room service",
    ],
    image: "/cabin-interior-stateroom.jpg",
  },
  {
    id: "oceanview",
    name: "Ocean View Stateroom",
    size: "220 sq ft",
    price: 400,
    features: [
      "Queen bed",
      "Ocean view window",
      "Sitting area",
      "Premium amenities",
    ],
    image: "/cabin-ocean-view-stateroom.jpg",
  },
  {
    id: "balcony",
    name: "Balcony Suite",
    size: "280 sq ft",
    price: 800,
    features: [
      "Private balcony",
      "Separate seating area",
      "Premium linens",
      "Priority boarding",
    ],
    image: "/cabin-balcony-suite.jpg",
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    size: "450 sq ft",
    price: 1500,
    features: [
      "Large balcony",
      "Butler service",
      "Premium dining",
      "Exclusive amenities",
    ],
    image: "/cabin-penthouse-suite.jpg",
  },
];

const addOns = [
  {
    id: "dining",
    name: "Specialty Dining Package",
    price: 299,
    description: "Access to all specialty restaurants",
  },
  {
    id: "beverage",
    name: "Premium Beverage Package",
    price: 199,
    description: "Unlimited premium drinks",
  },
  {
    id: "wifi",
    name: "Premium WiFi",
    price: 149,
    description: "High-speed internet throughout cruise",
  },
  {
    id: "excursions",
    name: "Shore Excursion Package",
    price: 599,
    description: "Guided tours at every port",
  },
  {
    id: "spa",
    name: "Spa & Wellness Package",
    price: 399,
    description: "Spa treatments and fitness classes",
  },
];

export function PlanningTools() {
  const [selectedCruise, setSelectedCruise] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCabin, setSelectedCabin] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [guests, setGuests] = useState(2);

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId)
        ? prev.filter((id) => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    const cruise = cruiseOptions.find((c) => c.id === selectedCruise);
    const cabin = cabinTypes.find((c) => c.id === selectedCabin);
    const addOnTotal = selectedAddOns.reduce((sum, addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId);
      return sum + (addOn?.price || 0);
    }, 0);

    const basePrice = (cruise?.startingPrice || 0) + (cabin?.price || 0);
    return basePrice * guests + addOnTotal;
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Plan Your Perfect Voyage
          </h2>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            Customize every aspect of your luxury cruise experience with our
            intuitive planning tools and booking interface.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Choose Your Cruise */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-navy">
                  1. Choose Your Cruise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cruiseOptions.map((cruise) => (
                  <div
                    key={cruise.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedCruise === cruise.id
                        ? "border-coral bg-coral/5"
                        : "border-gray-200 hover:border-coral/50"
                    }`}
                    onClick={() => setSelectedCruise(cruise.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-navy">
                          {cruise.name}
                        </h3>
                        <p className="text-navy/70 text-sm">
                          {cruise.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-navy">
                          From ${cruise.startingPrice.toLocaleString()}
                        </div>
                        <div className="text-sm text-navy/70">per person</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Step 2: Select Date */}
            {selectedCruise && (
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-navy">
                    2. Select Your Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {cruiseOptions
                      .find((c) => c.id === selectedCruise)
                      ?.dates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            selectedDate === date
                              ? "border-coral bg-coral/5"
                              : "border-gray-200 hover:border-coral/50"
                          }`}
                        >
                          <div className="font-semibold text-navy">
                            {new Date(date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-sm text-navy/70 mt-1">
                            Available
                          </div>
                        </button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Choose Cabin */}
            {selectedDate && (
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-navy">
                    3. Choose Your Cabin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {cabinTypes.map((cabin) => (
                      <div
                        key={cabin.id}
                        className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                          selectedCabin === cabin.id
                            ? "border-coral shadow-lg"
                            : "border-gray-200 hover:border-coral/50"
                        }`}
                        onClick={() => setSelectedCabin(cabin.id)}
                      >
                        <img
                          src={cabin.image || "/placeholder.svg"}
                          alt={cabin.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-navy">
                            {cabin.name}
                          </h3>
                          <p className="text-sm text-navy/70 mb-2">
                            {cabin.size}
                          </p>
                          <div className="text-lg font-bold text-coral mb-2">
                            +${cabin.price.toLocaleString()} per person
                          </div>
                          <ul className="text-xs text-navy/70 space-y-1">
                            {cabin.features
                              .slice(0, 2)
                              .map((feature, index) => (
                                <li key={index}>• {feature}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Add-Ons */}
            {selectedCabin && (
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-navy">
                    4. Enhance Your Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {addOns.map((addOn) => (
                      <div
                        key={addOn.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedAddOns.includes(addOn.id)
                            ? "border-coral bg-coral/5"
                            : "border-gray-200 hover:border-coral/50"
                        }`}
                        onClick={() => toggleAddOn(addOn.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-navy">
                              {addOn.name}
                            </h3>
                            <p className="text-sm text-navy/70">
                              {addOn.description}
                            </p>
                          </div>
                          <div className="text-lg font-bold text-coral">
                            ${addOn.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 sticky top-6">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-navy">
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Guest Count */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-full border border-navy text-navy hover:bg-navy hover:text-white transition-colors flex items-center justify-center text-center"
                    >
                      <span className="-translate-y-0.5">-</span>
                    </button>
                    <span className="text-lg font-semibold text-navy w-8 text-center">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-8 h-8 rounded-full border border-navy text-navy hover:bg-navy hover:text-white transition-colors flex items-center justify-center"
                    >
                      <span className="-translate-y-0.5">+</span>
                    </button>
                  </div>
                </div>

                {/* Selected Options */}
                {selectedCruise && (
                  <div className="space-y-3 pt-4 border-t">
                    <div>
                      <div className="font-semibold text-navy">
                        {
                          cruiseOptions.find((c) => c.id === selectedCruise)
                            ?.name
                        }
                      </div>
                      {selectedDate && (
                        <div className="text-sm text-navy/70">
                          {new Date(selectedDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      )}
                    </div>

                    {selectedCabin && (
                      <div>
                        <div className="font-semibold text-navy">
                          {cabinTypes.find((c) => c.id === selectedCabin)?.name}
                        </div>
                        <div className="text-sm text-navy/70">
                          {guests} guests
                        </div>
                      </div>
                    )}

                    {selectedAddOns.length > 0 && (
                      <div>
                        <div className="font-semibold text-navy mb-1">
                          Add-ons:
                        </div>
                        {selectedAddOns.map((addOnId) => {
                          const addOn = addOns.find((a) => a.id === addOnId);
                          return (
                            <div key={addOnId} className="text-sm text-navy/70">
                              • {addOn?.name}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Total */}
                {selectedCruise && selectedCabin && (
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-navy">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-coral">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>

                    <Button className="w-full bg-coral hover:bg-coral/90 text-white py-3 text-lg font-medium">
                      Book Your Cruise
                    </Button>

                    <p className="text-xs text-navy/70 mt-2 text-center">
                      Secure booking • Full refund within 24 hours
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-navy mb-2">
                  Need Help Planning?
                </h3>
                <p className="text-sm text-navy/70 mb-4">
                  Our cruise specialists are available 24/7 to help you create
                  the perfect voyage.
                </p>
                <Button
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  Call (800) 555-CRUISE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
