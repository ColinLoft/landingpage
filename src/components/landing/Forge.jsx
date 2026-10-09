import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Cpu, Camera, Plane, Droplets, Sun, Radar, Wrench, Code2, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMG } from "@/lib/images";

const TEAM = [
  { name: "Founder", role: "Systems & Vision", img: "https://media.base44.com/images/public/6ac1b432598089bbd885aefa/29ed9447b_generated_88d12021.jpg" },
];

const NODE_CALLOUTS = [
  { icon: Camera, title: "Thermal Array", desc: "Low-light & RGB cameras for 24/7 detection." },
  { icon: Radar, title: "Multi-Sensor Suite", desc: "Smoke, gas, temperature & humidity sensors." },
  { icon: Sun, title: "Solar Powered", desc: "Self-sustaining on pole, wall, fence, or ridge." },
];

const COPTER_CALLOUTS = [
  { icon: Cpu, title: "Autonomous Flight", desc: "Autonomous-first, operator-in-the-loop, override anytime." },
  { icon: Droplets, title: "4-Gallon Payload", desc: "Onboard water to extinguish fires on contact." },
  { icon: Plane, title: "Rapid Response", desc: "Dispatched the moment detection confirms." },
];

function CalloutRail({ callouts, accent }) {
  return (
    <div className="space-y-3">
      {callouts.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex items-start gap-3 p-4 rounded-xl border border-hairline bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          >
            <div className={`w-9 h-9 shrink-0 rounded-lg border border-hairline bg-white/[0.03] flex items-center justify-center ${accent}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">{c.title}</div>
              <div className="text-xs text-slate-tech mt-0.5 leading-relaxed">{c.desc}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function TechBlock({ img, label, title, callouts, accent, reverse }) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <div className="relative [direction:ltr]">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-hairline group">
          <Image src={img} alt={title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-hairline">
            <span className={`w-1.5 h-1.5 rounded-full ${accent === "signal" ? "bg-signal" : "bg-glacial"} animate-pulse`} />
            <span className="text-[10px] tracking-mega text-white uppercase">{label}</span>
          </div>
        </div>
      </div>
      <div className="[direction:ltr]">
        <h3 className="font-heading font-semibold text-white text-[clamp(1.5rem,3vw,2.25rem)] leading-tight mb-2">{title}</h3>
        <div className="mb-6 h-px w-16 bg-gradient-to-r from-white/30 to-transparent" />
        <CalloutRail callouts={callouts} accent={accent === "signal" ? "text-signal" : "text-glacial"} />
      </div>
    </div>
  );
}

export default function Forge() {
  return (
    <section className="relative bg-obsidian py-24 lg:py-32 overflow-hidden">
    <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Team intro */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[11px] tracking-mega text-glacial uppercase mb-5">The Forge · Who We Are</div>
            <h2 className="font-heading font-bold text-white text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
              Five high schoolers,<br />
              <span className="text-glacial">on a mission to save the world.</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-slate-tech leading-relaxed max-w-2xl">
              We're a small team building big things — detection and response hardware, designed and
              manufactured in-house. Young founders, world-class technology, and an unshakeable belief
              that the next generation can engineer the answers the planet needs.
            </p>
          </motion.div>
        </div>

        {/* Team visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-hairline mb-24 lg:mb-32 group"
        >
          <div className="aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={IMG.team}
              alt="The team in the workshop"
              fittingType="fill"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[10px] tracking-mega text-slate-tech uppercase">
                  <Users className="w-3.5 h-3.5 text-signal" /> The Founders
                </div>
                <div className="text-white font-heading font-semibold text-xl lg:text-2xl">
                  Engineering wildfire response — one node, one flight at a time.
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-hairline">
                <Wrench className="w-4 h-4 text-signal" />
                <span className="text-xs text-white/80">Built in-house</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech intro */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[11px] tracking-mega text-signal uppercase mb-5">The Technology · How We Solve It</div>
            <h2 className="font-heading font-bold text-white text-balance text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
              Detect. Respond. Extinguish.
            </h2>
            <p className="mt-5 text-base lg:text-lg text-slate-tech leading-relaxed max-w-2xl">
              Our detection network of solar-powered sensor nodes, paired with an autonomous
              response helicopter, carries water to the scene and puts the fire out — while it's
              still small.
            </p>
          </motion.div>
        </div>

        <div className="space-y-20 lg:space-y-28">
          <TechBlock
            img={IMG.node}
            label="Detection Node"
            title="The Season Report Node — eyes on the ridge, always on."
            callouts={NODE_CALLOUTS}
            accent="signal"
          />
          <TechBlock
            img={IMG.copter}
            label="Response Aircraft"
            title="The Response Helicopter — from detection to extinguished, in minutes."
            callouts={COPTER_CALLOUTS}
            accent="glacial"
            reverse
          />
        </div>

        {/* Coming next strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 block"
        >
          <Link
            to="/solutions/coming-next"
            className="p-6 lg:p-8 rounded-2xl border border-hairline bg-gradient-to-r from-white/[0.03] to-transparent hover:from-white/[0.06] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl border border-hairline bg-white/[0.03] flex items-center justify-center text-glacial">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-medium text-lg">Wildfire is just the beginning.</div>
              <div className="text-sm text-slate-tech mt-0.5">The same platform, aimed at hurricanes, floods and droughts next.</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-glacial text-sm font-medium">
            <span className="tracking-wider uppercase text-xs">See what's next</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}