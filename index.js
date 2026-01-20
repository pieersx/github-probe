/**
 * 🚀 Git & GitHub Guide - Interactive Features
 * @author GitHub Probe
 * @version 2.0.0
 */

// Mensaje de bienvenida en consola
console.log(
  '%c🚀 Git & GitHub Guide',
  'color: #58a6ff; font-size: 24px; font-weight: bold;'
)
console.log(
  '%c¡Bienvenido a la guía de Git para Full Stack & DevOps!',
  'color: #3fb950; font-size: 14px;'
)
console.log(
  '%cAbre el README.md para ver la guía completa.',
  'color: #8b949e; font-size: 12px;'
)

// Función para mostrar comandos útiles en consola
const mostrarComandosUtiles = () => {
  console.log(
    `
%c📋 Comandos Git más usados:
%c
  git status -sb        → Ver estado resumido
  git log --oneline -10 → Ver últimos 10 commits
  git diff              → Ver cambios
  git stash             → Guardar cambios temporalmente
  git switch -c rama    → Crear y cambiar de rama
  git pull --rebase     → Actualizar con rebase

%c💡 Tip: Escribe mostrarComandosUtiles() para ver esto de nuevo.
  `,
    'color: #d29922; font-weight: bold;',
    'color: #c9d1d9; font-family: monospace;',
    'color: #8b949e; font-style: italic;'
  )
}

// Mostrar comandos al cargar
mostrarComandosUtiles()

// Exponer función globalmente para uso en consola
window.mostrarComandosUtiles = mostrarComandosUtiles

// Agregar año actual al footer dinámicamente
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer')
  if (footer) {
    const year = new Date().getFullYear()
    const yearSpan = document.createElement('p')
    yearSpan.textContent = `© ${year} - Aprende Git como un profesional`
    yearSpan.style.marginTop = '0.5rem'
    yearSpan.style.fontSize = '0.9rem'
    footer.appendChild(yearSpan)
  }
})
