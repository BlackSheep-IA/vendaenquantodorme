# Ajustes na Landing Page — Venda Enquanto Dorme

Edições apenas de conteúdo/ordem em `src/routes/index.tsx` (e ajustes mínimos em `src/styles.css` só se necessário). Sem alterar identidade visual, tipografia, cores, animações ou responsividade.

## 1. CTAs — texto e valor

Nos dois locais do componente `CTA` (link e button, ~linhas 175 e 180) substituir o texto por:

**"GARANTIR INGRESSO NO LOTE 3 COM DESCONTO"**

Remover ",00" de todas as exibições do valor R$ 49 na página.

## 2. Remover dobra de indicadores

Excluir o bloco `<div className="metrics">` (5.200+, 97%, R$49,00, 2 dias) — linhas 458–477 dentro da Hero.  - Excluir completamente essa seção do JSX. Não substituir por outro bloco nem manter espaçamento reservado.

## 3. Remover dobra "Talvez você esteja pensando…"

Excluir a `<section>` inteira (linhas 481–534) que contém eyebrow, quote, envelope e o bloco `.compare`.

## 4. Nova ordem das seções após a Hero

Reordenar os blocos JSX existentes sem alterar seus conteúdos internos além do especificado:

1. **Hero** (mantida)
2. **Depoimentos** — mover para cá a atual seção RESULTADOS (linhas 838–862).
  - Remover o eyebrow `"Resultados"` + `<Ornament />` acima da headline.
  - Manter a headline existente ("Veja o que aconteceu quando elas decidiram dar o primeiro passo.") e o parágrafo/carrossel.
3. **Quem é Liz Valz** — mover a seção A ESPECIALISTA (linhas 537–601).
  - Remover eyebrow `"A especialista"` + `<Ornament />`.
  - Manter o título "Quem é Liz Valz?" e todo o restante.
4. **Método** — mover a seção O CAMINHO (linhas 632–675).
  - Remover eyebrow `"O caminho"` + `<Ornament />`.
  - Substituir a headline atual por: **"O sistema que vende enquanto você dorme"** (mesma classe/tipografia; ênfase em bordeaux em "enquanto você dorme").
5. **O que vamos construir juntas** — seção O QUE VAMOS CONSTRUIR (linhas 678–762).
  - Remover eyebrow `"O que vamos construir"` + `<Ornament />`.
  - Manter headline principal e todo o restante (inclusive o CTA no final).
6. **Cronograma** — seção CRONOGRAMA (linhas 765–835).
  - Remover eyebrow `"Cronograma"` + `<Ornament />`. Manter todo o restante, inclusive o título "Como vai funcionar".
7. **Prova Social — "Quem conhece a Liz…"** — mover para cá a seção PROVA SOCIAL DA LIZ (linhas 604–628).
  - Remover eyebrow `"Prova social"` + `<Ornament />`.
8. **Oferta** (ajustes no item 5)
9. **Garantia** (mantida)
10. **FAQ** (ajuste no item 6)

## 5. Dobra da Oferta

Em `<section id="oferta">` (linhas 866–925):

- Remover eyebrow `"Oferta"` + `<Ornament />` (linhas 868–869).
- Trocar o preço riscado: `"De R$ 497"` → **"De R$ 997"** (linha 905).
- Logo abaixo do preço riscado, adicionar linha em destaque (negrito, reaproveitando classes existentes): **"Garanta sua vaga no lote promocional"**.
- Preço principal: manter "POR APENAS" e trocar `R$ 49,00` → `**R$ 49**` (linha 919).
- **Mover** o bloco `<div className="offer-progress">…</div>` (linhas 908–917) para **imediatamente abaixo** do botão principal (dentro de `.cta-offer-wrap`, após `<CTA …/>`). Reutilizar o mesmo bloco — sem duplicar. Remover de dentro dele o texto "GARANTA SUA VAGA NO LOTE PROMOCIONAL" (esse rótulo agora vive acima do preço, conforme item anterior).
- Remover o `note` do CTA da oferta (`<CTA checkout showProgress={false} note />` → `<CTA checkout showProgress={false} />`) para eliminar "🔒 Vaga garantida e acesso imediato".

## 6. FAQ

Substituir a resposta da pergunta **"E se eu achar que não era pra mim?"** (linhas 402–405) pelos 3 parágrafos:

> Caso o programa não atenda às suas expectativas, você poderá solicitar o reembolso dentro do prazo da garantia, desde que comprove que assistiu às aulas e aplicou integralmente o método, executando as atividades e estratégias propostas.
>
> Se necessário, poderemos solicitar evidências da implementação, como exercícios, materiais produzidos, prints ou outros registros compatíveis.
>
> Pedidos de reembolso sem a comprovação da aplicação do método não serão aprovados, pois não é possível avaliar a eficácia do programa sem que seu conteúdo tenha sido efetivamente colocado em prática.

Ajustar também a pergunta para **"E se eu achar que não é para mim?"** (conforme redação solicitada).

## 7. Fora do escopo

Nenhuma alteração em cores, fontes, animações, layout, responsividade, componentes (`CTA`, `ProofCarousel`, `HeroHeader`, `HeroContent`), tokens CSS ou demais seções não citadas.

## Arquivos alterados

- `src/routes/index.tsx` — reordenar seções, remover eyebrows/ornaments indicados, remover métricas, remover dobra de objeção, ajustar textos de Hero/CTAs/Oferta/FAQ, mover barra de progresso para abaixo do botão da oferta, remover `note` no CTA da oferta.
- `src/styles.css` — apenas se algum espaçamento visualmente quebrar após remover eyebrows; ajuste mínimo reaproveitando tokens existentes.