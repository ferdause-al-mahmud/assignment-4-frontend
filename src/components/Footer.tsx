"use client";

import type React from "react";

import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="w-full">
      {/* Discount section */}
      <div className="w-full  bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Get discounts instantly
          </h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            To save you just have to log in to your account and look for the
            experiences. On your first reservation you can enjoy a{" "}
            <span className="font-bold">10% discount</span>.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-xl mx-auto gap-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full bg-white"
              required
            />
            <Button
              type="submit"
              className="rounded-full bg-black text-white hover:bg-gray-800"
            >
              Get started
            </Button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Newsletter column */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Sign up for our newsletter
              </h3>
              <p className="mb-4">
                Don't worry, we reserve our newsletter for important news so we
                only send a few updates a year.
              </p>
              <Button
                variant="outline"
                className="rounded-full border-white bg-white text-black"
              >
                Subscribe
              </Button>
            </div>

            {/* Help column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Help and services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    How does it work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service & Repairs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore column */}
            <div>
              <h3 className="text-xl font-bold mb-4">To explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Bikes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            {/* Other column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Other possibilities</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Give away
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bike Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* App download section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Fusion Bikes. All rights
                reserved.
              </p>
            </div>
          </div>

          {/* Social media as */}
          <div className="flex justify-center sm:justify-end mt-6 space-x-6">
            <a href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 hover:text-purple-400 transition-colors" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 hover:text-purple-400 transition-colors" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
