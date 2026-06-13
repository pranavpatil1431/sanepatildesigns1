import { createFileRoute } from "@tanstack/react-router";
import menuHero from "@/assets/menu-hero.jpg";
import workspace from "@/assets/workspace.jpg";
import sarangAsset from "@/assets/sarang.jpeg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import visitingCardAsset from "@/assets/visiting-card.jpeg.asset.json";
import branding from "@/assets/branding.jpg";
import qrMenu from "@/assets/qr-menu.jpg";
import ecommerce from "@/assets/ecommerce.jpg";
import social from "@/assets/social.jpg";
import standee from "@/assets/standee.jpg";
import identity from "@/assets/identity.jpg";
import ads from "@/assets/ads.jpg";
import ceo from "@/assets/ceo.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";
import work5 from "@/assets/work5.jpg";
import work6 from "@/assets/work6.jpg";
import { Zap, Palette, Trophy, Check, MessageCircle, ArrowRight, Instagram, MessageSquare } from "lucide-react";
import { useState, type MouseEvent } from "react";

const PHONE = "8432830040";
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi Sarang, I'd like to know more about Sanepatil Designs & Flex Printing services.")}`;
const TEL_LINK = `tel:+91${PHONE}`;
const INSTAGRAM_URL = "https://www.instagram.com/team.s.media_/";

// Section checkpoints for easy tracing / analytics
const SECTIONS = [
  { id: "hero", label: "1. Hero" },
  { id: "features", label: "2. Features" },
  { id: "services", label: "3. Services" },
  { id: "what-we-do", label: "4. What We Do" },
  { id: "about", label: "5. About" },
  { id: "work", label: "6. Work" },
  { id: "pricing", label: "7. Pricing" },
  { id: "card", label: "8. Visiting Card" },
  { id: "contact", label: "9. Contact" },
];

function logCheckpoint(name: string, extra?: Record<string, unknown>) {
  // Lightweight tracing — visible in browser console for QA
  // eslint-disable-next-line no-console
  console.log(`[checkpoint] ${name}`, extra ?? "");
}

function openExternal(event: MouseEvent<HTMLAnchorElement>, url: string, checkpoint: string) {
  event.preventDefault();
  logCheckpoint(checkpoint, { url });

  try {
    if (window.top) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // Fallback below for restricted preview frames.
  }

  const popup = window.open(url, "_blank", "noopener,noreferrer");
  if (!popup) window.location.href = url;
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_top"
      rel="noopener noreferrer"
      onClick={(event) => openExternal(event, WA_LINK, "whatsapp_float_click")}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanepatil Designs & Flex Printing — Design to Print Under One Roof" },
      { name: "description", content: "Creative design, branding and premium flex printing services. Logo, banner, flex, social media posts — everything your brand needs." },
      { property: "og:title", content: "Sanepatil Designs & Flex Printing" },
      { property: "og:description", content: "From Design to Print — everything your brand needs under one roof." },
    ],
  }),
  component: Index,
});

const heroImages = [workspace, branding, menuHero, standee, social];
const marqueeItems = [
  "Social Media Marketing", "Branding Solutions", "Logo Design", "🖥️ Website Design",
  "👨🏻‍💻 Results-Driven Designs", "Menu Card Design", "Brochure Design", "🚀 2x Business Growth",
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Sanepatil Designs & Flex Printing" className="h-16 md:h-20 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition">About us</a>
          <a href="#services" className="hover:text-primary transition">What we do</a>
          <a href="#work" className="hover:text-primary transition">Our work</a>
          <a href="#pricing" className="hover:text-primary transition">Pricing</a>
          <a href="#card" className="hover:text-primary transition">Visiting Card</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition">
          Contact us
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" data-checkpoint="hero" className="relative overflow-hidden bg-gradient-hero pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
          From <span className="text-gradient">Design</span> to <span className="text-gradient">Print</span>
          <br className="hidden md:block" /> Everything Your Brand Needs
          <br className="hidden md:block" /> Under One Roof
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground font-semibold">Creative Designs | Premium Printing</p>
        <p className="mt-2 text-base md:text-lg text-muted-foreground">🎨 Logo • Banner • Flex • Social Media Post</p>

        <div className="mt-16 overflow-hidden w-full">
          <div className="flex gap-6 animate-marquee w-max">
            {[...heroImages, ...heroImages].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Sanepatil design showcase"
                loading={i === 0 ? "eager" : "lazy"}
                width={400}
                height={500}
                className="w-[220px] md:w-[320px] h-[280px] md:h-[400px] rounded-2xl shadow-elegant object-cover shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Zap, title: "⚡ Quick Turnaround", desc: "डिझाइनपासून प्रिंटपर्यंत जलद सेवा — वेळेत आणि दर्जेदार." },
    { icon: Palette, title: "🎨 Custom Creative Designs", desc: "तुमच्या गरजेनुसार युनिक आणि आकर्षक डिझाइन्स." },
    { icon: Trophy, title: "🏆 Quality & Commitment", desc: "उत्कृष्ट गुणवत्ता आणि वेळेची हमी — पूर्ण समाधान." },
  ];
  return (
    <section id="features" data-checkpoint="features" className="py-20 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {items.map((it, i) => (
          <div key={i} className="text-center md:text-left">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-primary items-center justify-center text-primary-foreground shadow-elegant">
              <it.icon className="w-7 h-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{it.title}</h3>
            <p className="mt-2 text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="py-8 overflow-hidden bg-secondary text-secondary-foreground">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((t, i) => (
          <span key={i} className="text-2xl md:text-4xl font-bold mx-8 flex items-center gap-8">
            {t} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Design & Branding", img: branding, desc: "We craft high-converting visual identities for restaurants. From menu cards to complete branding, our designs are built using customer psychology to increase cravings and boost orders.", cta: "WhatsApp Us" },
    { title: "E-commerce Menu Solutions", img: ecommerce, desc: "Launch your own menu card selling website like MenuCardStudio. We help restaurants and agencies sell menu designs, templates, and printing services online with ease.", cta: "Online Shopping" },
    { title: "Digital QR Menu", img: qrMenu, desc: "Upgrade from text menus to interactive digital menus. Our QR-based system increases engagement, highlights high-margin items, and improves customer ordering experience.", cta: "Create Digital Menu" },
  ];
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">Our Core Services</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold">What we deliver</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={600} height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <a href={WA_LINK} target="_top" rel="noopener noreferrer" onClick={(event) => openExternal(event, WA_LINK, `service_whatsapp_${i + 1}`)} className="mt-5 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const items = [
    { title: "Brand Identity Design", desc: "Logos, business cards, and brand guidelines that make your business unforgettable.", img: identity },
    { title: "Marketing Collateral", desc: "Standees, banners, posters, and brochures that captivate your audience and communicate your message.", img: standee },
    { title: "Social Media Solutions", desc: "Scroll-stopping posts, templates, and ad creatives tailored to engage and convert.", img: social },
    { title: "Custom Campaigns", desc: "Comprehensive branding and advertising strategies that deliver measurable growth.", img: ads },
  ];
  return (
    <section id="what-we-do" data-checkpoint="what-we-do" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">What We Do</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">We empower your brand with a full spectrum of creative solutions</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-card shadow-soft">
              <img src={it.img} alt={it.title} loading="lazy" width={500} height={400} className="w-full aspect-[5/4] object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-lg">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">About Us</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Designing growth, one brand at a time.</h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Sanepatil Designs & Flex Printing helps businesses build a strong visual identity with impactful designs, premium flex printing, banners, visiting cards, and social media creatives — delivered with creativity, quality and commitment.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-elegant max-w-md mx-auto bg-muted">
            <img
              src={sarangAsset.url}
              alt="Sarang Netaji Patil, Founder & Creative Designer"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold">Sarang Netaji Patil <span className="text-muted-foreground font-normal text-base">— Founder & Creative Designer</span></h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Sarang is a passionate graphic designer and printing professional specializing in creative design, branding, and premium printing solutions. Through Sanepatil Designs & Flex Printing, he transforms ideas into powerful brand experiences that help businesses stand out and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const works = [work1, work2, work3, work4, work5, work6];
  return (
    <section id="work" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">Our Work Showcase</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Recent projects</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition group">
              <img src={w} alt={`Project ${i + 1}`} loading="lazy" width={600} height={600} className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Basic Custom Logo", price: "₹3,999", tagline: "Unique, personalized logo that represents your brand's identity.", features: ["1 Designer", "2 Logo Concepts + Variations", "5 Free Revisions", "3 Mockup Presentations", "HD Social Media Logo", "Delivery: 5–6 Working Days"] },
    { name: "Premium Logo & Stationery", price: "₹7,999", tagline: "Professional logo and print package for a cohesive brand image.", features: ["1 Designer", "3 Logo Concepts + Variations", "5 Free Revisions", "Business Card, Letterhead, Envelope", "3 Mockup Presentations", "Delivery: 6–7 Working Days"], featured: true },
    { name: "Startup Brand Identity Kit", price: "₹14,999", tagline: "Complete package including logo, stationery & social media branding.", features: ["2 Designers", "Industry Research", "4 Logo Concepts", "Unlimited Revisions", "Social Media Designs", "Office Kit + Brand Book"] },
  ];
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">Pricing</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Standard plans & pricing</h2>
          <p className="mt-4 text-muted-foreground">Choose a plan and let's make great work together.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-3xl p-8 border transition ${p.featured ? "bg-secondary text-secondary-foreground border-secondary shadow-elegant scale-[1.02]" : "bg-card border-border shadow-soft"}`}>
              <p className={`text-xs uppercase tracking-widest font-semibold ${p.featured ? "text-primary" : "text-muted-foreground"}`}>{p.name}</p>
              <p className="mt-4 text-5xl font-bold">{p.price}</p>
              <p className={`mt-3 text-sm ${p.featured ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{p.tagline}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${p.featured ? "text-primary" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={WA_LINK} target="_top" rel="noopener noreferrer" onClick={(event) => openExternal(event, WA_LINK, `pricing_whatsapp_${i + 1}`)} className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold transition ${p.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:opacity-90"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold">Ready to stand out?</h2>
        <p className="mt-4 text-xl opacity-90">Get a free quotation and a design that converts.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={WA_LINK} target="_top" rel="noopener noreferrer" onClick={(event) => openExternal(event, WA_LINK, "cta_whatsapp")} className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp: {PHONE}
          </a>
          <a href={TEL_LINK} onClick={() => logCheckpoint("cta_call")} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function VisitingCard() {
  const [open, setOpen] = useState(false);
  return (
    <section id="card" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-primary font-semibold uppercase tracking-widest text-sm">Visiting Card</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Tap the card to connect</h2>
        <p className="mt-3 text-muted-foreground">Click on the visiting card below for a personal welcome from the owner.</p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-10 inline-block rounded-3xl overflow-hidden shadow-elegant hover:scale-[1.02] transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/40"
          aria-label="Open visiting card"
        >
          <img src={visitingCardAsset.url} alt="Sanepatil Designs visiting card" className="w-full max-w-2xl h-auto block" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card text-card-foreground rounded-3xl max-w-lg w-full p-8 shadow-elegant relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition flex items-center justify-center text-lg font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-center">
              <div className="inline-flex w-16 h-16 rounded-full bg-gradient-primary items-center justify-center text-primary-foreground text-2xl mb-4">
                🙏
              </div>
              <h3 className="text-2xl font-bold">नमस्कार! Welcome 🌸</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                धन्यवाद की तुम्ही आमच्या वेबसाईटला भेट दिली! मी <b>सारंग पाटील</b> — Sanepatil Designs & Flex Printing चा संस्थापक. तुमच्या व्यवसायाला एक मजबूत ओळख देण्यासाठी आम्ही नेहमी तत्पर आहोत. कोणत्याही डिझाइन किंवा प्रिंटिंग संबंधी कामासाठी निःसंकोच संपर्क करा.
              </p>

              <div className="mt-6 text-left bg-muted rounded-2xl p-5">
                <p className="font-bold text-lg">सानेपाटील</p>
                <p className="text-sm text-muted-foreground">डिझाईन फ्लेक्स प्रिंटींग</p>
                <p className="mt-2 text-sm">📍 गौराई गल्ली, कामेरी, ता: वाळवा, जि: सांगली</p>
                <p className="mt-2 text-sm">👤 सारंग पाटील</p>
                <p className="text-sm">📞 <a href={TEL_LINK} className="text-primary font-semibold">{PHONE}</a></p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WA_LINK} target="_top" rel="noopener noreferrer" onClick={(event) => openExternal(event, WA_LINK, "visiting_card_whatsapp")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold hover:opacity-90 transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={TEL_LINK} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-full font-semibold hover:opacity-90 transition">
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Sanepatil Designs & Flex Printing" className="h-10 w-auto bg-background rounded-md p-1" />
        </div>
        <div className="flex items-center gap-5">
          <a href={INSTAGRAM_URL} target="_top" rel="noopener noreferrer" onClick={(event) => openExternal(event, INSTAGRAM_URL, "footer_instagram")} aria-label="Instagram" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></a>
          <a href={WA_LINK} target="_top" rel="noopener noreferrer" onClick={(event) => openExternal(event, WA_LINK, "footer_whatsapp")} aria-label="WhatsApp" className="hover:text-primary transition"><MessageCircle className="w-5 h-5" /></a>
          <a href={TEL_LINK} onClick={() => logCheckpoint("footer_call")} aria-label="Call" className="hover:text-primary transition font-bold text-sm">{PHONE}</a>
        </div>
        <p className="text-sm opacity-70 text-center md:text-right">© 2026 Sanepatil Designs & Flex Printing, Kameri.<br/>All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <Marquee />
      <Services />
      <WhatWeDo />
      <About />
      <Work />
      <Pricing />
      <VisitingCard />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
