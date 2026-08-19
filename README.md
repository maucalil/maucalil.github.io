# Portfolio: Backend Software Engineer & Cloud Infrastructure

Welcome to the source code of my personal portfolio. I am a Software Engineer specializing in backend systems, distributed architectures, and cloud infrastructure.

This repository demonstrates my technical trajectory, projects, and skills. The interface itself was built to be static, utilizing modern frontend tooling as a presentation layer.

## Architecture

This is a **Client-Side Rendering (CSR)** Single Page Application (SPA) designed to be fully static and hosted on serverless environments (like GitHub Pages).

- **Core Engine:** React 19 + TypeScript + Vite
- **Routing:** `react-router-dom`
- **State/Fetching:** `@tanstack/react-query`
- **Styling:** Tailwind CSS v4 + `shadcn/ui`
- **i18n:** `react-i18next` for robust English/Portuguese localization

I treat the frontend as a tool for product autonomy, allowing me to ship complete, polished experiences from end-to-end without relying on third parties.

## Development

You need Node.js and npm to run this project locally.

```sh
git clone https://github.com/maucalil/portfolio
cd portfolio
npm install
npm run dev
```

To build for production:

```sh
npm run build
```

The output will be placed in the `/dist` directory.

## About the Author

[Maurício Calil Manfrim Lucera](https://www.linkedin.com/in/maucalil/) - Software Engineer focused on building robust cloud infrastructure and scalable domain-agnostic backend solutions.
