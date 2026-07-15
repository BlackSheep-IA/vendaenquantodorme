## Perfeito. Esta é a versão que eu enviaria para a Lovable. Está limpa, objetiva e com escopo fechado, minimizando o risco de ela alterar algo além do necessário.

---

# Ajuste da Hero — Apenas Mobile

## Escopo

Realizar **exclusivamente** a substituição da fotografia da Hero na versão **mobile**, preservando integralmente a Landing Page já aprovada.

**Não realizar nenhuma outra alteração** fora do escopo descrito abaixo.

---

## 1. Nova imagem Mobile

- Copiar a imagem anexada (`user-uploads://liz_hero.jpeg`) para:

```text
src/assets/images/liz-hero-mobile.jpeg

```

- Manter o arquivo atual:

```text
src/assets/images/liz-hero.jpeg

```

**inalterado**, pois continuará sendo utilizado na versão Desktop.

---

## 2. Hero (`src/routes/index.tsx`)

- Adicionar o import da nova imagem mobile.
- Utilizar a imagem atual apenas na versão **Desktop**.
- Utilizar a nova imagem apenas na versão **Mobile**.
- Reaproveitar toda a estrutura existente da Hero.
- **Não criar uma segunda Hero.**
- **Não duplicar componentes.**
- Alterar apenas a imagem utilizada em cada breakpoint.
- Não modificar qualquer outro elemento do JSX.

---

## 3. CSS (`src/styles.css`)

Reaproveitar todo o CSS existente.

Caso seja necessário, ajustar **apenas** o `object-position` da imagem da Hero na versão Mobile.

### Objetivo

Posicionar a personagem **ligeiramente mais à direita**, preservando a melhor composição visual.

Garantir que:

- o rosto permaneça totalmente visível;
- a headline não cubra os olhos nem o rosto;
- ombros e mãos permaneçam aparentes;
- exista mais espaço livre à esquerda para o bloco de texto;
- o enquadramento fique natural.

Caso a nova imagem já apresente a composição correta, **não alterar o** `object-position`.

---

## Importante

**Não alterar:**

- layout da Hero;
- altura da Hero;
- largura da Hero;
- `object-fit`;
- tipografia;
- gradientes;
- glow;
- máscaras (`mask-image`);
- animações;
- posicionamento dos textos;
- versão Desktop.

Caso Desktop e Mobile necessitem de enquadramentos diferentes, utilizar apenas regras responsivas específicas para o breakpoint Mobile.

---

## Validação

Antes de concluir:

### Desktop

- Confirmar que a fotografia atual permanece exatamente igual.
- Confirmar que nenhuma alteração visual foi realizada.

### Mobile

- Confirmar que a nova fotografia está sendo utilizada.
- Confirmar que o rosto está totalmente visível.
- Confirmar que a personagem permanece levemente deslocada para a direita.
- Confirmar que a headline não sobrepõe o rosto.
- Confirmar que a composição ficou mais equilibrada do que a versão anterior.

### Geral

- Garantir que nenhuma outra seção da Landing Page foi modificada.
- Não realizar refatorações, otimizações ou alterações fora do escopo solicitado.
- Preservar integralmente a experiência visual e funcional da versão já aprovada.

---

