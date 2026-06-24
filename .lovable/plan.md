## Objetivo

Refazer apenas a **Dobra 03 — O Caminho** na versão mobile, substituindo a imagem de referência (atualmente escalada em 125%, pouco legível) por uma seção HTML nativa, totalmente alinhada ao restante da landing e com textos plenamente legíveis. Desktop permanece **intacto**.

## Escopo

- Arquivo: `src/routes/index.tsx`
- Bloco afetado: linhas 169–178 (wrapper `overflow-hidden` + `<img src={ref03.url} />`)
- Nada mais será tocado: hero, dobras 02/04/05, oferta, FAQ, encerramento, desktop, preços, links, checkout.
- A asset `ref-dobra_03.asset.json` permanece no projeto (não será deletada), apenas deixa de ser usada no mobile.

## Mudança

Substituir o bloco da imagem por uma `<section>` mobile-first que reproduz a mesma copy e atmosfera da versão desktop (linhas 383–407), usando os tokens já existentes (`eyebrow`, `font-display`, `Diamond`, `--wine`, `--background`, `--foreground`, `--border`, `--gold`).

Estrutura proposta:

```text
[fundo suave gold 5% + bordas superior/inferior]
  Diamond (ornamento)
  eyebrow: "O Caminho"
  h2 display (≈ text-[1.75rem], leading-tight):
     "Trabalhar mais não vai te tirar do lugar."
     <em>Um produto que vende enquanto você dorme, sim.</em>
  parágrafos (text-base, leading-relaxed, ~85% opacidade):
     - "Enquanto cada venda depende da sua presença…"
     - "Escalar não é trabalhar mais."
     - "Escalar não é lotar a agenda."
     - "Escalar não é fazer mais reuniões."
     - destaque display itálico wine (text-xl):
       "Escalar é construir algo que continua vendendo mesmo quando você não está trabalhando."
     - "É exatamente isso que vamos construir juntas."
```

Detalhes técnicos:

- Classe da seção: `md:hidden px-6 py-14 text-center bg-[color-mix(in_oklab,var(--gold)_5%,transparent)] border-y border-[var(--border)]`
- Sem gaps brancos antes/depois (mantém o padrão atual de dobras coladas).
- Tipografia escalada para mobile (h2 ~28px, parágrafos 16px, destaque 20px) garantindo legibilidade no viewport 390px.
- Usa o mesmo componente `Diamond` e classe `eyebrow` já presentes no arquivo — consistência visual total com as demais dobras mobile (Oferta, Encerramento).

## Verificação

1. Build automático.
2. Screenshot mobile (390×1800) via Playwright para confirmar legibilidade e alinhamento com dobras vizinhas.
3. Conferir que o desktop (`md:block` na seção original 384–407) continua renderizando inalterado.
