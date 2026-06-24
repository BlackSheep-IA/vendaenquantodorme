# Dobra do Caminho — ícones + background opaco (mobile)

Sim, dá pra fazer as duas coisas. Mudanças apenas no mobile, na seção "O Caminho" em `src/routes/index.tsx` (linhas 169–191). Nada mais é alterado.

## 1. Imagem de fundo opaca

- Subir a foto `user-uploads://fot_liz_dobra_03.jpeg` como asset Lovable (`src/assets/bg-caminho.asset.json`).
- Aplicar como `background-image` no `<section>`, com:
  - `opacity` da imagem em torno de **8–12%** (bem suave, só pra dar movimento)
  - `background-size: cover`, `background-position: center`
  - sobreposição do tom creme atual (`--background` / gold 5%) por cima, garantindo que o texto continue 100% legível
- Sem parallax, sem fixed (evita bug no iOS).

## 2. Ícones nos itens

Três linhas "Escalar não é..." + a linha afirmativa em itálico ganham ícone à esquerda, alinhados verticalmente ao centro do texto. Uso ícones do `lucide-react` (já no projeto), traço fino, cor `--wine`, tamanho ~18px:

- "Escalar não é trabalhar mais." → `Clock`
- "Escalar não é lotar a agenda." → `CalendarX`
- "Escalar não é fazer mais reuniões." → `Users`
- "Escalar é construir algo que continua vendendo mesmo quando você não está trabalhando." (itálico, wine) → `Moon` (combina com "Venda Enquanto Dorme")

Layout: cada item vira um `flex items-center gap-3 justify-center`, ícone + texto na mesma linha. Em telas estreitas o texto quebra normalmente abaixo, ícone fica no topo via `items-start` se necessário.

## Detalhes técnicos

- Arquivos tocados: `src/routes/index.tsx` (1 seção), `src/assets/bg-caminho.asset.json` (novo).
- Tokens existentes: `--wine`, `--gold`, `--background`, `--border`, `font-display`, `eyebrow`, `Diamond`.
- Estrutura do `<section>`:
  ```
  <section class="relative ... border-y">
    <div class="absolute inset-0 bg-[url(...)] bg-cover bg-center opacity-10" />
    <div class="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_70%,transparent)]" />
    <div class="relative ..."> {/* conteúdo atual + ícones */} </div>
  </section>
  ```
- Desktop e demais seções: intocados.

## Verificação

- Build.
- Screenshot Playwright em 390×1800 confirmando: foto visível mas bem apagada, texto legível, ícones alinhados, sem overflow horizontal.
