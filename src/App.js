import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

// ── Constants ──────────────────────────────────────────────────────────────────

const WA_NUMBER = "595971000000"; // reemplazá con el número real
const WA_MSG    = encodeURIComponent("Hola Nuna's! 🥤 Quiero hacer un pedido");
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const IG_LINK   = "https://www.instagram.com/nunas.py/";

// ── Animation helpers ──────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "🥦",
    title: "Ingredientes frescos",
    desc: "Seleccionamos los mejores ingredientes naturales, frescos y de temporada cada día.",
  },
  {
    icon: "💚",
    title: "Sano y delicioso",
    desc: "Opciones que cuidan tu cuerpo sin sacrificar el sabor. Comer bien nunca fue tan rico.",
  },
  {
    icon: "⚡",
    title: "Pickup rápido",
    desc: "Pedí por WhatsApp y retirá en minutos. Sin filas, sin esperas innecesarias.",
  },
  {
    icon: "🌅",
    title: "Todo el día",
    desc: "Desayuno, almuerzo o merienda. Siempre tenemos algo rico para cada momento.",
  },
];

const MENU = [
  {
    id: 1,
    name: "Jugos Naturales",
    desc: "Naranja, mango, maracuyá, frutilla y más. Puro sabor sin aditivos.",
    emoji: "🍊",
    color: "#FEF3C7",
    accent: "#D97706",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80",
  },
  {
    id: 2,
    name: "Batidos & Smoothies",
    desc: "Proteicos, energizantes o detox. Batidos con frutas, leche vegetal y superfoods.",
    emoji: "🥤",
    color: "#D4EDDA",
    accent: "#3A6B4A",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80",
  },
  {
    id: 3,
    name: "Snacks Saludables",
    desc: "Barritas, bowls de frutas, yogur granola y opciones para picar sin culpa.",
    emoji: "🍇",
    color: "#EDE9FE",
    accent: "#7C3AED",
    img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&q=80",
  },
  {
    id: 4,
    name: "Almuerzos Frescos",
    desc: "Ensaladas completas, bowls de arroz y proteína, wraps y opciones vegetarianas.",
    emoji: "🥗",
    color: "#ECFDF5",
    accent: "#059669",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
  },
  {
    id: 5,
    name: "Combos del Día",
    desc: "El mejor combo al mejor precio. Bebida + snack o almuerzo + jugo.",
    emoji: "🎁",
    color: "#FEF2F2",
    accent: "#DC2626",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
  },
  {
    id: 6,
    name: "Especiales",
    desc: "Bowls de açaí, parfait de frutas y creaciones exclusivas de temporada.",
    emoji: "✨",
    color: "#FFF7ED",
    accent: "#EA580C",
    img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&q=80",
  },
];

const TESTIMONIALS = [
  {
    text: "Rico, fresco y práctico. No hay mejor opción para el almuerzo en Asunción.",
    name: "Valeria M.",
    role: "Cliente frecuente",
    avatar: "VM",
    color: "#D4EDDA",
  },
  {
    text: "Siempre vuelvo por los batidos. El de mango con maracuyá es una locura 🥭",
    name: "Rodrigo P.",
    role: "Fan de los smoothies",
    avatar: "RP",
    color: "#FEF3C7",
  },
  {
    text: "Ideal para comer sano sin complicarse. El pickup es súper rápido, amo el servicio.",
    name: "Lucía T.",
    role: "Cliente habitual",
    avatar: "LT",
    color: "#EDE9FE",
  },
];

// ── Navbar ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Menú", href: "#menu" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-soft" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🥤</span>
          <span className="font-display font-700 text-xl text-forest leading-none">
            nuna's
            <span className="block text-[10px] font-sans font-600 tracking-widest uppercase text-sage -mt-0.5">
              foods & smoothies
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans font-600 text-sm text-bark hover:text-forest transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2.5 !px-5 !text-sm">
            <WhatsAppIcon size={16} /> Pedí ya
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-mint/60"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-0.5 bg-forest rounded" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-0.5 bg-forest rounded" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-0.5 bg-forest rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-nav md:hidden border-t border-mint/40 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans font-600 text-bark hover:text-forest transition-colors no-underline py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !text-sm w-full justify-center">
                <WhatsAppIcon size={18} /> Hacer pedido
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ── WhatsApp Floating Button ───────────────────────────────────────────────────

function FloatingWA() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-whatsapp"
      aria-label="Pedí por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full opacity-30 blur-3xl" style={{ background: "#A8C23F" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: "#D4A017" }} />

      <div className="max-w-6xl mx-auto px-5 py-16 md:py-0 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="section-tag">🌿 Asunción, Paraguay</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-900 text-4xl md:text-6xl text-bark leading-tight mb-5"
          >
            Natural,{" "}
            <span className="text-gradient italic">nutritivo</span>
            <br />y delicioso.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-sans text-earth text-lg leading-relaxed mb-8 max-w-md"
          >
            Jugos, batidos, snacks saludables y almuerzos frescos en Asunción.
            <br className="hidden md:block" />
            <span className="font-600 text-bark"> Pedí fácil, comé rico y seguí con tu rutina.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={20} /> Pedí por WhatsApp
            </a>
            <a href="#menu" className="btn-outline">
              Ver menú 🥗
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="flex -space-x-2">
              {["#D4EDDA","#FEF3C7","#EDE9FE"].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-sm font-700" style={{ background: c }}>
                  {["😊","🌿","💪"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-earth font-500">
              <span className="font-700 text-bark">+200 clientes</span> satisfechos cada semana
            </p>
          </motion.div>
        </div>

        {/* Hero image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square">
            {/* Main image */}
            <div className="absolute top-0 left-8 right-0 bottom-8 rounded-4xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=700&q=80"
                alt="Smoothies y jugos naturales Nuna's"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(58,107,74,0.15), transparent)" }} />
            </div>
            {/* Floating card 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -left-4 bottom-16 glass-card rounded-2xl p-3 shadow-card flex items-center gap-3"
            >
              <span className="text-2xl">🥗</span>
              <div>
                <p className="font-700 text-bark text-sm leading-none">Bowl del día</p>
                <p className="text-sage text-xs mt-0.5">Fresco & nutritivo</p>
              </div>
            </motion.div>
            {/* Floating card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-2 top-8 glass-card rounded-2xl p-3 shadow-card"
            >
              <p className="text-xs font-600 text-bark">⭐ 4.9 / 5</p>
              <p className="text-[10px] text-earth mt-0.5">clientes felices</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-sage"
      >
        <span className="text-xs font-500 tracking-widest uppercase">Explorá</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="text-lg">↓</motion.div>
      </motion.div>
    </section>
  );
}

// ── Benefits ───────────────────────────────────────────────────────────────────

function Benefits() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <span className="section-tag">Por qué elegirnos</span>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-bark mt-2">
            Comida que se siente bien
          </h2>
          <p className="text-earth mt-3 max-w-md mx-auto text-base">
            Arrancá el día bien, seguí mejor y cerralo con algo rico.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(58,107,74,0.14)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 shadow-soft flex flex-col gap-3 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-mint flex items-center justify-center text-2xl shadow-soft">
                  {b.icon}
                </div>
                <h3 className="font-700 text-bark text-base">{b.title}</h3>
                <p className="text-earth text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Menu ───────────────────────────────────────────────────────────────────────

function Menu() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="menu" className="py-20" style={{ background: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <span className="section-tag">Nuestro menú</span>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-bark mt-2">
            Algo rico para cada momento
          </h2>
          <p className="text-earth mt-3 max-w-md mx-auto text-base">
            Comida saludable que se siente ligera y se disfruta de verdad.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft cursor-pointer group"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    animate={{ scale: hovered === item.id ? 1.07 : 1 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-3 left-3 w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-soft"
                    style={{ background: item.color }}
                  >
                    {item.emoji}
                  </div>
                  <AnimatePresence>
                    {hovered === item.id && (
                      <motion.a
                        href={WA_LINK}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center no-underline"
                        style={{ background: "rgba(58,107,74,0.55)", backdropFilter: "blur(3px)" }}
                      >
                        <span className="btn-whatsapp !py-2.5 !px-5 !text-sm">
                          <WhatsAppIcon size={16} /> Pedí ahora
                        </span>
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-700 text-bark text-base mb-1.5" style={{ color: item.accent }}>{item.name}</h3>
                  <p className="text-earth text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="flex justify-center mt-10">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            <WhatsAppIcon size={20} /> Ver menú completo por WhatsApp
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="nosotros" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <FadeIn className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-card col-span-2 h-56">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80"
                  alt="Preparación de comida saludable Nuna's"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-card h-40">
                <img
                  src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80"
                  alt="Jugos frescos Nuna's"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-card h-40">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80"
                  alt="Bowl saludable Nuna's"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Badge */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 glass-card rounded-2xl px-5 py-3 shadow-card text-center"
            >
              <p className="font-display font-700 text-3xl text-forest">100%</p>
              <p className="font-600 text-xs text-earth tracking-wide">Natural & fresco</p>
            </motion.div>
          </FadeIn>

          {/* Text */}
          <FadeUp delay={0.15}>
            <span className="section-tag">Nuestra historia</span>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-bark mt-2 mb-5 leading-tight">
              Comer bien <span className="text-gradient italic">nunca fue tan fácil</span>
            </h2>
            <p className="text-earth leading-relaxed mb-4">
              En <strong className="text-bark">Nuna's Foods & Smoothies</strong> creemos que alimentarse bien no tiene que ser complicado ni aburrido. Cada día preparamos todo con ingredientes frescos, pensando en tu bienestar y en tu paladar.
            </p>
            <p className="text-earth leading-relaxed mb-8">
              Desde Asunción, ofrecemos una experiencia cálida, cercana y rápida. Porque merecés algo rico, fresco y saludable — todos los días.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <WhatsAppIcon size={18} /> Hacer pedido
              </a>
              <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn-outline">
                <InstagramIcon size={18} /> Instagram
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-20" style={{ background: "#D4EDDA" }}>
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <span className="section-tag">Lo que dicen</span>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-bark mt-2">
            Ellos ya lo probaron 🥤
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-soft flex flex-col gap-4 h-full"
              >
                <p className="text-2xl">"</p>
                <p className="text-bark font-500 leading-relaxed flex-1 text-sm">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-mint">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-700 text-sm text-forest"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-700 text-bark text-sm">{t.name}</p>
                    <p className="text-earth text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <FadeUp className="text-center mb-14">
          <span className="section-tag">Ubicación & horarios</span>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-bark mt-2">
            Encontranos en Asunción
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <FadeUp delay={0.05}>
              <div className="bg-white rounded-3xl p-6 shadow-soft flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-mint flex items-center justify-center text-xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-700 text-bark mb-1">Dirección</h3>
                  <p className="text-earth text-sm">Av. Dr. Felipe Molas López & Veterano de la Guerra del 70</p>
                  <p className="text-bark text-xs mt-0.5 font-600">Asunción, Paraguay</p>
                  <p className="text-sage text-xs mt-1 font-500">Retiro en local · Pickup disponible</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-white rounded-3xl p-6 shadow-soft flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-mint flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                <div>
                  <h3 className="font-700 text-bark mb-2">Horarios</h3>
                  <div className="flex flex-col gap-1 text-sm text-earth">
                    <div className="flex justify-between gap-8">
                      <span>Lunes – Viernes</span><span className="font-600 text-bark">7:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sábados</span><span className="font-600 text-bark">8:00 – 15:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Domingos</span><span className="text-earth">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white rounded-3xl p-6 shadow-soft flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-mint flex items-center justify-center text-xl flex-shrink-0">📱</div>
                <div className="flex-1">
                  <h3 className="font-700 text-bark mb-3">Contacto</h3>
                  <div className="flex flex-col gap-3">
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp !py-2.5 !px-4 !text-sm w-full justify-center">
                      <WhatsAppIcon size={18} /> Escribinos por WhatsApp
                    </a>
                    <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn-outline !py-2.5 !px-4 !text-sm w-full justify-center">
                      <InstagramIcon size={18} /> Seguinos en Instagram
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Map embed */}
          <FadeIn delay={0.2} className="h-full min-h-72">
            <div className="rounded-3xl overflow-hidden shadow-card h-full min-h-72" style={{ background: "#1a1a2e" }}>
              <iframe
                title="Nuna's ubicación — Av. Molas López & Veterano de la Guerra del 70, Asunción"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7!2d-57.5989!3d-25.3005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da981b2f5c4b5%3A0x1!2sAv.+Doctor+Felipe+Molas+L%C3%B3pez+%26+Veterano+de+la+Guerra+del+70%2C+Asunci%C3%B3n%2C+Paraguay!5e0!3m2!1ses!2spy!4v1704726000000!5m2!1ses!2spy"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: 288,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.85) brightness(0.92)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #2C3E2D 0%, #3A6B4A 100%)" }}>
      <div className="max-w-3xl mx-auto px-5 text-center">
        <FadeUp>
          <span className="inline-block bg-white/10 text-white text-xs font-700 tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
            🥤 Pedí hoy
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-white leading-tight mb-5">
            Elegí algo rico,{" "}
            <span className="italic" style={{ color: "#A8C23F" }}>fresco</span>{" "}
            y saludable hoy.
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Un pedido por WhatsApp y en minutos tenés tu comida lista para retirar. Así de fácil, así de rico.
          </p>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="btn-whatsapp !text-base !py-4 !px-8 inline-flex"
          >
            <WhatsAppIcon size={22} /> Hacer pedido por WhatsApp
          </motion.a>
          <p className="text-white/50 text-sm mt-5">Sin filas · Sin complicaciones · Pickup rápido</p>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-bark py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🥤</span>
          <span className="font-display font-700 text-white text-lg">nuna's</span>
          <span className="text-white/40 text-sm">· Foods & Smoothies</span>
        </div>
        <p className="text-white/40 text-xs text-center">
          © {new Date().getFullYear()} Nuna's Foods & Smoothies · Asunción, Paraguay
        </p>
        <div className="flex items-center gap-4">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
            <WhatsAppIcon size={20} />
          </a>
          <a href={IG_LINK} target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
            <InstagramIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Menu />
        <About />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
