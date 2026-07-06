# Ajustes na Hero e Oferta

Arquivo alvo: `src/routes/index.tsx` (+ CSS em `src/styles.css` só para o novo card).

## 1. Headline (H1)

Substituir `heroVariants[2].h1` por:  
`"Em apenas 2 dias, você vai criar seu Produto Vendedor que vende todos os dias e prepara suas clientes para comprarem seu High Ticket."`

Mantém tipografia, peso, tamanho, line-height e alinhamento atuais (nenhuma classe/estilo alterado).

## 2. Subheadline

Substituir `heroVariants[2].h2` por:

```
Pare de tentar vender uma mentoria cara no primeiro contato.
<i>Crie um produto que gera desejo, confiança e faz essa venda acontecer naturalmente.</i>
```

Primeira frase em estilo normal, segunda em itálico (só `<i>`, sem novas classes/efeitos).

Ajuste técnico: hoje o mobile só renderiza checklist quando `HERO_H1 === heroVariants[1].h1`. Como estamos em `heroVariants[2]`, o checklist já não aparece no mobile — nada muda ali.

## 3. CTA da Hero → scroll para oferta

- ## 3. CTA da Hero → Scroll para a Oferta
  Alterar apenas o comportamento do CTA da Hero.
  Ao clicar no botão da Hero, ele deve fazer um scroll suave até a seção da oferta `id="oferta"`), em vez de abrir o checkout.
  Adicionar apenas o `id="oferta"` na seção da Oferta.
  Não alterar o componente CTA compartilhado, não criar novas props e não modificar o comportamento dos demais botões da Landing Page.

## 4. Card de Oferta (dentro da DOBRA 6)

Adicionar, acima do bloco `pricing` existente (mantendo o `<CTA />` atual dentro do pricing), um novo card `offer-card` com a estrutura:

```
DE R$497
HOJE POR APENAS
R$49,00
Valor exclusivo do Lote 03
Restam poucas vagas neste lote        87%
[==== barra de progresso 87% ====]
```

Estilo: usa tokens já existentes (`--bordeaux`, `--gold`, `--ink`, `--cream`) para manter identidade — sem copiar o visual laranja/preto da referência. Preço grande em serif bordeaux, "DE R$497" riscado em cinza pequeno, barra com fill em bordeaux/gold sobre trilho `--cream-dk`. CSS novo isolado em `.offer-card`, `.offer-card__from`, `.offer-card__price`, `.offer-card__progress`, `.offer-card__bar`, `.offer-card__fill` no final de `src/styles.css` (não altera regras existentes).

## 5. Botões

- Remover `<CTA />` da DOBRA 4 ("O que vamos construir") — linha 462.
- Manter CTA da Oferta (dentro do pricing) e do Fechamento.
- Alterar SÓ o último botão (Fechamento): passar `label="Garantir minha condição especial do Lote 03"` via nova prop opcional em `CTA`; demais botões continuam com o texto atual.

## Não altera

Cores globais, tipografia global, imagens, layout do restante da página, breakpoints, responsividade mobile (além da mudança natural de texto do H1/subheadline). 

IMPORTANTE

Preservar toda a estrutura existente da Landing Page.

Não reconstruir nenhuma seção.

Não alterar HeroHeader.

Não alterar heroVariants além dos textos solicitados.

Não alterar componentes compartilhados.

Não alterar o CSS existente.

Adicionar apenas o código mínimo necessário para implementar os ajustes acima.