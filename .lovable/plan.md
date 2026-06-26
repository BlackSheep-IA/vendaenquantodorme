Objetivo: reduzir o espaço em branco entre a subhead da hero ("…e transforma seguidoras em clientes do seu High Ticket.") e o bloco "Você sai da imersão com:" + checklist + botão, na primeira dobra mobile.

Escopo: ajuste somente no mobile hero da landing page. Desktop permanece inalterado.

Passos:
1. Capturar screenshot mobile da primeira dobra para confirmar onde está o vazio.
2. Em `src/styles.css`, reduzir a altura da `.hero-media` mobile (atualmente `520px`) para aproximadamente `420-460px`, de modo que a imagem não empurre o conteúdo para baixo.
3. Ajustar a máscara de fade inferior da `.hero-media` para terminar mais cima, permitindo que o texto da `.hero-content` suba e ocupe o espaço.
4. Reduzir as margens de `.hero-sub`, `.hero-checklist-label` e `.hero .cta-wrap` no mobile para aproximar visualmente a subhead da lista de ofertas.
5. Adicionar `margin-top` negativo ou reduzir o padding superior de `.hero-content` para que o bloco de ofertas suba suavemente sobre a área de fade da imagem, sem encostar no texto overlay.
6. Verificar no preview mobile se o espaço em branco foi eliminado e o botão CTA permanece bem posicionado.
7. Garantir que o layout desktop (`@media (min-width: 768px)`) não seja afetado.

Arquivos envolvidos:
- `src/styles.css` (ajustes de espaçamento mobile na seção HERO)
- `src/routes/index.tsx` (apenas se for necessário reorganizar a estrutura do HeroContent, o que não é esperado)

Não serão alterados: paleta, tipografia, botões, copy, ordem das dobras, imagens, comportamento do FAQ.