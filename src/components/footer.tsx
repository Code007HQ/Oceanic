export function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-serif font-bold mb-4">Oceanic</div>
            <p className="text-white/80 text-sm leading-relaxed">
              Setting the standard for luxury cruising with unparalleled
              service, world-class amenities, and unforgettable destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#destinations"
                  className="hover:text-coral transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-coral transition-colors"
                >
                  Onboard Experiences
                </a>
              </li>
              <li>
                <a
                  href="#suites"
                  className="hover:text-coral transition-colors"
                >
                  Suites & Staterooms
                </a>
              </li>
              <li>
                <a
                  href="#dining"
                  className="hover:text-coral transition-colors"
                >
                  Dining
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Booking Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  Travel Requirements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coral transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div>(800) 555-CRUISE</div>
              <div>reservations@oceanic.com</div>
              <div className="pt-2">
                <div className="font-medium text-white">
                  24/7 Customer Service
                </div>
                <div>Available worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/70">
            © 2024 Oceanic Luxury Cruises. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-coral transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
