import { factorize, lcm, product } from "./math";
import { createDuae } from "./tiles";
import type { Duae, GameState, Tile } from "./types";

export function canRetromorphose(tile: Tile): boolean {
  return tile.duae.some((duae) => duae.revealed) && Object.values(tile.counters).every((active) => !active);
}

export function retromorphoseTile(state: GameState, tile: Tile, duaeId: "a" | "b", factor: number): GameState {
  if (!canRetromorphose(tile)) {
    return log(state, `${tile.id} cannot retromorphose while counter tokens are present or both Duae are concealed.`);
  }

  const source = tile.duae.find((duae) => duae.id === duaeId);
  const target = tile.duae.find((duae) => duae.id !== duaeId);
  if (!source || !target || !source.factors.includes(factor)) return log(state, `${tile.id} cannot move factor ${factor}.`);

  const movedSourceFactors = removeFirst(source.factors, factor);
  const movedTargetFactors = [...target.factors, factor];
  const modifiedUnus = tile.unus * factor;
  const newUnus = Math.round((product(movedSourceFactors) + product(movedTargetFactors) + modifiedUnus) / 3);
  const newFactors = factorize(newUnus);
  const duae = constructLegalDuae(newFactors);
  const discovered = newFactors.filter((value) => !state.players[tile.ownerId].factorPool.includes(value));

  const updatedTile: Tile = {
    ...tile,
    unus: lcm(duae[0].product, duae[1].product),
    duae,
    counters: { ...tile.counters, retromorphosis: true }
  };

  const unlockTokens = { ...state.players[tile.ownerId].unlockTokens };
  for (const prime of discovered.filter((value) => value > 7)) {
    unlockTokens[prime] = (unlockTokens[prime] ?? 0) + 1;
  }

  return log(
    {
      ...state,
      tiles: { ...state.tiles, [tile.id]: updatedTile },
      players: {
        ...state.players,
        [tile.ownerId]: {
          ...state.players[tile.ownerId],
          factorPool: [...state.players[tile.ownerId].factorPool, ...discovered],
          unlockTokens
        }
      },
      telemetry: {
        ...state.telemetry,
        retromorphoses: state.telemetry.retromorphoses + 1,
        firstRetromorphosisRound: state.telemetry.firstRetromorphosisRound ?? state.round,
        firstSuperPrimeRound: discovered.some((value) => value > 7)
          ? state.telemetry.firstSuperPrimeRound ?? state.round
          : state.telemetry.firstSuperPrimeRound
      }
    },
    `${tile.id} retromorphosed into Unus ${updatedTile.unus}.`
  );
}

function constructLegalDuae(factors: number[]): [Duae, Duae] {
  const a = createDuae("a", factors, true);
  const b = createDuae("b", factors.filter((_, index) => index % 2 === 0), true);
  if (a.product <= 60 && b.product <= 60) return [a, b];
  return [createDuae("a", factors.slice(0, 2), true), createDuae("b", factors.slice(2), true)];
}

function removeFirst(values: number[], target: number): number[] {
  const copy = [...values];
  const index = copy.indexOf(target);
  if (index >= 0) copy.splice(index, 1);
  return copy;
}

function log(state: GameState, message: string): GameState {
  return { ...state, eventLog: [...state.eventLog, { round: state.round, message }] };
}
