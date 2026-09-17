# Especificação do site — guia para edição (humano ou IA)

Site pessoal/acadêmico do professor (ECT/UFRN). Gerado com **Astro** +
**Tailwind CSS**, conteúdo em **Markdown** (Content Collections), deploy
automático no **GitHub Pages** via GitHub Actions.

Este arquivo é a referência para qualquer edição futura, feita por você ou
por outra ferramenta de IA. Leia antes de alterar estrutura, estilo ou
fluxo de publicação.

## Stack e por quê

- **Astro** — gera HTML estático puro no build; sem framework JS pesado no
  cliente. Componentes em `.astro`.
- **Tailwind CSS** — utilitário, configurado em `tailwind.config.mjs`.
- **Content Collections** (`src/content/*`) — conteúdo em Markdown com
  front matter validado por schema (`src/content/config.ts`). Evita erros
  de digitação silenciosos ao editar.
- **`remark-math` + `rehype-katex`** — permitem LaTeX nos posts do blog.
- **p5.js** — anima o fundo do Hero (rede de nós/grafo à deriva), referência
  visual sutil à área de pesquisa (grafos, metaheurísticas). Só carrega na
  home; ver `src/components/HeroCanvas.astro`.
- **GitHub Actions** (`.github/workflows/deploy.yml`) — builda e publica
  automaticamente a cada push em `main`.

## Fluxo de branches

- **`main`** — branch publicada. Todo push/merge nela dispara o deploy
  automático (Actions → GitHub Pages).
- **`dev`** — branch de trabalho. Crie/edite conteúdo e features aqui.
  Quando estiver pronto, abra PR ou faça merge `dev → main` para publicar.

Nunca edite conteúdo diretamente em `main` sem revisar — o deploy é
automático e imediato.

## Como adicionar conteúdo

Todo conteúdo editável vive em `src/content/<colecao>/*.md`. Basta copiar
um arquivo existente como modelo, editar o front matter (topo, entre
`---`) e o corpo em Markdown abaixo.

### Novo post de blog

Crie `src/content/posts/meu-post.md`:

```md
---
title: "Título do post"
summary: "Resumo curto (aparece no carrossel e na listagem)."
date: 2026-04-01
tags: ["tag1", "tag2"]
draft: false
---

Corpo do post em Markdown. Fórmulas em LaTeX:

Inline: $E = mc^2$

Bloco:

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

O nome do arquivo (sem `.md`) vira o slug da URL: `/blog/meu-post/`.
Posts aparecem automaticamente no carrossel da home, ordenados por data
(mais recente primeiro). Use `draft: true` para esconder um post sem
apagá-lo.

### Nova disciplina

`src/content/courses/nome.md` — precisa de `title`, `summary`, `url`
(link da página já publicada no GitHub) e `order` (ordem de exibição).

### Novo projeto

`src/content/projects/nome.md` — `title`, `summary`, `tags` (lista),
`url` (opcional), `date`, `order`.

### Novo curso/palestra/workshop (divulgação)

`src/content/talks/nome.md` — `title`, `kind` (`curso` | `palestra` |
`workshop` | `evento`), `date`, `location`, `summary`, `url` (opcional,
link externo de inscrição/site oficial), e o corpo em Markdown com o
conteúdo completo (a "notícia" da palestra/curso). Listados
automaticamente por data (mais recente primeiro).

Cada item gera automaticamente uma página própria dentro do site em
`/cursos-palestras/nome/` (o nome do arquivo vira o slug), com o corpo
em Markdown renderizado — é para onde o card na home sempre aponta. O
`url`, se preenchido, aparece como um link secundário ("Site oficial /
inscrição") dentro dessa página e no card, mas nunca substitui a
página interna: conteúdo de divulgação sempre fica hospedado no
próprio site, nunca só como redirecionamento externo.

## Dados pessoais (nome, foto, e-mail, links)

Tudo centralizado em `src/data/site.ts`. Edite este arquivo único para
atualizar nome, cargo, texto "sobre mim", foto de perfil e links de
contato (e-mail, GitHub, Lattes, LinkedIn) em todas as páginas de uma vez.

A foto de perfil hoje é um placeholder SVG em
`public/assets/img/profile-placeholder.svg`. Para trocar por uma foto
real, adicione o arquivo em `public/assets/img/` e aponte `site.photo`
para o novo caminho.

## Paleta de cores

Definida em `tailwind.config.mjs`, em quatro escalas:

- `ink` — azul petróleo/marinho (identidade acadêmica: header, títulos,
  fundo escuro do hero e footer).
- `accent` — verde-água (links, destaques, hover, CTAs, cor principal do
  grafo animado do Hero).
- `gold` — dourado suave, usado com moderação como segundo acento (ex.:
  badges de "palestra/evento" no `TalkCard`, alguns nós do grafo do Hero)
  para dar variedade visual sem virar poluição.
- `paper` — neutros levemente azulados (fundo claro das seções).

Para redesenhar a identidade visual, troque os valores hexadecimais
dessas escalas — todo o site usa essas classes (`bg-ink-900`,
`text-accent-600`, `text-gold-600`, etc.), nada de cor "hardcoded" fora
daqui (exceção: as cores passadas como prop hex para `<HeroCanvas>`, que
alimentam o canvas p5.js — mantenha-as em sincronia com `accent-400` e
`gold-400` do config).

Use `gold` com parcimônia — é o tempero, não a cor principal. Regra
prática: no máximo um elemento de destaque em `gold` por seção.

Tipografia: `font-serif` (Source Serif 4, títulos) e `font-sans` (Inter,
corpo), carregadas via Google Fonts em `src/layouts/BaseLayout.astro`.

## Componentes principais

- `src/layouts/BaseLayout.astro` — casca HTML (head, header, footer).
- `src/layouts/PostLayout.astro` — layout de post individual (inclui CSS
  do KaTeX).
- `src/layouts/TalkLayout.astro` — layout da página interna de cada
  curso/palestra/evento (`/cursos-palestras/<slug>/`).
- `src/components/Header.astro`, `Footer.astro`, `Hero.astro`,
  `About.astro`, `Contact.astro` — seções fixas da home.
- `src/components/CourseCard.astro`, `ProjectCard.astro`,
  `TalkCard.astro` — cards reutilizados nas listagens.
- `src/components/BlogCarousel.astro` — carrossel autoplay dos posts
  (pausa em hover/foco, setas, dots, navegável por teclado). Lógica em
  `<script>` no próprio componente, sem dependência externa.
- `src/components/GraphBackground.astro` — grafo decorativo estático
  (SVG), fallback visual sem JS/`prefers-reduced-motion` por trás do
  `HeroCanvas`.
- `src/components/HeroCanvas.astro` — grafo animado do Hero em p5.js
  (nós à deriva, arestas por proximidade). Respeita
  `prefers-reduced-motion` (não monta) e pausa via
  `visibilitychange` quando a aba fica em segundo plano.
- `src/components/SectionHeading.astro` + `icons/GraphNodeIcon.astro` —
  título de seção com o ícone de grafo recorrente da identidade visual.
- `src/pages/index.astro` — monta a home a partir das collections.
- `src/pages/blog/[slug].astro` — gera uma página por post.
- `src/pages/cursos-palestras/[slug].astro` — gera uma página por
  curso/palestra/workshop/evento (conteúdo sempre hospedado no site,
  nunca só um link externo).

## Comandos

```bash
npm install       # instalar dependências
npm run dev       # servidor local (http://localhost:4321)
npm run build     # build de produção em dist/
npm run preview   # servir o build localmente
```

## Publicação

O deploy é automático: qualquer push/merge em `main` dispara
`.github/workflows/deploy.yml`, que builda com Astro e publica no GitHub
Pages (sem branch `gh-pages` manual). Configure em
**Settings → Pages → Source: GitHub Actions** no repositório (uma vez
só).

## Convenções para novas edições (humano ou IA)

- Conteúdo textual sempre em Markdown dentro de `src/content/`. Nunca
  hardcode texto de posts/projetos/disciplinas/palestras direto nos
  componentes `.astro`.
- Novas seções da home devem seguir o padrão: `<section id="...">` com
  `scroll-mt-16` (compensa o header fixo) e alternância de fundo
  `bg-paper-50` / `bg-ink-50` para separar visualmente.
- Prefira compor com as classes de cor já definidas (`ink-*`,
  `accent-*`, `paper-*`) em vez de introduzir cores novas.
- Mantenha textos placeholder como "Lorem ipsum" fáceis de localizar
  (buscar por `Lorem ipsum` no repositório) até o conteúdo real ser
  inserido.
- Qualquer novo componente client-side deve ter fallback razoável sem
  JS (o carrossel, por exemplo, mostra o primeiro slide estático se o
  script não rodar; o `HeroCanvas` deixa o `GraphBackground` estático
  visível até o p5.js montar, e não monta se `prefers-reduced-motion`
  estiver ativo).
