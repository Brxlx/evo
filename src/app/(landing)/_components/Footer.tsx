import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#1AB760] py-16">
      <div className="container mx-auto px-4">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white/80">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Nivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
