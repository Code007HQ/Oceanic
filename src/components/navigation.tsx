import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-white">
            Oceanic
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#destinations"
              className="text-white/90 hover:text-white transition-colors"
            >
              Destinations
            </a>
            <a
              href="#experiences"
              className="text-white/90 hover:text-white transition-colors"
            >
              Experiences
            </a>
            <a
              href="#suites"
              className="text-white/90 hover:text-white transition-colors"
            >
              Suites
            </a>
            <a
              href="#dining"
              className="text-white/90 hover:text-white transition-colors"
            >
              Dining
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
