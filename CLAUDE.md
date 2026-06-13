# Exthinprev Landing Page

Landing page para a **Exthinprev** — empresa de venda, recarga e manutenção de extintores localizada em Teutônia/RS.

## Stack

- **React 19** + **Vite 7** (bundler)
- **Framer Motion** — animações e transições
- **React Three Fiber / Drei / Three.js** — cenas 3D (usadas no Hero)
- Sem CSS framework; estilos via `src/index.css` com classes utilitárias próprias
- Fonte: **Archivo** (Google Fonts, carregada no `index.html`)

## Estrutura

```
src/
  App.jsx          — root, controla estado `revealed` (intro do Hero)
  constants.js     — telefones, WhatsApp URL, endereço, links do Maps
  index.css        — estilos globais
  components/
    Hero.jsx       — seção inicial com vídeo/3D intro; dispara onReveal()
    Navbar.jsx     — aparece só após revealed=true
    Services.jsx   — seção de serviços
    About.jsx      — sobre a empresa
    MapSection.jsx — embed do Google Maps
    Footer.jsx
    WhatsAppButton.jsx — botão flutuante (só após revealed)
    Reveal.jsx     — wrapper de animação de entrada (scroll reveal)
```

## Comportamento chave

- O scroll fica travado (`overflow: hidden`) até a intro do Hero terminar e `revealed` virar `true`.
- Navbar e WhatsAppButton só aparecem após `revealed`.
- Todos os dados de contato e localização ficam em `src/constants.js` — edite apenas lá.

## Comandos

```bash
npm run dev      # dev server (Vite)
npm run build    # build de produção
npm run preview  # preview do build
```

## Contato da empresa (referência)

- Telefone: (51) 3762-2829
- WhatsApp: (51) 99826-1680
- Endereço: Rua Albino Suhre, 42 — Centro, Teutônia/RS
