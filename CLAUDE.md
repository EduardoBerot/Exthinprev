# Exthinprev Landing Page

Landing page para a **Exthinprev** — empresa de venda e manutenção de extintores localizada em Teutônia/RS.

## Stack

- **React 19** + **Vite 8** (bundler)
- **Framer Motion** — animações e transições
- **react-icons** — ícones via `react-icons/lu` (Lucide) e `react-icons/io5` (IoLogoWhatsapp)
- Sem CSS framework; estilos via `src/index.css` com classes utilitárias próprias
- Fonte: **Archivo** (Google Fonts, carregada no `index.html`)

## Estrutura

```
src/
  App.jsx          — root, controla estado `revealed` (intro do Hero)
  constants.js     — telefones, WhatsApp URL, endereço, links do Maps
  index.css        — estilos globais + breakpoints responsivos (760px, 1024px)
  components/
    Hero.jsx       — seção inicial com vídeo intro; dispara onReveal()
    Navbar.jsx     — aparece só após revealed=true
    Services.jsx   — 6 cards de serviços (array SERVICES)
    About.jsx      — sobre a empresa + diferenciais (array DIFFS) + checklist
    MapSection.jsx — info de contato + embed do Google Maps
    Footer.jsx
    WhatsAppButton.jsx — botão flutuante (só após revealed)
    Reveal.jsx     — wrapper de animação de entrada (scroll reveal)

public/
  logo.png              — logo principal
  favicon.png           — favicon 64x64 (E em chamas, fundo transparente)
  og-image-v2.jpg       — OG image 1200x630 para compartilhamento social
  hero-extinguisher.mp4 — vídeo da intro do Hero
  hero-poster.jpg       — poster do vídeo (fallback)
```

## Comportamento chave

- O scroll fica travado (`overflow: hidden`) até a intro do Hero terminar e `revealed` virar `true`.
- Navbar e WhatsAppButton só aparecem após `revealed`.
- Todos os dados de contato e localização ficam em `src/constants.js` — edite apenas lá.
- Vídeo do Hero: `object-position: 70% center` no desktop, `40% center` no mobile (compensa o `scaleX(-1)` do espelhamento).

## Serviços (Services.jsx)

1. Extintores certificados
2. Recarga e manutenção
3. Sinalização fotoluminescente
4. Treinamento contra incêndio (TPCI)
5. Alvará do Corpo de Bombeiros
6. Iluminação de emergência

## Ícones

Todos migrados de SVG inline para `react-icons`:
- Lucide (`lu`): serviços, UI, contato
- IoLogoWhatsapp (`io5`): botão flutuante, navbar CTA, footer

## SEO / OG

- Title: `Exthinprev — Extintores e Prevenção | Teutônia/RS` (~51 chars)
- Description: `Venda de extintores novos e manutenções em Teutônia/RS. Sinalização, treinamento TPCI e alvará do Corpo de Bombeiros.`
- OG image URL absoluta: `https://exthinprev.com.br/og-image-v2.jpg`
- Para forçar revalidação no WhatsApp após mudanças, compartilhar com `?v=N` na URL

## Deploy

- Hospedagem: Vercel
- URL: https://exthinprev.com.br/
- Repositório: https://github.com/EduardoBerot/Exthinprev.git (branch `main`)

## Comandos

```bash
npm run dev      # dev server (Vite)
npm run build    # build de produção
npm run preview  # preview do build
```

## Contato da empresa (referência)

- Telefone: (51) 3762-2829
- WhatsApp: (51) 99826-1680
- Endereço: Rua Albino Suhre, 42 — Teutônia/RS
