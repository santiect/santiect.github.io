/**
 * Paleta pensada para transmitir confiança e leitura tranquila:
 * "ink" = azul petróleo/marinho (identidade acadêmica, títulos, header, CTAs primários)
 * "accent" = verde-água suave (links, destaques, hover)
 * "paper" = neutros levemente azulados para fundo (menos cansativo que branco puro)
 *
 * Para trocar a identidade visual do site, edite apenas estas escalas.
 * Elas viram classes utilitárias: bg-ink-800, text-accent-600, bg-paper-50, etc.
 */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f7fa",
          100: "#e6edf3",
          200: "#c9d8e3",
          300: "#a3bccd",
          400: "#7398b0",
          500: "#4f7791",
          600: "#3a5f77",
          700: "#2d4a5e",
          800: "#20374a",
          900: "#152736",
          950: "#0d1a24",
        },
        accent: {
          50: "#f1faf8",
          100: "#dcf1ec",
          200: "#b8e3da",
          300: "#8ccec0",
          400: "#5fb3a1",
          500: "#3e9684",
          600: "#2f7a6b",
          700: "#276256",
          800: "#214e46",
          900: "#1a3f39",
        },
        paper: {
          50: "#fbfcfd",
          100: "#f5f7f9",
          200: "#eceff2",
        },
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
