import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const outDir = path.join(rootDir, 'vercel-dist');

// Clean target directory first
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Copy ONLY git-tracked files from dist/ (skips .git, .vercel, etc.)
const files = execSync('git ls-files', { cwd: distDir, encoding: 'utf8' })
  .trim()
  .split('\n')
  .map(s => s.trim())
  .filter(f => f && f !== '.gitignore');

for (const rel of files) {
  const srcPath = path.join(distDir, rel);
  const dstPath = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(dstPath), { recursive: true });
  fs.copyFileSync(srcPath, dstPath);
}

// Write safe vercel.json at root that prevents vite build from overwriting with src/App.tsx
const vercelJson = {
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "echo Using prebuilt static King of Cards experience",
  "outputDirectory": "vercel-dist"
};
fs.writeFileSync(path.join(rootDir, 'vercel.json'), JSON.stringify(vercelJson, null, 2) + '\n');

console.log(`Copied ${files.length} verified files into vercel-dist/ and updated vercel.json!`);
