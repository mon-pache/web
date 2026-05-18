import React from "react";
import {
  ShoppingBag,
  Leaf,
  HeartHandshake,
  MapPin,
  Instagram,
  Sparkles,
  Mail,
  Clock,
  Menu,
  Gem,
  Palette,
  Users
} from "lucide-react";
import "./style.css";

const productos = [
  {
    nombre: "Pendientes artesanales",
    texto: "Diseños únicos hechos a mano para aportar color, estilo y personalidad.",
    emoji: "✨"
  },
  {
    nombre: "Anillos y complementos",
    texto: "Piezas originales para quienes buscan accesorios diferentes y especiales.",
    emoji: "💍"
  },
  {
    nombre: "Accesorios de resina",
    texto: "Creaciones modernas con acabado artesanal, cuidadas al detalle.",
    emoji: "🌸"
  }
];

const valores = [
  {
    icono: <Leaf />,
    titulo: "Sostenibilidad",
    texto: "Apostamos por una producción responsable y un consumo más consciente."
  },
  {
    icono: <Sparkles />,
    titulo: "Originalidad",
    texto: "Cada accesorio se diseña con creatividad para que sea único."
  },
  {
    icono: <HeartHandshake />,
    titulo: "Comercio local",
    texto: "Colaboramos con artesanos de proximidad y apoyamos el comercio justo."
  }
];

const pasos = [
  {
    icono: <Palette />,
    titulo: "Diseño",
    texto: "Creamos diseños propios inspirados en tendencias actuales y piezas atemporales."
  },
  {
    icono: <Gem />,
    titulo: "Elaboración",
    texto: "Trabajamos cada complemento de forma artesanal, cuidando materiales y acabados."
  },
  {
    icono: <ShoppingBag />,
    titulo: "Venta B2C",
    texto: "Vendemos directamente al cliente final mediante tienda física y tienda online."
  }
];

export default function App() {
  return (
    <div className="page">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Mon-Paché inicio">
          <div className="logo">MP</div>
          <div>
            <strong>Mon‑Paché</strong>
            <span>Accesorios artesanales</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#productos">Productos</a>
          <a href="#modelo">Modelo</a>
          <a href="#rsc">RSC</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="nav-cta" href="#contacto">Comprar ahora</a>
        <Menu className="menu-icon" />
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-text">
            <p className="eyebrow">Hecho a mano · Sostenible · Local</p>
            <h1>Accesorios artesanales con historia propia</h1>
            <p className="hero-copy">
              En Mon‑Paché S.L. diseñamos y vendemos complementos hechos a mano
              para personas que buscan productos originales, sostenibles y con personalidad.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#productos">Ver colección</a>
              <a className="button secondary" href="#modelo">Conoce la marca</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-card card-1">
              <span>💍</span>
              <strong>Anillos únicos</strong>
            </div>
            <div className="mini-card card-2">
              <span>🌿</span>
              <strong>Diseño sostenible</strong>
            </div>
            <div className="mini-card card-3">
              <span>🧶</span>
              <strong>Hecho a mano</strong>
            </div>
            <div className="mini-card card-4">
              <span>🎁</span>
              <strong>Regalos especiales</strong>
            </div>
          </div>
        </section>

        <section id="productos" className="section white-section">
          <div className="section-title">
            <p className="eyebrow">Nuestra colección</p>
            <h2>Complementos con esencia artesanal</h2>
            <p>Productos pensados para destacar por su diseño, calidad y elaboración cuidada.</p>
          </div>

          <div className="product-grid">
            {productos.map((producto) => (
              <article className="product-card" key={producto.nombre}>
                <div className="product-emoji">{producto.emoji}</div>
                <h3>{producto.nombre}</h3>
                <p>{producto.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="modelo" className="section model-section">
          <div className="model-text">
            <p className="eyebrow">Modelo de negocio</p>
            <h2>Venta directa al cliente final</h2>
            <p>
              Nuestro modelo es Business to Consumer, porque vendemos directamente
              nuestros productos al consumidor final a través de tienda física y online.
              También complementamos la oferta con creaciones de artesanos locales.
            </p>
          </div>

          <div className="steps">
            {pasos.map((paso) => (
              <article className="step-card" key={paso.titulo}>
                <div className="icon">{paso.icono}</div>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section values-section">
          <div className="section-title centered">
            <p className="eyebrow">Nuestros valores</p>
            <h2>Una marca responsable y cercana</h2>
          </div>

          <div className="values-grid">
            {valores.map((valor) => (
              <article className="value-card" key={valor.titulo}>
                <div className="icon">{valor.icono}</div>
                <div>
                  <h3>{valor.titulo}</h3>
                  <p>{valor.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="rsc" className="rsc-section">
          <div>
            <p className="eyebrow light">Responsabilidad Social Corporativa</p>
            <h2>Manos con historia</h2>
            <p>
              Impulsamos talleres creativos con personas mayores para fomentar la
              integración, la creatividad y el bienestar emocional a través de la artesanía.
            </p>
          </div>

          <div className="rsc-card">
            <Users />
            <h3>Arte, comunidad y bienestar</h3>
            <p>
              Una iniciativa social que conecta generaciones y refuerza nuestro compromiso
              con el entorno local.
            </p>
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="contact-box">
            <div>
              <p className="eyebrow">Visítanos</p>
              <h2>Mon‑Paché S.L.</h2>
              <ul className="contact-list">
                <li><MapPin /> C/ Granada, 1, Rincón de la Victoria, Málaga</li>
                <li><Clock /> Tienda física y venta online</li>
                <li><Mail /> contacto@monpache.com</li>
                <li><Instagram /> @monpache</li>
              </ul>
            </div>

            <div className="contact-card">
              <h3>¿Buscas un complemento especial?</h3>
              <p>
                Contacta con nosotras y descubre piezas artesanales creadas con cariño,
                diseño y compromiso local.
              </p>
              <a className="button primary" href="mailto:contacto@monpache.com">
                Contactar
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Mon‑Paché S.L. · Complementos artesanales hechos a mano
      </footer>
    </div>
  );
}
