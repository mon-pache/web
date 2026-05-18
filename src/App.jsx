import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#fbf6ef",
      color: "#3c2a21",
      padding: "40px"
    }}>
      <header style={{textAlign: "center", marginBottom: "60px"}}>
        <h1 style={{fontSize: "4rem", marginBottom: "10px"}}>Mon‑Paché</h1>
        <p style={{fontSize: "1.2rem"}}>
          Accesorios artesanales · Sostenibles · Hechos a mano
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginBottom: "60px"
      }}>
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px"
        }}>
          <h2>✨ Pendientes</h2>
          <p>Diseños únicos y originales hechos a mano.</p>
        </div>

        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px"
        }}>
          <h2>💍 Anillos</h2>
          <p>Complementos elegantes y artesanales.</p>
        </div>

        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px"
        }}>
          <h2>🌸 Resina epóxica</h2>
          <p>Piezas creativas con acabados modernos.</p>
        </div>
      </section>

      <section style={{
        background: "#3c2a21",
        color: "white",
        padding: "40px",
        borderRadius: "30px"
      }}>
        <h2>Responsabilidad Social</h2>
        <p>
          En Mon‑Paché impulsamos talleres artesanales para personas mayores,
          fomentando creatividad, integración y bienestar emocional.
        </p>
      </section>

      <footer style={{
        marginTop: "60px",
        textAlign: "center"
      }}>
        <p>C/ Granada, 1 · Rincón de la Victoria · Málaga</p>
      </footer>
    </div>
  );
}