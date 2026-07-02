Plano de ajuste desktop-only na Hero

Objetivo: remover a checklist ("Você sai da imersão com:" + 4 bullets) e subir o CTA para ocupar o espaço vazio, mantendo equilíbrio visual, apenas em larguras acima de 1024px.

Arquivo alterado: src/styles.css

Alterações:
1. Adicionar um novo bloco de media query isolado no desktop, ao final do arquivo, sem tocar nas regras existentes de mobile/tablet:

```css
@media (min-width: 1024px) {
  .vd .hero-desktop .hero-checklist-label,
  .vd .hero-desktop .hero-check-list {
    display: none;
  }

  .vd .hero-desktop .cta-wrap {
    margin-top: 8px;
  }
}
```

2. Não modificar src/routes/index.tsx: o HeroContent continua renderizando a checklist, que será ocultada apenas no desktop via CSS. Assim o mobile (abaixo de 1024px) permanece inalterado.

O que NÃO será alterado:
- H1, subtítulo, foto, tipografia, larguras e alinhamentos da Hero.
- Componentes, props e estrutura de arquivos.
- Media queries existentes de mobile/tablet (max-width: 767px e min-width: 768px).
- CSS compartilhado entre mobile e desktop (mantemos as regras gerais `.vd .cta-wrap`, `.vd .hero .cta-wrap`, etc.).
- Qualquer outra seção da página.

Verificação: inspecionar o preview em viewport de 1024px ou mais para confirmar que a checklist sumiu e o CTA subiu com o pequeno respiro de 8px acima do botão.