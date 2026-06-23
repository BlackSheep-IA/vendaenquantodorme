# Ajustes mobile — datas, espaçamentos, zoom e nova seção

Todas as mudanças abaixo afetam **somente a versão mobile** (`MobilePage` em `src/routes/index.tsx`). Desktop continua congelado.

## 1. Datas "08 e 09 de agosto" → "18 e 19 de julho"

A data antiga está **gravada dentro das imagens de referência** (`ref-dobra_01`, `ref-dobra_05`, `ref-dobra_08` — possivelmente também na 02/03/04/07). Vou:

1. Inspecionar cada uma das 7 imagens (`ref-dobra_01` a `ref-dobra_08`) para localizar a data.
2. Em cada imagem que contiver "08 e 09 de agosto", usar `imagegen--edit_image` para substituir por "18 e 19 de julho", preservando tipografia, cor, hierarquia e fundo creme.
3. Reenviar cada imagem editada via `lovable-assets create` e sobrescrever o `.asset.json` correspondente.

## 2. Remover faixas/espaços em branco entre seções

Hoje o mobile usa `mt-12` / `mt-16` entre cada `<RefImg>`, criando faixas do fundo creme entre as imagens. Vou:

- Trocar todos os `mt-12` / `mt-16` entre as dobras-imagem por `mt-0`, deixando as imagens encostadas (sem respiro visível).
- Remover/zerar os gradientes superiores e inferiores do helper `RefImg` (que hoje criam uma transição clara). Como as imagens já têm o mesmo fundo creme, podem se conectar diretamente.
- Manter espaçamento somente nas seções compostas por texto+CTA (Hero CTA, Oferta, Encerramento), com `mt-8` enxuto.

## 3. Dobra 03 ("O Caminho") — ampliar ~25% no mobile

A imagem `ref-dobra_03` tem textos muito pequenos no mobile. Vou aplicar um `scale(1.25)` controlado:

- Envolver a imagem da Dobra 03 em um wrapper com `overflow-x-auto` e aplicar `transform: scale(1.25); transform-origin: top center;` na imagem, com `width: 100%` e altura compensada (`mb` extra para acomodar o crescimento vertical).
- Alternativa mais segura visualmente: aumentar a largura renderizada para `125%` e deslocar com `margin-left: -12.5%`, mantendo `max-width: none`. Vou usar essa abordagem (evita corte horizontal e mantém o layout fluido).

## 4. Nova seção após o FAQ (mobile)

Reproduzir, em HTML/CSS (não como imagem), a seção de encerramento do print enviado:

```
WORKSHOP VENDA ENQUANTO DORME™      (eyebrow, tracking largo)
18 e 19 de julho                    (display serif grande)
Ao vivo e online                    (display itálico)
— ◆ —                               (divisor ornamental)
SOMENTE 40 VAGAS DISPONÍVEIS NO LOTE 01
[ GARANTIR MINHA VAGA NO LOTE 01 POR R$ 29,00 ]   (btn-wine full-width)
```

- Implementar como nova `<section className="px-6 pt-10 pb-12 text-center">` dentro de `MobilePage`, logo após o FAQ, usando os tokens já existentes (`eyebrow`, `font-display`, `Diamond`, `CTA`, `btn-wine`).
- O FAQ atual não tem `hidden md:block`, então renderiza no mobile — a nova seção entra depois dele.

## Detalhes técnicos

- Arquivos alterados:
  - `src/routes/index.tsx` — ajustes em `MobilePage` e `RefImg` (espaçamentos, scale da dobra 03, nova seção de encerramento mobile).
  - `src/assets/ref-dobra_0X.asset.json` — substituídos para os assets que contêm a data antiga.
- Nenhuma alteração em: desktop, links, checkout, URLs, FAQ, preços, copy do Lote 01, valores R$ 29,00.
- Verificação: após editar, abrir Playwright no viewport mobile (375×812) e tirar screenshots de cada dobra para confirmar (a) datas corretas, (b) ausência de faixas claras, (c) legibilidade da Dobra 03, (d) nova seção de encerramento idêntica ao print.
