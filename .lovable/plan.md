## Escopo

Três frentes na Landing Page V2, sem tocar em layout, tipografia, paleta, animações existentes ou responsividade:

1. Hero — nova foto + glow no Desktop
2. Barra sticky com contador
3. Notificações de compra

Arquivos alterados / criados:

- `src/assets/images/liz-hero.jpeg` (substituição binária pela foto anexada)
- `src/routes/index.tsx` (montar `StickyCountdown` e `PurchaseNotification` no root do layout `.vd`)
- `src/styles.css` (glow desktop + estilos sticky + notification)
- `src/components/StickyCountdown.tsx` (novo)
- `src/components/PurchaseNotification.tsx` (novo)
- `src/data/purchaseNotifications.ts` (novo)

---

## 1. Hero

- Substituir `src/assets/images/liz-hero.jpeg` pela imagem enviada (`user-uploads://Foto_Liz.jpg`) via `code--copy`. Import atual (`@/assets/images/liz-hero.jpeg`) permanece inalterado.
- Ajustar apenas `object-position` se necessário nos blocos `.vd .hero-media img` (linhas ~365, ~829, ~990, ~1271, ~1411 do `src/styles.css`) para manter rosto/ombros/mãos enquadrados — nenhum outro atributo tocado.
- Não alterar nenhuma regra existente da Hero além das estritamente necessárias para substituir a imagem e aplicar o glow no Desktop.

### Glow Desktop (reaproveitar o efeito Mobile)

Hoje o Mobile aplica um fade lateral esquerdo via `mask-image: linear-gradient(to right, transparent 0%, black 15%)` (linhas 478–480) e camadas `.hero-media-fade-side` / `.hero-media-fade-bottom`. Trazer o mesmo tratamento ao Desktop, dentro da media query desktop, garantindo:

- máscara/fade suave nas bordas da foto contra o background (mesma cor de fundo da Hero);
- `object-fit`, `object-position`, altura da Hero, tamanho e posição da imagem permanecem intocados;
- adaptação apenas de direção/intensidade do gradiente para o enquadramento desktop.

---

## 2. Barra Sticky — `StickyCountdown`

Componente cliente montado no topo do layout `.vd` em `src/routes/index.tsx`.

### Comportamento

- Escuta `scroll`; exibe quando `window.scrollY > 250`, oculta ao retornar.
- Animação: fade + slide-down discretos (CSS transition `transform`/`opacity`, 200ms).
- Botão "GARANTIR INGRESSO": faz `document.getElementById('oferta').scrollIntoView({behavior:'smooth'})`. Se `IntersectionObserver` indicar que `#oferta` já está visível no viewport, não executa scroll.

### Contador (timezone `America/Sao_Paulo`)

- Constantes configuráveis no topo do arquivo:
  ```ts
  export const CAMPAIGN_START = '2026-07-15T00:00:00-03:00';
  export const CAMPAIGN_END   = '2026-07-25T09:00:00-03:00';

  ```
  (Usar offset `-03:00` fixo em BRT — não há DST no fuso de São Paulo em 2026.)
- `setInterval(1s)` calcula `end - Date.now()`.
- Estados:
  - `remaining > 24h` → `🔥 LOTE PROMOCIONAL • ENCERRA EM  DD Dias | HH Horas | MM Min | SS Seg`
  - `0 < remaining ≤ 24h` → `🔥 ÚLTIMO DIA` (esconde contador granular)
  - `remaining ≤ 0` → `AO VIVO AGORA`
- Baseado no relógio do navegador; não persiste — atualizar página recalcula.

### Layout

- Desktop: fundo bordeaux (token existente `--color-bordeaux` / `.bg-bordeaux` da paleta), texto branco, botão dourado (token `--color-gold`), altura ~54px, largura 100%, `position: fixed; top: 0; z-index` acima do conteúdo mas abaixo de modais.
- Mobile: versão compacta — reduz padding, encurta rótulo (`ENCERRA EM` some, mantém contador + botão), altura ~44px.
- Novos estilos em `src/styles.css` prefixados com `.vd .sticky-countdown` reutilizando tokens de cor/tipografia da LP.

---

## 3. Notificações — `PurchaseNotification` + `purchaseNotifications.ts`

### `src/data/purchaseNotifications.ts`

Exporta arrays:

- `BUYERS: string[]` — Utilizar exatamente a lista de compradores fornecida nesta solicitação (já validada). Não remover, adicionar, alterar, reordenar ou deduplicar nomes. Apenas exportar exatamente a lista fornecida.
- `MESSAGES: string[]` — 7 frases conforme spec.
- `TIMES: string[]` — 9 opções ("agora mesmo", "há 1 minuto", …, "há 18 minutos").

### `PurchaseNotification.tsx`

- No mount: embaralha uma cópia de `BUYERS` (Fisher–Yates) e mantém índice cíclico; garante nunca repetir o mesmo comprador em sequência (ao dar wrap, re-embaralha evitando que o primeiro seja igual ao último exibido).
- Seleção aleatória de `MESSAGES` e `TIMES` evitando repetir a última usada em cada lista.
- Avatar: `<div>` circular com a inicial do primeiro nome, cor de fundo derivada de hash simples do nome (paleta discreta em tokens existentes) — sem libs.
- Timing:
  - primeira notificação: `setTimeout` 6s após mount;
  - visível 5s (fade+slide);
  - após ocultar, próximo `setTimeout` com delay aleatório 12–20s;
  - nunca duas simultâneas (estado único `current | null`).
- Limpeza total de timers no unmount.
- Posicionamento (fixed):
  - Desktop: `bottom: 24px; left: 24px`.
  - Mobile: `bottom: 88px; left: 12px; right: 12px` (acima da área de CTA fixa/rodapé, sem sobrepor botões).
- Visual: cartão claro, borda suave, sombra leve, tipografia da LP; classes `.vd .purchase-notification*` em `src/styles.css`. Animação apenas fade + slide via CSS.

### Montagem

Em `src/routes/index.tsx`, dentro do wrapper `.vd`, adicionar no topo:

```tsx
<StickyCountdown />
<PurchaseNotification />
```

Adicionar ambos os componentes dentro do wrapper principal `.vd`, sem alterar a hierarquia existente do JSX e sem mover componentes atuais.

Sem outras alterações no JSX existente.

---

## Validação

- `tsgo` para tipos.
- - Verificar Desktop e Mobile. - Garantir ausência de regressões visuais. - Garantir que nenhum componente existente foi alterado além do solicitado.
  - Hero com nova foto + glow;
  - sticky aparecendo após scroll >250px, contador renderizando, clique rolando para `#oferta`;
  - notificação surgindo após ~6s e não sobrepondo CTAs;
  - seções remanescentes sem regressão visual.