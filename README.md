# Primordial Cipher

Browser-based MVP implementation of Primordial Cipher, built engine-first for playtesting, automated simulation, and future UI/AI expansion.

## Stack

- Vite
- React
- TypeScript
- Vitest

## Start

```powershell
npm.cmd install
npm.cmd run dev
```

PowerShell blocks `npm.ps1` on this machine, so VS Code tasks call `npm.cmd`.

## Project Shape

```text
src/
  ai/
  engine/
  events/
  skins/
  tests/
  ui/
```

The engine is UI-independent and is covered by Vitest starter tests.
