import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Phone, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import heroImg from "@/assets/emad-hero.png";
import portraitImg from "@/assets/emad-portrait.png";
import businessImg from "@/assets/emad-business.jpg";
import score from "@/assets/score.jpg";
import { content, type Lang } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export function Site({ lang }: { lang: Lang }) {
  const t = content[lang];
  const rtl = lang === "ar";
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const d = saved ? saved === "dark" : true;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    localStorage.setItem("theme", d ? "dark" : "light");
  };

  const Arrow = rtl ? ArrowLeft : ArrowRight;
  const navIds = ["home", "about", "business", "sports", "contact"] as const;
  const featureImages = [businessImg, portraitImg, score];
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl(rtl ? "/ar" : "/en")}#person`,
    name: "عماد كيطون",
    alternateName: "Emad Keton",
    url: absoluteUrl(rtl ? "/ar" : "/en"),
    description: t.heroText,
    jobTitle: rtl ? "رجل أعمال" : "Syrian Businessman",
    nationality: "Syrian",
    telephone: "+963982666500",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Damascus",
      addressCountry: "SY",
    },
  };

  return (
    <div dir={rtl ? "rtl" : "ltr"} lang={lang} className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-3 mx-3 md:mx-auto md:max-w-6xl rounded-full border bg-card/85 text-card-foreground shadow-elegant backdrop-blur-xl"
            : "top-0 bg-transparent text-hero-foreground"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide">
            {t.name}
          </a>
          <nav className="hidden gap-7 text-sm md:flex">
            {navIds.map((id, i) => (
              <a key={id} href={`#${id}`} className="opacity-80 transition hover:text-accent hover:opacity-100">
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to={rtl ? "/en" : "/ar"}
              className="rounded-full border border-current/30 px-3 py-1.5 text-xs font-semibold"
            >
              {rtl ? "EN" : "عربي"}
            </Link>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-full border border-current/30 p-2"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-hero-display text-hero-foreground">
        <div className="relative mx-auto grid min-h-screen max-w-6xl items-end gap-8 px-6 pt-28 md:grid-cols-2">
          <div className="animate-fade-up self-center pb-12">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">{t.name}</h1>
            <div className="my-6 h-px w-24 bg-gold-gradient" />
            <p className="text-lg font-medium opacity-90">{t.tagline}</p>
            <p className="mt-4 max-w-lg leading-relaxed opacity-70">{t.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition hover:scale-[1.03]">
                {t.ctaJourney} <Arrow size={16} />
              </a>
              <a href="#contact" className="rounded-full border border-hero-foreground/30 px-6 py-3 text-sm font-semibold transition hover:bg-hero-foreground/10">
                {t.ctaContact}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center self-end">
          {/*  <div className="absolute bottom-0 h-[80%] w-[80%] rounded-t-full bg-gradient-to-t from-accent/25 to-transparent" />*/}
            <img
              src={heroImg}
              alt={t.name}
              width={1102}
              height={1427}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className={`hero-image-tone relative max-h-[85vh] w-auto object-contain ${!rtl ? "scale-x-[-1]" : ""}`}
            />
          </div>
        </div>
      </section>

      {/* FACTS */}
      <div className="border-b bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {t.facts.map(([k, v]) => (
            <div key={k}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
              <p className="mt-1 font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </div>

      <main id="main-content">
        <Feature id="about" eyebrow="01" title={t.aboutTitle} text={t.about} img={featureImages[0]} alt={t.name} mirror={rtl} />
        <Feature id="business" eyebrow="02" title={t.businessTitle} text={t.business} img={featureImages[1]} alt={t.name} mirror={rtl} reverse tags={t.businessTags} />
        <Feature id="sports" eyebrow="03" title={t.sportsTitle} text={t.sports} img={featureImages[2]} alt={t.name} tags={t.sportsTags} />
      </main>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-hero p-10 text-hero-foreground shadow-elegant md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">04</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t.contactTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-hero-foreground/15 p-6">
              <MapPin className="shrink-0 text-accent" />
              <p className="leading-relaxed">{t.address}</p>
            </div>
            <a href="tel:0982666500" className="flex gap-4 rounded-2xl border border-hero-foreground/15 p-6 transition hover:bg-hero-foreground/5">
              <Phone className="shrink-0 text-accent" />
              <span dir="ltr" className="text-xl font-semibold">0982 666 500</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {t.name} · {t.rights} · <span dir="ltr">0982666500</span>
      </footer>
    </div>
  );
}

function Feature({
  id, eyebrow, title, text, img, alt, mirror, reverse, tags,
}: {
  id: string; eyebrow: string; title: string; text: string; img: string; alt: string; mirror?: boolean; reverse?: boolean; tags?: string[];
}) {
  return (
    <section id={id} className="px-6 py-24">
      <div className={`mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl border border-accent/40" />
          <div className="relative flex aspect-[3/4] items-end justify-center overflow-hidden rounded-3xl bg-card-gradient shadow-elegant">
            <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" />
            <img
              src={img}
              alt={alt}
              width={img === businessImg ? 1024 : 1086}
              height={img === businessImg ? 1536 : 1448}
              loading="lazy"
              decoding="async"
              className={`h-full max-h-full w-full max-w-full object-contain ${mirror ? "scale-x-[-1]" : ""}`}
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.35em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h2>
          <div className="my-6 h-px w-20 bg-gold-gradient" />
          <p className="text-lg leading-loose text-muted-foreground">{text}</p>
          {tags && (
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((x) => (
                <span key={x} className="rounded-full border bg-card px-4 py-1.5 text-sm">{x}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
