import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";
import {
  Flame, Users, Rocket, Radar, Plane, Camera, Cpu, Code2, Activity,
  ShieldCheck, Workflow, CircleUser, Target, Compass, Briefcase,
  Handshake, Mail, Menu, X, ChevronDown, ArrowRight, Satellite, Zap, TrendingUp
} from "lucide-react";

const FEATURED = {
  eyebrow: "Featured Mission",
  title: "The Wildfire Mission",
  desc: "Our flagship detect-and-respond system — built in-house, from sensor to suppression.",
  cta: "Explore the mission",
  to: "/solutions/wildfire",
  image: IMG.fire,
};

const FOOTER_LINKS = [
  { label: "Impact", desc: "See the mission", to: "/impact" },
  { label: "Partners", desc: "Become a partner", to: "/company/partners" },
];

const MENU = {
  Solutions: {
    label: "Solutions",
    cols: 1,
    wide: false,
    groups: [
      {
        label: "Solutions",
        items: [
          { icon: Flame, title: "Wildfire", desc: "Detect-and-respond system for the wildland fire crisis.", to: "/solutions/wildfire" },
          { icon: Users, title: "Who It's For", desc: "Municipalities, landowners, utilities, and agencies.", to: "/solutions/who-its-for" },
          { icon: Rocket, title: "Coming Next", desc: "Hurricanes, floods, tornadoes, and droughts.", to: "/solutions/coming-next" },
        ],
      },
    ],
  },
  Technology: {
    label: "Technology",
    cols: 3,
    wide: true,
    groups: [
      {
        label: "Detection",
        items: [
          { icon: Radar, title: "Sensors", desc: "Solar nodes with thermal, low-light & RGB watch.", to: "/technology/sensors" },
          { icon: Camera, title: "Imaging", desc: "Three spectrums, one confirmed detection.", to: "/technology/imaging" },
          { icon: Code2, title: "Software", desc: "Detection pipeline, dispatch, and command UI.", to: "/technology/software" },
        ],
      },
      {
        label: "Response",
        items: [
          { icon: Plane, title: "Aircraft", desc: "Solar-autonomous helicopter with water payload.", to: "/technology/aircraft" },
          { icon: Cpu, title: "Autonomy", desc: "Autonomous-first flight, operator in the loop.", to: "/technology/autonomy" },
          { icon: ShieldCheck, title: "Safety", desc: "Redundancy, failsafes, and human override always.", to: "/technology/safety" },
        ],
      },
      {
        label: "Operation",
        items: [
          { icon: Activity, title: "Operation", desc: "From detection to response in minutes, end to end.", to: "/technology/operation" },
          { icon: Workflow, title: "How It Works", desc: "The full detect → dispatch → respond pipeline.", to: "/technology/how-it-works" },
        ],
      },
    ],
  },
  Company: {
    label: "Company",
    cols: 2,
    wide: true,
    groups: [
      {
        label: "Who",
        items: [
          { icon: CircleUser, title: "About Us", desc: "Five high schoolers engineering wildfire response.", to: "/company/about-us" },
          { icon: Target, title: "Our Mission", desc: "Solve the world's problems with technology and hardware.", to: "/company/our-mission" },
          { icon: Users, title: "Our Team", desc: "The founders building detection and response in-house.", to: "/company/our-team" },
        ],
      },
      {
        label: "How",
        items: [
          { icon: Compass, title: "Our Approach", desc: "Detect is not enough. We respond. We extinguish.", to: "/company/our-approach" },
          { icon: Briefcase, title: "Careers", desc: "Join a mission to protect people, property, and planet.", to: "/company/careers" },
          { icon: Handshake, title: "Partners", desc: "Align with agencies, institutions, and industry.", to: "/company/partners" },
        ],
      },
    ],
  },
};

function ItemCard({ item, onNavigate }) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      className="group flex items-start gap-3 p-3 rounded-lg border border-hairline bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-colors"
    >
      <div className="mt-0.5 shrink-0 w-8 h-8 rounded-md bg-white/[0.04] border border-hairline flex items-center justify-center text-slate-tech group-hover:text-signal group-hover:border-signal/30 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-white">{item.title}</div>
        <p className="text-xs text-slate-tech leading-relaxed mt-0.5">{item.desc}</p>
      </div>
    </Link>
  );
}

function MegaPanel({ section, onNavigate, onMouseEnter, onMouseLeave }) {
  const sec = MENU[section];
  const cols = sec.cols === 1 ? "sm:grid-cols-1" : sec.cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className="fixed inset-x-0 top-20 pt-3 flex justify-center pointer-events-none">
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`pointer-events-auto glass-strong border border-hairline rounded-2xl shadow-2xl overflow-hidden ${
        sec.wide ? "w-[min(980px,94vw)]" : "w-[min(760px,94vw)]"
      }`}
    >
      <div className="reticle-grid">
        <div className="grid lg:grid-cols-[1fr_270px]">
          {/* Item groups */}
          <div className={`p-5 grid gap-5 ${cols}`}>
            {sec.groups.map((g) => (
              <div key={g.label}>
                <div className="text-[10px] tracking-mega text-slate-tech uppercase mb-2.5 px-1">{g.label}</div>
                <div className="space-y-2">
                  {g.items.map((it) => (
                    <ItemCard key={it.title} item={it} onNavigate={onNavigate} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured card */}
          <div className="hidden lg:block p-4 border-l border-hairline">
            <Link
              to={FEATURED.to}
              onClick={onNavigate}
              className="group block rounded-xl overflow-hidden border border-hairline bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  fittingType="fill"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
              </div>
              <div className="p-4">
                <div className="text-[9px] tracking-mega text-signal uppercase mb-1.5">{FEATURED.eyebrow}</div>
                <div className="text-white font-semibold">{FEATURED.title}</div>
                <p className="text-xs text-slate-tech leading-relaxed mt-1">{FEATURED.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-signal group-hover:text-white transition-colors">
                  {FEATURED.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-hairline px-6 py-3.5 flex items-center gap-8">
          {FOOTER_LINKS.map((l, i) => {
            const Icon = i === 0 ? TrendingUp : Handshake;
            return (
              <Link key={l.label} to={l.to} onClick={onNavigate} className="group flex items-center gap-2.5 text-sm">
                <Icon className="w-4 h-4 text-slate-tech group-hover:text-signal transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors font-medium">{l.label}</span>
                <span className="hidden md:inline text-xs text-slate-tech">{l.desc}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-tech group-hover:text-signal group-hover:translate-x-0.5 transition-all" />
              </Link>
            );
          })}
          <div className="ml-auto hidden xl:flex items-center gap-2">
            <Satellite className="w-3.5 h-3.5 text-glacial" />
            <span className="text-[10px] tracking-mega text-slate-tech uppercase">{section} — Command Index</span>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const closeTimer = React.useRef(null);
  const openMenu = (key) => { clearTimeout(closeTimer.current); setOpen(key); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(null), 180); };
  const cancelClose = () => clearTimeout(closeTimer.current);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-transparent"
      >
        <nav
          className={`mx-auto transition-all duration-300 grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center ${
            scrolled
              ? "mt-3 max-w-[1180px] px-5 h-16 rounded-full bg-gray-400/[0.14] backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              : "max-w-[1400px] px-6 lg:px-10 h-20"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group justify-self-start">
            <div className={`relative flex items-center justify-center transition-all duration-300 ${scrolled ? "w-8 h-8" : "w-10 h-10"}`}>
              <div className="absolute inset-0 rounded-full border border-signal/40" />
              <div className="absolute inset-1.5 rounded-full border border-glacial/30" />
              <Zap className={`text-signal transition-all duration-300 ${scrolled ? "w-3 h-3" : "w-4 h-4"}`} />
            </div>
            <div className="leading-none">
              <div className={`font-semibold tracking-[0.2em] text-white transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>SEASON REPORT</div>
              <div className={`tracking-[0.25em] text-slate-tech uppercase transition-all duration-300 ${scrolled ? "text-[9px]" : "text-[10px]"} ${scrolled ? "mt-0.5" : "mt-1"}`}>Wildfire Response</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 justify-self-center">
            {Object.keys(MENU).map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1.5 px-5 text-[15px] transition-all duration-300 ${
                    scrolled ? "py-1.5 text-sm" : "py-2.5"
                  } ${open === key ? "text-white" : "text-white/80 hover:text-white"}`}
                >
                  {MENU[key].label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${open === key ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === key && (
                    <MegaPanel
                      section={key}
                      onNavigate={() => setOpen(null)}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              to="/impact"
              className="px-5 py-2.5 text-[15px] font-medium text-white/90 hover:text-signal transition-colors flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              Impact
            </Link>
          </div>

          <div className="hidden lg:flex justify-self-end">
            <Link
              to="/company/contact"
              className={`group relative inline-flex items-center gap-2 rounded-full bg-signal text-obsidian text-sm font-semibold hover:glow-amber transition-all duration-300 ${scrolled ? "px-5 py-2" : "px-6 py-3"}`}
            >
              Talk to Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 justify-self-end"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden bg-obsidian flex flex-col"
          >
            <div className="h-20 flex items-center justify-between px-5 border-b border-hairline">
              <span className="text-base font-semibold tracking-[0.2em] text-white">SEASON REPORT</span>
              <button onClick={() => { setMobileOpen(false); setMobileSection(null); }} className="text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              {Object.keys(MENU).map((key) => (
                <div key={key} className="border-b border-hairline">
                  <button
                    className="w-full flex items-center justify-between py-4 text-white text-lg font-medium"
                    onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  >
                    {MENU[key].label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileSection === key ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileSection === key && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3">
                          {MENU[key].groups.map((g) => (
                            <div key={g.label}>
                              <div className="text-[10px] tracking-mega text-slate-tech uppercase px-3 pt-3 pb-1.5">{g.label}</div>
                              {g.items.map((it) => {
                                const Icon = it.icon;
                                return (
                                  <Link
                                    key={it.title}
                                    to={it.to}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.04]"
                                  >
                                    <Icon className="w-4 h-4 text-slate-tech shrink-0" />
                                    <div>
                                      <div className="text-sm text-white">{it.title}</div>
                                      <div className="text-xs text-slate-tech">{it.desc}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link to="/impact" onClick={() => setMobileOpen(false)} className="block py-4 text-white text-lg font-medium">
                Impact
              </Link>
              <Link
                to="/company/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-4 px-5 py-3.5 rounded-full bg-signal text-obsidian font-semibold"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}