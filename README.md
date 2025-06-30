# 📘 React Pre-Ready Dashboard with NestJS 🚀

[![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)](https://nestjs.com/)
[![React](https://img.shields.io/badge/React-v18-blue?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern full-stack setup combining **NestJS** 🐱, **React (Server-Side Rendered)** ⚛️, **TailwindCSS** 🎨, and **Hot Reload** 🔄 for a seamless development experience. This guide provides step-by-step instructions to set up and run the project.

---

## 📂 Project Structure

```
project-root/
├── public/
│   └── tailwind.css          # 📄 Compiled Tailwind output
├── src/
│   ├── views/
│   │   ├── Home.tsx          # ⚛️ React SSR component
│   │   └── styles/
│   │       └── input.css     # 🎨 Tailwind input
│   ├── app.module.ts         # 🛠️ NestJS module
│   ├── main.ts               # 🚀 Main NestJS entry
│   └── start.ts              # ⚡ Entry point with Babel
├── babel.config.js           # 🔧 Babel configuration
├── tailwind.config.js        # 🎨 Tailwind configuration
├── postcss.config.js         # 🛠️ PostCSS configuration
├── package.json              # 📦 Project dependencies
└── tsconfig.json             # ⚙️ TypeScript configuration
```

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/uforco/React-Pre-Ready-Dashboard-with-NestJS.git
   cd your-repo
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run in development mode**:
   ```bash
   pnpm run dev
   ```

4. Open your browser at `http://localhost:3000` to see the app with live reload! 🌐

---

## 🛠️ 1. TailwindCSS Setup via CLI 🎨

### 📥 Install Dependencies

```bash
pnpm add -D tailwindcss @tailwindcss/cli
npx tailwindcss init -p
```

### 📝 Create Tailwind Input File: `src/views/styles/input.css`

```css
@import "tailwindcss";
```

### ⚙️ Update `tailwind.config.js` (Optional)

```js
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: { extend: {} },
  plugins: [],
};
```

### 📜 Add Build Script in `package.json`

```json
"scripts": {
  "build:css": "tailwindcss -i ./src/views/styles/input.css -o ./public/tailwind.css",
  "watch:css": "tailwindcss -i ./src/views/styles/input.css -o ./public/tailwind.css --watch",
  "format:dev": "prettier --write .",
}
```

### 🏗️ Build Tailwind Output

```bash
pnpm run build:css
```

---

## ⚙️ 2. Babel Setup for React TSX 🛠️

### 📥 Install Dependencies

```bash
pnpm add -D @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react @babel/register
```

### 📝 Create `babel.config.js` (Not required)

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  extensions: ['.ts', '.tsx'],
};
```

### 🚀 Create Entry File: `src/start.ts` (Not required)

```ts
require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  cache: false,
  ignore: [/node_modules/],
});

import './main';
```

---

## 🌐 3. Serve Tailwind CSS + React SSR via NestJS 🐱

### 📝 Update `src/main.ts`

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as livereload from 'livereload';
const connectLivereload = require('connect-livereload');
import { join } from 'path';

async function bootstrap() {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(join(__dirname, '..', 'public'));
  liveReloadServer.watch(join(__dirname, 'views'));

  liveReloadServer.server.once('connection', () => {
    setTimeout(() => liveReloadServer.refresh('/'), 100);
  });

  const app = await NestFactory.create(AppModule);
  app.use(connectLivereload());
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(3000);
}

bootstrap();
```

---

## ⚛️ 4. React View Example

### 📝 Create `src/views/Home.tsx`

```tsx
import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind + Live Reload Works! 🎉
      </h1>
    </div>
  );
}
```

---

## 🔄 5. Scripts for Development

### 📜 Update `package.json`

```json
"scripts": {
  "start:dev": "ts-node-dev --respawn src/start.ts", // Optional
  "watch:css": "tailwindcss -i ./src/views/styles/input.css -o ./public/tailwind.css --watch",
  "dev": "concurrently \"pnpm:start:dev\" \"pnpm:watch:css\"" // Optional
}
```

> **Note**: Install additional dev dependencies:

```bash
pnpm add -D ts-node-dev concurrently
```

---

## 🎉 Final Result

- ✨ **React** `.tsx` views rendered server-side by **NestJS**
- 🎨 **TailwindCSS** styles applied from `public/tailwind.css`
- 🔄 **Hot Reload** for instant browser updates on `.tsx` or CSS changes
- ⚡ Lightning-fast development with `pnpm run dev`

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

---

## 📚 Need More?

Want a **GitHub repository** or a **ZIP export** of this setup? Let me know, and I can guide you through creating one! 🚀
```

### Steps to Create and Download the `readme.md` File

1. **Create the File Locally**:
   - Open a text editor (e.g., VS Code, Notepad, or any IDE).
   - Copy the entire markdown content above.
   - Paste it into a new file.
   - Save the file as `readme.md` (ensure the extension is `.md`) in your project directory.

2. **Download Options**:
   Since I can't directly provide a downloadable file, here are ways to create and download it:

   **Option 1: Manual Download**
   - After saving the file as `readme.md` in your project folder, you can:
     - Right-click the file in your file explorer and select "Copy."
     - Paste it into a location where you want to store or share it.
     - To share online, upload it to a service like Google Drive, Dropbox, or GitHub, and generate a download link.

   **Option 2: Create a GitHub Repository**
   - If you want to host this on GitHub:
     1. Go to [GitHub](https://github.com) and sign in.
     2. Create a new repository (e.g., `nestjs-react-tailwind-setup`).
     3. In the repository, click "Add file" > "Create new file."
     4. Name the file `readme.md`.
     5. Copy and paste the markdown content above.
     6. Commit the file to the repository.
     7. GitHub will render the `readme.md` on your repository's main page, and you can download the raw file by:
        - Navigating to the `readme.md` file in the repository.
        - Clicking the "Raw" button.
        - Right-clicking the page and selecting "Save As" to download it as `readme.md`.

   **Option 3: Generate a ZIP File**
   - If you want a ZIP file containing the `readme.md` (and optionally other project files):
     1. Create a folder (e.g., `nestjs-project`).
     2. Save the `readme.md` file in this folder using the steps above.
     3. Optionally, add the other project files (e.g., `src/`, `public/`, `babel.config.js`, etc.) as described in the project structure.
     4. Right-click the folder, select "Send to" > "Compressed (zipped) folder" (on Windows) or use a tool like `zip` on macOS/Linux:
        ```bash
        zip -r nestjs-project.zip nestjs-project/
        ```
     5. The resulting `nestjs-project.zip` can be downloaded or shared.

   **Option 4: Use an Online Tool**
   - Copy the markdown content above.
   - Paste it into an online text-to-file converter (e.g., [Text to File](https://www.texttofile.com/)).
   - Download the generated `readme.md` file.

### Additional Notes
- **License File**: The `readme.md` references a `LICENSE` file. If you want to include an MIT License, create a file named `LICENSE` with the following content:
  ```markdown
  MIT License

  ```
  Copyright (c) `[2025]` `[MD SHARIF]`
