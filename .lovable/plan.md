
# Ajustes Finais — Workshop Venda Enquanto Dorme™

Ajustes pontuais na landing page existente, sem reescrever copy nem alterar estrutura macro. Mantém as 9 dobras já construídas.

## 1. Títulos — centralização global

Centralizar todos os títulos principais (H1/H2) das seções:
Hero, Quebra de objeção, O caminho, O que vamos construir, Oferta, Sobre a especialista, Garantia, FAQ, Encerramento.

## 2. Hero — hierarquia e composição

Nova hierarquia visual (do mais dominante ao mais sutil):
1. Headline
2. Foto da Liz
3. CTA
4. Card lateral

Mudanças:
- **Headline**: aumentar ~20% (display serif, peso atual). Vira o elemento dominante da primeira dobra.
- **Subheadline**: aumentar levemente, aplicar `font-semibold`, melhorar contraste (cor mais escura sobre o creme).
- **Remover envelope/carta/lacre** completamente da Hero (e qualquer overlay relacionado). Não substituir.
- **Remover bloco de métricas atual** com os textos "Mobile First / Apenas 3 CTAs / Sem ruído / Experiência editorial / Produto pronto".

## 3. Foto da Liz — integração ao fundo

**Desktop:**
- Glow creme suave atrás da foto
- Fade lateral (mask-image horizontal) nas bordas esquerda/direita
- Fade inferior (mask-image vertical) na base
- Sem moldura, sem borda visível — a foto se dissolve no background creme

**Mobile:**
- Remover qualquer aparência de bloco/retângulo
- Máscara radial suave nas bordas
- Fade inferior pronunciado
- Glow creme delicado por trás
- Sensação editorial: a foto "emerge" do fundo

Técnica: `mask-image` com gradientes lineares + radiais, combinada com um `box-shadow`/`filter: drop-shadow` creme atrás.

## 4. Card lateral (Desktop apenas)

Substituir o card atual por **um único card** replicando a referência:
- Fundo creme (tom levemente diferenciado do background para destacar)
- `border-radius: 12px` (suave, não pill)
- 3 linhas com divisórias internas horizontais
- Cada linha: ícone à esquerda + texto à direita, alinhamento e espaçamento uniformes

Conteúdo exato (3 linhas):
1. 2 DIAS INTENSIVOS
2. AO VIVO
3. VAGAS LIMITADAS

Posicionamento:
- Lateral à foto, sem cobrir rosto/olhos
- Reduzir ~15% do tamanho atual
- Mais respiro entre card e foto

**Mobile:** card removido. As 3 informações aparecem como linha discreta próxima ao topo da Hero (logo após a subheadline ou junto aos benefícios).

## 5. Bloco de métricas (nova versão)

Substituir o bloco atual pelos 4 itens exatos:
1. **120–200k/mês** — de faturamento
2. **100+ alunas** — transformadas
3. **Sem sessão estratégica** — nem call de vendas
4. **Funil perpétuo** — e escalável

Layout em grid de 4 colunas (desktop) / 2x2 (mobile), seguindo o mesmo estilo editorial das referências. Posicionado abaixo da foto da Liz.

## 6. Fluxo Mobile da Hero

Ordem obrigatória vertical:
1. Headline
2. Subheadline
3. Benefícios (bullets já existentes)
4. CTA
5. "Últimas vagas disponíveis do Lote 0"
6. Foto da Liz (integrada ao fundo)
7. Bloco de métricas

Reduzir paddings verticais para evitar altura excessiva e espaços vazios.

## 7. Botões (CTAs Hero, Oferta, Encerramento)

- URL: `https://pay.kiwify.com.br/VxLqXfi`
- `target="_blank"` + `rel="noopener noreferrer"`
- Fundo bordô (wine já existente)
- Texto branco, MAIÚSCULAS, `font-semibold`, `tracking-wider`
- `border-radius: 5px` (substituir o arredondamento atual de pill/cápsula)

## 8. Remoções globais

Garantir que **não existam** na página:
- depoimentos, vídeos, provas sociais
- placeholders, order bump, upsell
- gravações, bônus extras
- envelope/carta/lacre em qualquer dobra (a Dobra 02 perde a imagem do envelope; mantém apenas a copy de quebra de objeção centralizada)

## Detalhes técnicos

Arquivos afetados:
- `src/routes/index.tsx` — reordenar JSX Hero, atualizar card, métricas, CTAs, remover envelope/elementos proibidos, centralizar títulos
- `src/styles.css` — novas utilities: `.photo-mask-desktop`, `.photo-mask-mobile`, `.photo-glow`, ajuste `.btn-wine` para `border-radius: 5px` + uppercase + tracking
- Manter assets `liz-desktop`, `liz-mobile`; **não usar** mais `envelope-01`, `envelope-02` (ficam órfãos, sem deletar)

Sem mudanças em rotas, sem novos pacotes, sem backend.
