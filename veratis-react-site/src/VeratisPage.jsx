import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function VeratisPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 shadow-md flex items-center justify-between">
        <div className="text-2xl font-bold">Veratis</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#industries" className="hover:underline">Industries</a>
          <a href="#services" className="hover:underline">Consulting Services</a>
          <a href="#careers" className="hover:underline">Careers</a>
        </nav>
      </header>

      <section className="p-12 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Clarity. Strategy. Results.</h1>
        <p className="max-w-xl mx-auto text-lg">
          At Veratis, we empower businesses to grow, transform, and lead in their industries.
        </p>
      </section>

      <section id="about" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl">
          Veratis is a modern consulting firm focused on delivering actionable strategies across sectors. Our team brings experience, insight, and a passion for impactful solutions.
        </p>
      </section>

      <section id="industries" className="p-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
        <ul className="list-disc list-inside max-w-3xl">
          <li>Healthcare & Life Sciences</li>
          <li>Retail & Consumer Products</li>
          <li>Financial Services</li>
          <li>Technology & Startups</li>
        </ul>
      </section>

      <section id="services" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Consulting Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Business Strategy</h3>
              <p>Tailored growth strategies and performance improvement plans.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Operations</h3>
              <p>Process optimization, cost reduction, and efficiency building.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Market Entry</h3>
              <p>Actionable insights and strategies for global expansion and market entry.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="careers" className="p-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Careers at Veratis</h2>
        <p className="max-w-3xl">
          Join a team of thinkers, doers, and changemakers. We’re always looking for talent driven by curiosity and purpose.
        </p>
        <Button className="mt-4">Explore Opportunities</Button>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} Veratis Consulting. All rights reserved.
      </footer>
    </div>
  );
}
