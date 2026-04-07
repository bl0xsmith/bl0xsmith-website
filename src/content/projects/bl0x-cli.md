---
title: 'bl0x-cli'
description: 'A personal CLI for scaffolding dark-themed Astro and web projects from zero to running in under a minute'
github: 'https://github.com/bl0xsmith/bl0x-cli'
tags: ['cli', 'tooling', 'nodejs', 'astro', 'typescript']
featured: false
---

`bl0x-cli` is a command-line tool that bootstraps my standard project setup — Astro + TypeScript + dark theme config + opinionated folder structure — in a single command.

## Usage

```bash
npx bl0x-cli new my-project
cd my-project
npm run dev
```

## What Gets Scaffolded

- Astro project with TypeScript strict mode
- Pre-configured `tsconfig.json` and `astro.config.mjs`
- Global CSS with dark-theme custom properties already wired
- Three.js installed and a starter `ThreeBackground` component
- Content collections for `blog` and `projects`
- Git initialized with a sensible `.gitignore`

## Templates

| Template | Description |
|---|---|
| `default` | Blog + portfolio (what you're looking at) |
| `minimal` | Just the dark base, no content collections |
| `landing` | Single-page with hero, features, CTA sections |

## Why

I kept repeating the same setup steps for every new project. Now it's one command.
