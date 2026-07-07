# Plano de atualização de checkout e oferta

## Objetivo

Atualizar todos os botões de checkout e os textos de preço/lote na landing page, refletindo a mudança para lote 03.

## Arquivo alvo

- `src/routes/index.tsx`

## Alterações

1. **Link de checkout único**
  - Substituir `CTA_URL` atual por: `https://pay.hotmart.com/J106563190A?checkoutMode=10`
  - Remover o parâmetro `bid` legado.
    &nbsp;
2. **CTA botão principal (seçao Hero)**
  &nbsp;
  Alterar de: `Garantir minha vaga no lote 02 por R$37,00`
  Para: `Garantir minha vaga ao Workshop`
  &nbsp;
3. **Demais botões com texto longo**
  - Alterar o link, o valor e o lote, mantendo o texto.
    &nbsp;
4. **Bloco de métricas da Hero**
  - Alterar `R$37,00` para `R$49,00`
  - Alterar `Lote 02` para `Lote 03`
5. **Seção de preço (Investimento — Lote 02)**
  - Alterar `Investimento — Lote 02` para `Investimento — Lote 03`
  - Alterar `R$ 37,00` para `R$ 49,00`
6. **Seção de fechamento**
  - Alterar badge `R$37,00` para `R$49,00`
  - Alterar texto `Vagas do lote 02` para `Vagas do lote 03` (apenas se mantiver sentido)
  - Alterar `closing-note` de `Vagas do lote 02 se encerram em breve.` para `Vagas do lote 03 se encerram em breve.`

## Regras

- Não alterar componentes, estilos, layout, imagens ou texto fora dos locais listados.
- Manter o CTA_URL como única constante, para que todos os botões apontem para o mesmo checkout.
- Após a edição, verificar visualmente no preview desktop e mobile se os textos renderizam corretamente.