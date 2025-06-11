import React from "react";
import { Button, Card, CardContent } from "@mui/material";

export default function ExampleHomePage() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ConsultX</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#pricing" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
          </nav>
          <Button variant="contained" className="!bg-blue-600 !text-white">
            Book a Consult
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Guiding Your Journey to Success
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Expert consultancy for students, migrants, and entrepreneurs.
        </p>
        <div className="flex space-x-4">
          <Button variant="outlined" color="primary">
            Explore Services
          </Button>
          <Button variant="contained" color="primary">
            Book Now
          </Button>
        </div>
      </section>

      {/* Consultancy Overview */}
      <section id="services" className="py-16 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Consultancies
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Academic Consultancy",
              desc: "Guidance for university applications, scholarships, and essays.",
            },
            {
              title: "Outbound Consultancy",
              desc: "Support with immigration, visas, and relocation.",
            },
            {
              title: "Entrepreneurial Consultancy",
              desc: "Help with launching, funding, and scaling your venture.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow hover:shadow-lg transition">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Button size="small" variant="outlined">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us / How It Works */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✔️ Experienced global advisors</li>
              <li>✔️ Transparent pricing and packages</li>
              <li>✔️ One-on-one personalized consultations</li>
              <li>✔️ End-to-end support and accountability</li>
            </ul>
          </div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Why us"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Pricing CTA */}
      <section
        id="pricing"
        className="bg-blue-600 py-16 text-white text-center px-4"
      >
        <h2 className="text-3xl font-bold mb-4">
          Simple Pricing, Tailored to You
        </h2>
        <p className="mb-6">
          Choose from flexible packages designed for your goals
        </p>
        <Button variant="contained" className="!bg-white !text-blue-600">
          View Packages
        </Button>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["A+", "Amazing help!", "Best decision ever!"].map((quote, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-lg italic mb-2">“{quote}”</p>
              <p className="text-sm text-gray-600">— Client #{i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Newsletter */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Get the Latest Updates</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for free insights
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm"
          />
          <Button variant="contained">Subscribe</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-2">ConsultX</h4>
            <p>Your trusted consultancy partner.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm">
              info@consultx.com
              <br />
              +1 234 567 890
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
