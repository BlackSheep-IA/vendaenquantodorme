# Ajustes finais da Landing Page

Escopo restrito: adicionar duas novas seções de prova social, refinar barra/oferta, adicionar mini-barra sob todos os CTAs e centralizar o envelope no mobile. Nenhuma outra parte é modificada.

## 1. Imagens

Serão adicionadas em `src/assets/images/` com estes nomes:

- `depoimento-liz-01.png` … `depoimento-liz-04.png` (4)
- `resultado-01.png` … `resultado-06.png` (6) — 

Cada seção lê um array central no topo do arquivo, então adicionar/remover prints no futuro = editar o array, sem tocar em layout.

```ts
const DEPOIMENTOS_LIZ = [depoimento01, depoimento02, depoimento03, depoimento04];
const RESULTADOS = [resultado01, ..., resultado06];
```

Se algum arquivo não existir no momento do build, o import quebra — então só adiciono os imports que corresponderem aos arquivos efetivamente presentes na pasta.

## 2. Nova seção — Prova Social da Liz

Inserida **logo após "A Especialista"**, antes de "O Caminho".

- Título (`.section-title`): *Quem conhece a Liz sabe a diferença que ela faz.*
- Subtítulo (`.answer-p`): *Estas são mensagens reais de mulheres que encontraram na Liz clareza, direção e confiança para transformar seu conhecimento em um ativo digital.*
- **Desktop (≥900px):** grid de 4 colunas, As quatro imagens devem possuir exatamente o mesmo tamanho visual e alinhamento, preservando uma composição equilibrada.`gap` consistente com o resto da página, cards com `border-radius`, `box-shadow` muito discreta, `object-fit: contain` para preservar proporção original, largura da imagem limitada (sem ampliar excessivamente). Os prints devem permanecer proporcionais ao layout e não devem ocupar excesso de espaço vertical. O objetivo é funcionar como prova social mantendo uma aparência elegante e leve.
- **Mobile:** carrossel horizontal via CSS scroll-snap (`overflow-x:auto; scroll-snap-type: x mandatory`) — 1 print por vez, swipe nativo, sem JS de autoplay, indicadores discretos (dots) atualizados via `IntersectionObserver`.

## 3. Nova seção — Resultados

Utilizar as 6 imagens de resultados fornecidas.

Inserida **logo após o Cronograma e antes da Oferta**.

- Título: *Veja o que aconteceu quando elas decidiram dar o primeiro passo.*
- Subtítulo: *Resultados reais de mulheres que decidiram aplicar o método e começaram a enxergar novas possibilidades para seus negócios.*
- **Desktop:** carrossel horizontal premium mostrando ~3 imagens completas + ~20% da 4ª (usando `flex-basis: calc((100% - gaps) / 3.2)` + scroll-snap).  Manter o mesmo tamanho visual utilizado nos prints da primeira seção, evitando ampliar excessivamente as imagens. Setas discretas (◀ ▶) que fazem `scrollBy` da largura de um card, drag com mouse (pointer events → `scrollLeft`), loop infinito por clonagem dos primeiros/últimos itens no efeito de wrap, sem autoplay, transição suave (`scroll-behavior: smooth`).
- **Mobile:** mesmo container, `flex-basis: 100%`, 1 imagem por vez, swipe nativo, dots.

Componente reutilizável `Carousel` que aceita `imagens`, `perView` (desktop) e `peek` (0.2). Assim, futuras seções reaproveitam.

## 4. Ajustes da Oferta

- `const OFFER_PROGRESS = 89% das vagas preenchidas;` (era 87). Uma única fonte de verdade — controla largura + rótulo.
- Barra principal: altura +~40% (`--offer-bar-h: 14px` → `20px`), mantendo largura, gradiente, glow e animação existentes.
- Texto **acima** da barra permanece; **abaixo** da barra adicionar linha: *Restam poucas vagas neste lote promocional.* (nova classe `.offer-progress-caption`).
- Preço anterior "De R$ 497": aumentar `font-size` ~25% e aplicar um risco elegante (`text-decoration: line-through; text-decoration-thickness: 1.5px; text-decoration-color: color-mix(in oklab, var(--ink) 55%, transparent);`), mantendo cor/família atuais.

## 5. Mini barra de progresso sob todos os CTAs

Novo subcomponente `<CTAProgress />` renderizado **imediatamente abaixo** de cada `<CTA />` (tanto os que fazem scroll até a oferta quanto o de checkout).

- Usa a mesma `OFFER_PROGRESS`.
- Layout: barra compacta mantendo a mesma identidade visual da barra principal, mesmo gradiente/glow/animação da barra principal, largura = A barra deverá possuir a mesma largura visual do botão imediatamente acima.
- Texto acima (pequeno): *89% das vagas preenchidas* • Texto abaixo (menor ainda): *Restam poucas vagas neste lote promocional.*
- Puramente visual; não altera comportamento dos botões.

Para evitar duplicação, a mini-barra fica dentro do próprio componente `CTA` controlada por prop `showProgress` (default `true`). O CTA principal da Oferta usa `showProgress={false}` (já há a barra grande logo acima).

## 6. Envelope — centralização no mobile

Na seção "Talvez você esteja pensando...", adicionar em `@media (max-width: 899px)`:

```css
.envelope { display: block; margin-left: auto; margin-right: auto; }
```

Desktop inalterado.

## 7. O que NÃO muda

Hero, paleta, tipografia, animações, CTAs (comportamento), espaçamentos das seções existentes, textos originais, ordem das demais seções, responsividade geral.

## Qualidade visual

Os dois novos blocos de prova social deverão parecer elementos nativos da Landing Page.

Manter exatamente a mesma identidade visual existente:

- tipografia;
- espaçamentos;
- bordas;
- sombras;
- animações;
- ritmo visual.

O objetivo é que os novos componentes pareçam ter feito parte do projeto desde o início.

## Arquivos alterados

- `src/routes/index.tsx` — 2 novas `<section>`s posicionadas, imports das imagens, arrays `DEPOIMENTOS_LIZ` / `RESULTADOS`, componente `Carousel`, `OFFER_PROGRESS = 89`, caption abaixo da barra, `CTAProgress` dentro do `CTA`.
- `src/styles.css` — grid de depoimentos, carrossel (scroll-snap + peek + dots + setas), altura da barra principal +40%, estilo do preço "De R$ 497" (tamanho +25% + line-through), mini-barra sob CTAs, centralização mobile do `.envelope`.
- `src/assets/images/` — recebe os 4 + 6 prints (fornecidos pelo usuário).

## Detalhes técnicos

- Carrossel implementado sem dependências novas (CSS scroll-snap + pequeno hook para dots/drag/loop). Evita bibliotecas pesadas e mantém o bundle.
- Loop infinito no desktop feito por "virtualização simples": ao chegar no fim, salta silenciosamente para o clone equivalente no início (padrão `scrollLeft` swap dentro de `onScroll` com debounce).
- Drag: `pointerdown` grava `startX`/`scrollLeft`, `pointermove` aplica delta, `pointerup` libera — respeita `touch-action: pan-y` no mobile para não conflitar com swipe nativo.
- Imagens usam `loading="lazy"` e `decoding="async"`; `width`/`height` intrínsecos preservados para evitar CLS.
- Os títulos e subtítulos das duas novas seções devem utilizar exatamente a mesma tipografia e hierarquia visual dos demais títulos da Landing Page, preservando a consistência do design.