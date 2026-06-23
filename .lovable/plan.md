## Confirmação sobre a abordagem atual

Sim, exatamente. Na última rodada eu **não recriei os layouts em HTML/CSS** — eu usei as imagens JPEG que você enviou (dobra_01 a dobra_08) como o próprio conteúdo da versão mobile. Cada dobra mobile renderiza o JPEG correspondente em largura total, e por cima disso adicionei apenas:

- CTA funcional (link da Kiwify) abaixo do Hero
- Bloco de Oferta com preço/CTA reais (Dobra 06)
- CTA final no encerramento
- FAQ interativo (mantido em HTML)

Ou seja: a fidelidade visual veio das próprias imagens, não de uma reconstrução estrutural.

## Ajuste pedido agora — Dobra 01

A imagem `dobra_01.jpeg` tem o botão "GARANTIR INGRESSO LOTE 2 | R$ 29" embutido, e logo abaixo o nosso CTA real ("Garantir minha vaga no Lote 01 por R$ 29"). Ficam dois botões empilhados. Você quer deixar **apenas o nosso CTA funcional**.

### O que vou fazer

1. Usar `imagegen--edit_image` para gerar uma versão limpa de `dobra_01.jpeg`:
   - Remover o botão vinho "GARANTIR INGRESSO LOTE 2 | R$ 29"
   - Remover o microtexto "🔒 ÚLTIMAS VAGAS DISPONÍVEIS"
   - **Manter** tudo o resto idêntico: headline, subtítulo, bullets, foto da Liz, envelope/carta e o bloco de métricas no rodapé (120–200k/mês, 100+ alunas, sem sessão estratégica, funil perpétuo)
2. Subir a imagem editada via `lovable-assets` e atualizar o `ref-dobra_01.asset.json` (ou criar `ref-dobra_01-clean.asset.json` e apontar o import para ele).
3. Manter, abaixo da imagem, **apenas** o nosso CTA real + a linha de escassez "Somente 40 vagas disponíveis no Lote 01" (que substitui o "Últimas vagas disponíveis" removido).
4. Não tocar em mais nada — desktop, demais dobras e FAQ permanecem como estão.

### Resultado esperado no mobile da Dobra 01

```
[ imagem dobra_01 editada — sem o botão e sem "últimas vagas" ]
        ↓
[ Botão vinho real: Garantir minha vaga no Lote 01 por R$ 29 ]
[ "Somente 40 vagas disponíveis no Lote 01" ]
        ↓
(segue para Dobra 02)
```

Se preferir uma rota alternativa (em vez de editar a imagem com IA), me avise. As opções seriam:

- **A.** Editar a imagem com IA (recomendado — mantém atmosfera premium da referência).
- **B.** Cortar a imagem visualmente via CSS na altura logo após a foto (perde o bloco de métricas embutido).
- **C.** Sobrepor um retângulo `var(--background)` em cima do botão e do "últimas vagas" (mais frágil, pode aparecer emenda).

Por padrão sigo com a **opção A**.
