## Objetivo
Remover o espaço em branco que aparece no mobile entre o botão "Garantir minha vaga no Lote 01 por R$ 29" (final da Dobra 01) e a Dobra 02 (frase "Talvez você esteja pensando...").

## Mudança (somente mobile)
No arquivo `src/routes/index.tsx`, dentro de `MobilePage()`:

- Reduzir o padding inferior do bloco do CTA da Dobra 01 (linha 162):
  - De: `<div className="px-6 pt-4 pb-6 text-center">`
  - Para: `<div className="px-6 pt-4 pb-0 text-center">`

Isso elimina o respiro de ~24px logo abaixo do botão, fazendo a imagem da Dobra 02 (`ref02`) encostar no fim do CTA, mantendo o alinhamento visual contínuo entre as seções.

## Não muda
- Desktop permanece intocado.
- Demais seções, espaçamentos, textos, FAQ, garantia e fechamento permanecem iguais.
- A imagem `ref02` em si não é alterada (qualquer margem branca interna do PNG seguiria por conta da arte original — se ainda restar respiro após o ajuste, sinalizo para tratar a arte separadamente).

## Verificação
- Build automático.
- Screenshot Playwright em 390×1800 confirmando o encosto da Dobra 02 logo abaixo do CTA.
