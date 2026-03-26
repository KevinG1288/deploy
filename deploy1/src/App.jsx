const tips = [
  { cat: "basico", emoji: "📁", title: "Crear un repositorio", desc: "Haz clic en New en tu perfil y dale un nombre a tu proyecto.", code: "git init" },
  { cat: "basico", emoji: "💾", title: "Hacer tu primer commit", desc: "Guarda tus cambios con un mensaje descriptivo.", code: "git commit -m 'primer commit'" },
  { cat: "basico", emoji: "⬆️", title: "Subir cambios (push)", desc: "Envía tus commits al repositorio remoto en GitHub.", code: "git push origin main" },
  { cat: "ramas", emoji: "🌿", title: "Crear una rama", desc: "Trabaja en una funcionalidad sin afectar el código principal.", code: "git checkout -b mi-rama" },
  { cat: "ramas", emoji: "🔀", title: "Unir ramas (merge)", desc: "Fusiona los cambios de tu rama con la rama principal.", code: "git merge mi-rama" },
  { cat: "colaboracion", emoji: "🍴", title: "Fork de un proyecto", desc: "Copia un repositorio ajeno a tu cuenta para modificarlo libremente." },
  { cat: "colaboracion", emoji: "📬", title: "Pull Request", desc: "Propón tus cambios al proyecto original para que los revisen y aprueben." },
  { cat: "avanzado", emoji: "🏷️", title: "Usar .gitignore", desc: "Evita subir archivos innecesarios como node_modules.", code: "node_modules/" },
  { cat: "avanzado", emoji: "⏪", title: "Revertir un commit", desc: "Deshaz el último cambio sin perder el historial.", code: "git revert HEAD" },
];

const categorias = ["all", "basico", "ramas", "colaboracion", "avanzado"];
const labels = { all: "Todos", basico: "Básico", ramas: "Ramas", colaboracion: "Colaboración", avanzado: "Avanzado" };

import { useState } from "react";

function App() {
  const [activo, setActivo] = useState("all");
  const filtrados = activo === "all" ? tips : tips.filter(t => t.cat === activo);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "1.5rem 1rem", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center", paddingBottom: "1.5rem", borderBottom: "1px solid #eee", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: 26, fontWeight: 500, marginBottom: 6 }}>GitHub tips esenciales</h1>
        <p style={{ color: "#666", fontSize: 15 }}>Todo lo que necesitas saber para dominar GitHub</p>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1.25rem" }}>
        {categorias.map(cat => (
          <button key={cat} onClick={() => setActivo(cat)}
            style={{ padding: "5px 14px", borderRadius: 20, border: "1px solid #ccc", cursor: "pointer",
              background: activo === cat ? "#111" : "transparent",
              color: activo === cat ? "#fff" : "#555", fontSize: 13 }}>
            {labels[cat]}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
        {filtrados.map((tip, i) => (
          <div key={i} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12, padding: "1rem 1.1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 22 }}>{tip.emoji}</span>
              <span style={{ fontWeight: 500, fontSize: 14 }}>{tip.title}</span>
              <span style={{ marginLeft: "auto", fontSize: 11, background: "#eef", color: "#446", padding: "2px 8px", borderRadius: 20 }}>{labels[tip.cat]}</span>
            </div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{tip.desc}</p>
            {tip.code && <code style={{ display: "inline-block", marginTop: 6, fontSize: 12, background: "#f5f5f5", padding: "2px 8px", borderRadius: 4 }}>{tip.code}</code>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;