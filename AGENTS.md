# Regras do Agente (AGENTS.md)

> [!IMPORTANT]
> Estas são as diretrizes comportamentais e arquiteturais para agentes atuando neste repositório. Leia antes de sugerir ou implementar qualquer código.

## Arquitetura do Projeto

Este é um Portfólio Estático (SPA / Client-Side Rendering) construído e compilado via **Vite**. Todo o código deve ser compatível para exportação de HTML estático em hospedagens serverless (ex: GitHub Pages).

- **Core:** React 19 + TypeScript + Vite.
- **Roteamento:** `react-router-dom` (NÃO utilize `Next.js`, `TanStack Start` ou `Nitro`).
- **Estado/Fetching:** `@tanstack/react-query` (quando necessário) e Hooks do React.
- **Estilização:** Tailwind CSS v4 e `shadcn/ui`.

## Diretrizes de Estilo e UI (shadcn/ui)

- A estilização do Tailwind v4 é definida primariamente via diretivas no arquivo `src/styles.css`. Não procure por um arquivo `tailwind.config.ts`.
- Os componentes base estão em `src/components/ui/` (botões, modais, tooltips). Sempre tente reaproveitá-los em vez de recriar blocos de UI customizados, mantendo a coerência do Design System.
- Os ícones oficiais do projeto são provenientes da biblioteca `lucide-react`.

## Internacionalização (i18n)

O repositório suporta múltiplos idiomas de forma robusta utilizando `react-i18next`.

- **NUNCA faça hardcode de strings nas views.**
- Se adicionar ou alterar um texto na interface, adicione a respectiva chave nos dois dicionários: `src/locales/pt.json` e `src/locales/en.json`.
- Utilize o hook `useTranslation()` e a função `t('key')` para renderizar o texto.
- Para textos que contenham marcação HTML no meio da frase (como `<span className="...">palavra</span>`), utilize o componente `<Trans />` nativo do `react-i18next`.

## Regras de Versionamento e Scripts

- **Gerenciador de Pacotes:** `npm`. **NÃO UTILIZE** `bun` ou `yarn`.
- **Scripts Disponíveis:**
  - `npm run dev`: Inicia o servidor local.
  - `npm run build`: Compila o SPA para a pasta `/dist`. Sempre rode este comando para validar refatorações estruturais.
  - `npm run lint`: Valida o projeto utilizando o ESLint (flat config `eslint.config.js`).
