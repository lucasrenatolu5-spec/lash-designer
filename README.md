# Sophia Ellen — Lash Designer | Landing Page

Landing page premium para Lash Designer, construída em
**React + TypeScript + CSS Modules + Framer Motion**.

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção na pasta /dist
npm run preview   # serve a build de produção localmente
```

## ⚠️ Fotos pendentes (placeholders visuais)

Este projeto foi entregue **sem fotos reais** propositalmente — todos os
espaços de imagem mostram um placeholder visual com moldura pontilhada e o
texto "COLOQUE AQUI A FOTO" + o nome do item, para você saber exatamente
onde cada foto deve entrar.

### Onde estão os placeholders

| Local | Arquivo | O que fazer |
|---|---|---|
| Hero (foto principal) | `src/components/Hero/Hero.tsx` | Trocar `heroImage` por um import real |
| Sobre a profissional | `src/components/About/About.tsx` | Trocar `aboutImage` por um import real |
| Cards de serviço (9 técnicas) | `src/data/content.ts` → array `SERVICES`, campo `image` | Trocar cada `placeholderImage(...)` por um import real |
| Antes e Depois | `src/data/beforeAfter.ts` | Trocar `beforeImage`/`afterImage` por imports reais |
| Ambiente e Estrutura | `src/components/Studio/Studio.tsx` → `STUDIO_IMAGES` | Trocar cada `placeholderImage(...)` por um import real |
| Depoimentos (foto da cliente) | `src/data/content.ts` → array `TESTIMONIALS`, campo `photo` | Atualmente vazio (mostra iniciais do nome); adicione se quiser foto real |

### Como trocar um placeholder por uma foto real

1. Coloque o arquivo de imagem em `src/assets/images/` (ex: `volume-fox.jpg`)
2. No topo do arquivo de dados (`content.ts`, `beforeAfter.ts`, etc.), importe:
   ```ts
   import volumeFoxImg from '../assets/images/volume-fox.jpg';
   ```
3. Troque o campo `image: placeholderImage('Volume Fox')` por `image: volumeFoxImg`

**Nunca** use caminhos de texto como `'/src/assets/images/...'` — sempre
importe o arquivo, ou a imagem não vai aparecer depois do `npm run build`.

## Conteúdo de exemplo a revisar

Alguns textos foram marcados explicitamente como placeholder de texto e
devem ser substituídos por conteúdo real antes de publicar:

- `src/components/About/About.tsx` — segundo parágrafo (história/formação)
- `src/data/content.ts` → `TESTIMONIALS` — depoimentos são genéricos, troque por avaliações reais de clientes

## Dados já carregados (reais, extraídos do catálogo)

- **Contato**: WhatsApp (81) 9427-7271, Instagram @sophiaellenlash
- **9 serviços com preços reais**: Volume Brasileiro, Egípcio, Luxo, Árabe, Fox (destaque), Mega Brasileiro, Mega Egípcio, Mega Fox, Mega Árabe
- **Avisos/políticas reais**: remoção R$ 45, sinal de 30%, regras de atendimento — tudo em `src/data/content.ts` → `POLICIES`

## WhatsApp

Número e mensagem padrão em `src/data/content.ts` → objeto `SITE`. Todos os
botões de WhatsApp da página usam esse número automaticamente via o hook
`useWhatsApp`.

## Estrutura

```
src/
  components/      # um componente por seção
    common/         # Button, SectionHeading, FloatingWhatsApp
  data/             # conteúdo centralizado (content.ts, beforeAfter.ts, types.ts)
  hooks/            # useWhatsApp
  assets/
    placeholders/   # gerador de placeholder visual (placeholderImage.ts)
    images/         # pasta vazia — suas fotos reais vão aqui
  styles/           # variáveis globais e reset
```
