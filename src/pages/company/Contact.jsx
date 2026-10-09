import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import BlockList from "@/components/blocks/BlockList";
import { Send, CheckCircle2, Loader2, Heart, Landmark, Trees, GraduationCap, Users, Lightbulb } from "lucide-react";

const AFTER_SEND = [
  {
    type: "steps",
    title: "What happens after you write",
    items: [
      { title: "We read it", desc: "Every message is read by a founder, not filtered by a bot." },
      { title: "We reply", desc: "We'll respond with answers, a question or a suggested next step." },
      { title: "We talk it through", desc: "If it makes sense, we set up a conversation about how to work together." },
      { title: "We start small", desc: "A clear, small first step so everyone learns quickly." },
    ],
  },
  {
    type: "cards",
    kicker: "Who we hear from",
    title: "Whoever you are, there's a place for you",
    items: [
      { icon: Heart, title: "Donors & investors", desc: "Support the build and see what it pays for." },
      { icon: Landmark, title: "Agencies & municipalities", desc: "Scope detection and response for your community." },
      { icon: Trees, title: "Landowners", desc: "Talk through nodes on your property." },
      { icon: GraduationCap, title: "Grants & institutions", desc: "Partner on research, funding or education." },
      { icon: Users, title: "Mentors & volunteers", desc: "Lend your skills to the team." },
      { icon: Lightbulb, title: "Everyone else", desc: "Got an idea we haven't thought of? We want to hear it." },
    ],
  },
  {
    type: "faq",
    title: "Before you write",
    items: [
      { q: "How fast will I hear back?", a: "We read and respond to every message. We're a small team, so replies may take a little while — but they will come." },
      { q: "Is my information private?", a: "Your message is used only to respond to you. See our Privacy Policy for details." },
      { q: "I'm a landowner — what should I include?", a: "Roughly how much land, what the terrain is like, and what worries you most about fire. That's enough to start." },
    ],
  },
];

const INTERESTS = ["Donor", "Grant / Institution", "Investor", "Mentor", "Volunteer", "Municipality / Landowner", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", interest: INTERESTS[0], message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.message.trim()) errs.message = "Please include a short message.";
    return errs;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    
    // Simulate network delay for sending message
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", form);
    setStatus("sent");
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-hairline text-white text-sm placeholder:text-slate-tech/60 focus:outline-none focus:ring-2 focus:ring-signal/40 focus:border-signal/40 transition-colors";

  return (
    <div className="bg-obsidian">
      <PageHero
        eyebrow="Company"
        title="Talk to us."
        lead="Donors, grant-makers, investors, mentors, volunteers, municipalities — tell us who you are and how you'd like to be part of the mission."
        accent="signal"
      />
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 reticle-grid opacity-20" />
        <div className="relative mx-auto max-w-[720px] px-6 lg:px-12">
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <CheckCircle2 className="w-14 h-14 text-glacial mx-auto mb-5" />
              <h2 className="font-heading font-semibold text-white text-2xl">Message received.</h2>
              <p className="mt-3 text-slate-tech max-w-md mx-auto leading-relaxed">
                Thank you — a copy of your note is saved on our side and we've been notified.
                We read and respond to every message.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={submit}
              className="p-6 lg:p-8 rounded-2xl border border-hairline bg-white/[0.02] space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-wider text-slate-tech uppercase mb-2">Name *</label>
                  <input className={inputCls} value={form.name} onChange={set("name")} placeholder="Your full name" />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-slate-tech uppercase mb-2">Email *</label>
                  <input className={inputCls} value={form.email} onChange={set("email")} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-wider text-slate-tech uppercase mb-2">Organization</label>
                  <input className={inputCls} value={form.organization} onChange={set("organization")} placeholder="Company, agency, or land (optional)" />
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-slate-tech uppercase mb-2">I'm reaching out as a…</label>
                  <select className={inputCls} value={form.interest} onChange={set("interest")}>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i} className="bg-obsidian text-white">{i}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-wider text-slate-tech uppercase mb-2">Message *</label>
                <textarea
                  className={`${inputCls} min-h-[140px] resize-y`}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your land, your support, or how you'd like to help…"
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>
              {errors.form && (
                <div className="text-sm text-destructive">{errors.form}</div>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-signal text-obsidian text-sm font-semibold hover:glow-amber transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-xs text-slate-tech">
                We respond to every message — every partner matters.
              </p>
            </motion.form>
          )}
        </div>
      </section>
      <BlockList blocks={AFTER_SEND} accent="signal" />
    </div>
  );
}