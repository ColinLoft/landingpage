import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import Descent from "@/components/landing/Descent";
import Resolve from "@/components/landing/Resolve";
import Toll from "@/components/landing/Toll";
import Forge from "@/components/landing/Forge";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <main>
        <div data-scroll-fast>
          <Hero />
          <Descent />
        </div>
        <div data-scroll-slow>
          <Resolve />
          <Toll />
        </div>
        <Forge />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}