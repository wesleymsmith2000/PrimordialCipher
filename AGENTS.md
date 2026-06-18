# Primordial Cipher Codex Notes

## Project

Primordial Cipher is a Vite + React + TypeScript MVP with the game engine intentionally separated from the UI.

## Structure

- `src/engine/` contains UI-independent game rules, math, state, combat, network, and retromorphosis logic.
- `src/ai/` contains AI plugin interfaces and heuristic AI.
- `src/ui/` contains React UI components.
- `src/skins/` maps visual assets into UI-ready skin registries.
- `src/tests/` contains Vitest coverage for engine behavior.
- `assets/CipherBreydenArt/PrimordialCipher/` contains concept art and board component assets.

## Commands

Use `npm.cmd` on Windows PowerShell if `npm.ps1` execution policy blocks plain `npm`.

```bash
npm install
npm run typecheck
npm run test:run
npm run build
```

For local development:

```bash
npm run dev
```

## Guardrails

- Keep engine rules independent from React UI.
- Do not simplify away the prime factor, LCM, resonance, combat, retromorphosis, or network topology systems.
- Prefer adding focused tests in `src/tests/` when changing engine behavior.
- Do not commit `node_modules/` or `dist/`.
