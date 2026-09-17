/**
 * Paleta pensada para transmitir confiança e leitura tranquila, com um
 * segundo acento para dar vida sem perder a seriedade acadêmica:
 * "ink"   = azul petróleo/marinho (identidade acadêmica, títulos, header, CTAs primários)
 * "accent"= verde-água mais vívido (links, destaques, hover, grafo do Hero)
 * "gold"  = dourado suave, usado com moderação (poucos nós do grafo, pequenos realces)
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
          50: "#eefbf8",
          100: "#d3f3ec",
          200: "#a8e6da",
          300: "#74d3c1",
          400: "#45b8a4",
          500: "#269485",
          600: "#1c766b",
          700: "#1c5f57",
          800: "#1c4c46",
          900: "#1a3f3a",
        },
        gold: {
          50: "#fdf8ee",
          100: "#faedd0",
          200: "#f3d89e",
          300: "#ecbf66",
          400: "#e2a53c",
          500: "#cf8a25",
          600: "#ab6c1c",
          700: "#87541b",
          800: "#6e451c",
          900: "#5c3a1b",
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
