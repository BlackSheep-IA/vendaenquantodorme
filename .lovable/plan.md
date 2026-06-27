# Instalação do Google Tag Manager (GTM-5G3T4HXG)

## Resultado da busca
Executei `rg -n "GTM-5G3T4HXG"` em todo o projeto: **nenhum arquivo contém esse ID**.

Consequentemente, ele **não está presente na versão publicada** em `vendaenquantodorme.lovable.app` — não há tag GTM carregando hoje em nenhuma rota.

## O que vou fazer

Instalar o GTM no único arquivo raiz que envolve todas as rotas: `src/routes/__root.tsx`. Esse arquivo define o `shellComponent` (html/head/body) usado por toda a aplicação (TanStack Start), então a tag passa a carregar em `/` e em qualquer rota futura, tanto em SSR quanto no cliente.

### Alterações em `src/routes/__root.tsx`

1. **`head()`** — adicionar o script oficial do GTM via `scripts: [...]` para que seja injetado no `<head>` durante o SSR:
   ```ts
   scripts: [
     {
       children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5G3T4HXG');`,
     },
   ],
   ```

2. **`RootShell`** — adicionar o `<noscript>` iframe logo após a abertura de `<body>`, conforme recomendação do Google:
   ```tsx
   <body>
     <noscript>
       <iframe
         src="https://www.googletagmanager.com/ns.html?id=GTM-5G3T4HXG"
         height="0" width="0"
         style={{ display: "none", visibility: "hidden" }}
       />
     </noscript>
     {children}
     <Scripts />
   </body>
   ```

Nada mais é alterado. Após aprovado e publicado, o GTM-5G3T4HXG passa a carregar em todas as páginas/rotas do site.
