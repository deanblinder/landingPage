import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(120deg, #f0f4ff 0%, #fff 100%)" }}>
      <section style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "#222", marginBottom: "1.2rem", letterSpacing: "-1px" }}>
          Welcome to MyApp
        </h1>
        <p style={{ fontSize: "1.35rem", color: "#444", marginBottom: "2.2rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          The easiest way to launch your next project. Modern, fast, and beautiful by default.
        </p>
        <a href="#features" style={{
          display: "inline-block",
          background: "linear-gradient(90deg, #0070f3 60%, #00c6fb 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.18rem",
          borderRadius: "2em",
          padding: "0.8em 2.2em",
          textDecoration: "none",
          boxShadow: "0 2px 12px rgba(0,112,243,0.10)",
          transition: "background 0.18s, box-shadow 0.18s, transform 0.18s"
        }}>Get Started</a>
      </section>
    </main>
  );
}
