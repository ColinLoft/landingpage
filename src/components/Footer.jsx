import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Github, Linkedin, Twitter, Youtube, Instagram, ArrowRight } from "lucide-react";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const LINK_GROUPS = [
  {
    title: "Solutions",
    links: [
      { label: "Wildfire", to: "/solutions/wildfire" },
      { label: "Who It's For", to: "/solutions/who-its-for" },
      { label: "Coming Next", to: "/solutions/coming-next" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Sensors", to: "/technology/sensors" },
      { label: "Aircraft", to: "/technology/aircraft" },
      { label: "Autonomy", to: "/technology/autonomy" },
      { label: "How It Works", to: "/technology/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/company/about-us" },
      { label: "Our Mission", to: "/company/our-mission" },
      { label: "Our Team", to: "/company/our-team" },
      { label: "Careers", to: "/company/careers" },
      { label: "Partners", to: "/company/partners" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 reticle-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + mission + EIN */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-signal/40" />
                <div className="absolute inset-1 rounded-full border border-glacial/30" />
                <Zap className="w-3.5 h-3.5 text-signal" />
              </div>
              <div className="leading-none">
                <div className="text-sm font-semibold tracking-[0.2em] text-white">SEASON REPORT</div>
                <div className="text-[9px] tracking-[0.25em] text-slate-tech uppercase">Wildfire Response</div>
              </div>
            </div>
            <p className="text-sm text-slate-tech leading-relaxed max-w-sm">
              A nonprofit on a mission to solve the world's problems, natural disasters and beyond
              with technology and hardware built in-house. We detect. We respond. We protect people,
              property, and the planet.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-white/[0.02]">
              <span className="text-[10px] tracking-mega text-slate-tech uppercase">EIN</span>
              <span className="text-xs font-mono text-white/70">81-2908499</span>
            </div>
          </div>

          {/* Link groups */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {LINK_GROUPS.map((g) => (
              <div key={g.title}>
                <div className="text-[10px] tracking-mega text-slate-tech uppercase mb-3">{g.title}</div>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/70 hover:text-signal transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA + socials */}
          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-mega text-slate-tech uppercase mb-3">Talk to Us</div>
            <p className="text-sm text-slate-tech leading-relaxed mb-4">
              Donors, investors, mentors, municipalities, volunteers let's build the answer together.
            </p>
            <Link
              to="/company/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-signal/40 text-signal text-sm font-medium hover:bg-signal hover:text-obsidian transition-all"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-hairline flex items-center justify-center text-slate-tech hover:text-white hover:border-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-tech">
            © {new Date().getFullYear()} Season Report. A 501(c)(3) nonprofit organization. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-tech">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}