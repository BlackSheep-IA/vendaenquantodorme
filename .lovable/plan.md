# Ajustes finais da Landing Page

Escopo: reorganização, hierarquia visual e refinamentos. Sem novas seções, sem remover nada, sem mudar identidade visual, paleta, componentes ou animações. Ordem idêntica no Desktop e Mobile.

## 1. Nova ordem das seções (Desktop + Mobile)

Ordem atual → nova ordem em `src/routes/index.tsx` (função `Landing`):

```text
Atual                                Nova
1. Hero                              1. Hero
2. Talvez você esteja pensando       2. Talvez você esteja pensando
3. O Caminho                         3. A Especialista (Liz Valz)
4. O que vamos construir             4. O Caminho
5. Cronograma                        5. O que vamos construir
6. Oferta                            6. Cronograma
7. A Especialista (Liz Valz)         7. Oferta
8. Garantia                          8. Garantia
9. FAQ                               9. FAQ
10. Dois dias… (fechamento)          10. Dois dias… (fechamento) — inalterado
```

Feito reordenando os blocos `<section>` correspondentes — sem duplicar nada. "Dois dias. Um produto…" permanece exatamente como está, encerrando a página antes do rodapé (conforme resposta na pergunta de esclarecimento).

## 2. Seção "Talvez você esteja pensando…"

Apenas dois ajustes visuais nesta seção (afeta desktop e mobile):

- aumentar aproximadamente 20% apenas o ícone do envelope e o texto do card, mantendo a largura do card e toda a composição visual.

Alinhamentos, proporções e espaçamentos preservados.

## 3. Seção "Oferta" — acréscimos dentro do card existente

Não criar novo card. Manter benefícios, CTA, selo de acesso imediato e o preço atual. Adicionar, imediatamente acima do preço "R$ 49,00":

- Linha "De R$ 497" (riscada, discreta).
- Linha "Por apenas R$ 49" (destaque bordô/serif, hierarquia forte).
- Legenda "Preço do Lote Promocional".

Logo abaixo dessa área, uma barra premium de progresso:

- Texto acima: "Restam poucas vagas neste lote promocional".
- Barra com preenchimento controlado por **uma única variável** editável manualmente no topo do arquivo: `const OFFER_PROGRESS = 87;` (usada como `width: ${OFFER_PROGRESS}%`).
- Ao lado direito da barra, apenas o rótulo `87%` (derivado da mesma variável). Sem contagem de vagas, sem API, sem integração.
- O valor de `OFFER_PROGRESS` deve ser utilizado simultaneamente para:
  - largura da barra;
  - percentual exibido ao lado da barra.

Estilos da barra em `src/styles.css` reutilizando tokens existentes (bordô + dourado) para manter a identidade premium.

## 4. Ajustes tipográficos — SOMENTE Desktop

Padronizar todos os `h2` de seção (Talvez você esteja pensando, A Especialista, O Caminho, O que vamos construir, Cronograma, Oferta, Garantia, FAQ) para:

- Mesma família (serif já usada), mesmo peso (400), mesma cor (`--ink`), mesma hierarquia.
- Tamanho +10 a 15% em relação ao atual, aplicado via media query `@media (min-width: 900px)` em `src/styles.css` usando uma classe utilitária unificada `.section-title` (aplicada aos títulos que hoje usam estilos inline divergentes).
- Textos descritivos (parágrafos de apoio `.answer-p`, `.section p`, etc.) +~10% no desktop, mantendo a mesma largura de leitura (`max-width` inalterado).

Mobile: nenhuma alteração de tipografia — media query garante que só o breakpoint desktop recebe os aumentos.

## 5. CTAs — smooth scroll até a Oferta

- Adicionar `id="oferta"` na `<section>` da Oferta.
- No componente `CTA`, distinguir dois modos:
  - Todos os botões de compra distribuídos pela Landing Page devem realizar rolagem suave até a seção **Oferta**. Apenas o botão principal localizado dentro da Oferta deve abrir o checkout da Hotmart.
  - `CTA` dentro do card da Oferta: continua sendo `<a href={CTA_URL} target="_blank">` para o checkout Hotmart.
- Implementado via prop nova `checkout?: boolean` no componente `CTA`. Todas as chamadas atuais viram scroll; apenas a chamada dentro do bloco `.pricing` recebe `checkout`. 
- Não aumentar a altura do card desnecessariamente.
  Os novos elementos ("De R$497", barra de progresso etc.) devem ser integrados ao layout existente preservando a elegância e a proporção visual.

## 6. O que NÃO muda

Identidade visual, paleta, animações, componentes, responsividade, espaçamentos gerais, textos (exceto os acréscimos da Oferta), imagens, hero, badges e footer permanecem intactos.

## Arquivos alterados

- `src/routes/index.tsx` — reordenação das seções, `CTA` com smooth-scroll, bloco De/Por + barra de progresso dentro do `.pricing`, `id="oferta"`, classe `.section-title` nos h2, constante `OFFER_PROGRESS`.
- `src/styles.css` — classe `.section-title` (desktop-only bump), aumento desktop dos parágrafos, tamanho +20% de `.envelope` e texto do card na dobra 2, estilos da barra de progresso premium, estilos do bloco De/Por.