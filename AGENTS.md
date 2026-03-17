# AGENTS.md – Project `pancatz-website`

---

## 📦 Project Overview

This repository is intended to host the **Pancatz** web‑site – a modern, component‑driven frontend built with **React** (or similar) using **Vite** as the dev server, **TypeScript** for static typing, **TailwindCSS** for styling, and **Jest/Vitest** for testing.  The folder is currently a skeleton; the sections below describe the **canonical commands** and **code‑style guidelines** that all contributors (including autonomous agents) should follow.

---

## 🛠️ Build / Lint / Test Commands

| Purpose | npm Script | Command (run from project root) |
|--------|------------|---------------------------------|
| **Development server** – starts Vite with hot‑module reload | `dev` | `npm run dev` |
| **Production build** – bundles with Vite/TS → `dist/` | `build` | `npm run build` |
| **Preview build** – serves the production bundle locally | `preview` | `npm run preview` |
| **Clean** – removes generated `dist/` folder | `clean` | `npm run clean` |
| **Lint** – static analysis (`tsc --noEmit`) | `lint` | `npm run lint` |
| **Start server** – runs compiled server (if using an Express backend) | `start` | `npm run start` |
| **Run all tests** – Vitest (or Jest) suite | `test` | `npm test` |
| **Run a single test** – add a pattern after `--` (Vitest syntax) | n/a | `npm test -- <path/to/file.test.ts>` |

> **Note:** The exact commands depend on the scripts defined in `package.json`.  Below is the minimal `package.json` snippet used as reference:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit",
    "start": "node server.js",
    "test": "vitest"
  }
}
```

---

## 🧪 Testing

- **Framework** – Vitest (compatible with Jest syntax).  All test files should live alongside source files with a `.test.{ts,tsx}` suffix.
- **Run a single test file:**
  ```bash
  npm test -- src/components/Button.test.tsx
  ```
- **Run a single test case:**
  ```bash
  npm test -- -t "should toggle when clicked"
  ```
- **Coverage** – enable via `vitest --coverage` if desired.

---

## 📐 Code‑Style Guidelines

### 1️⃣ Imports
- **Order**:
  1. Node / built‑in modules
  2. External libraries (React, third‑party)
  3. Absolute project aliases (`@/components/*`)
  4. Relative imports (`../`)
- **Spacing** – one blank line between each group.
- **Named imports** – prefer named imports over default when possible.
- **No wildcard imports** (`import * as …`).

```ts
// Good
import fs from "node:fs";
import React, { useState } from "react";
import { Button } from "@/components/ui";
import { formatDate } from "../utils/date";

// Bad
import * as utils from "../utils";
```

### 2️⃣ Formatting
- **Prettier** – enforce with `prettier --write .` (run as part of `lint`).
- **Line length** – max **100 characters**.
- **Semicolons** – always use semicolons (`semi: true`).
- **Quotes** – double quotes for JSON/HTML, single quotes for JS/TS.
- **Trailing commas** – enable for multi‑line arrays/objects.

### 3️⃣ Types (TypeScript)
- **Strict mode** – `"strict": true` in `tsconfig.json`.
- **Explicit return types** for all public functions.
- **Prefer `interface`** for object shapes; use `type` for unions.
- **Never use `any`** – if you must, comment why.
- **Prefer `unknown`** over `any` when dealing with external data.

```ts
// Good
export interface User {
  id: string;
  name: string;
  email?: string;
}

export const getUser = (id: string): Promise<User> => {
  // …
};

// Bad
export const getUser = (id) => {
  // …
};
```

### 4️⃣ Naming Conventions
- **Files & directories** – kebab‑case (`my-component.tsx`).
- **Components** – PascalCase (`UserCard`).
- **Hooks** – `use` prefix (`useFetch`).
- **Variables / functions** – camelCase.
- **Constants** – UPPER_SNAKE_CASE.
- **Enums** – PascalCase, members in UPPER_SNAKE_CASE.
- **CSS classes (Tailwind)** – follow Tailwind’s utility naming; custom classes in `src/styles/` use kebab‑case.

### 5️⃣ Error Handling
- **Async/await** – wrap with `try…catch` and convert to a typed `Error` subclass when appropriate.
- **React error boundaries** – provide a fallback UI for render errors.
- **Validation** – use library (e.g., Zod, Yup) and handle validation errors explicitly.
- **Never swallow errors** – at least log them (`console.error`) or propagate.
- **Graceful degradation** – UI should remain functional when optional data fails to load.

```tsx
async function fetchData() {
  try {
    const res = await fetch("/api/data");
    if (!res.ok) {
      throw new HTTPError(res.status, await res.text());
    }
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
    // surface to UI via state or context
    throw err;
  }
}
```

---

## 📂 Project Structure (Suggested)
```
/pancatz-website
├─ src/
│  ├─ components/          # UI components (PascalCase)
│  ├─ hooks/               # Custom React hooks
│  ├─ pages/               # Top‑level route components
│  ├─ styles/              # Tailwind config, global CSS
│  ├─ utils/               # Helper functions & type definitions
│  └─ index.tsx            # App entry point
├─ public/                  # Static assets (favicon, robots.txt)
├─ tests/                  # Integration / e2e tests (optional)
├─ vite.config.ts          # Vite configuration
├─ tailwind.config.ts      # Tailwind configuration
├─ tsconfig.json           # TypeScript config (strict mode)
├─ .eslintrc.cjs           # ESLint with recommended React/TS rules
├─ .prettierrc            # Prettier config
└─ package.json           # Scripts listed above
```

---

## 🗂️ Additional Files
- **`.eslintrc.cjs`** – enable `eslint-plugin-react`, `@typescript-eslint`.
- **`.prettierrc`** – enforce line‑width, semicolons, quotes, trailing commas.
- **`jest.config.ts`** – if you prefer Jest instead of Vitest.
- **`README.md`** – brief project description, setup, and contribution guide.

---

## 🤖 How Agents Should Use This File
1. **Before any change** – run `npm run lint` to verify type safety.
2. **When adding new code** – format with `prettier --write` automatically via pre‑commit hook.
3. **Running tests** – use `npm test`; for fast feedback on a single component, use the single‑test command.
4. **CI pipelines** – should execute `npm ci`, `npm run lint`, `npm run build`, and `npm test`.
5. **Error handling** – always surface errors to the UI or logs; never silently ignore.

---

## 📜 License & Contribution
- **License:** MIT – see `LICENSE` file.
- **Contributing:** Fork, create a feature branch, run `npm run lint && npm test` before opening a PR. Follow the naming conventions and import ordering defined above.

---

*Generated by the autonomous agent for the `pancatz-website` project.*
