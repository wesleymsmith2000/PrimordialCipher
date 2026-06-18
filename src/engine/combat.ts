import { countAbsentFactors, countOverlappingFactors, sharesFactor } from "./math";
import { areOrthogonallyAdjacent } from "./network";
import type { GameState, Tile } from "./types";

export interface CombatRoll {
  harmony: number;
  dissonance: number;
  melody: number;
  fugue: number;
  result: "attacker" | "defender" | "draw" | "failed";
}

export type DieRoller = () => number;

export function resolveCombat(state: GameState, attacker: Tile, defender: Tile, rollDie: DieRoller = d6): GameState {
  if (!areOrthogonallyAdjacent(attacker.position, defender.position) || !sharesUnusFactor(attacker, defender)) {
    return log(state, `${attacker.id} cannot attack ${defender.id}.`);
  }

  const attackerFactors = attacker.duae.flatMap((duae) => duae.factors);
  const defenderFactors = defender.duae.flatMap((duae) => duae.factors);

  if (!sharesFactor(attackerFactors, defenderFactors)) {
    const { [attacker.id]: _removed, ...remainingTiles } = state.tiles;
    return log({ ...state, tiles: remainingTiles }, `${attacker.id} failed contact and was discarded.`);
  }

  const harmony = countOverlappingFactors(attackerFactors, defenderFactors);
  const dissonance = countAbsentFactors(defenderFactors, attackerFactors);
  const melody = scoreDice(harmony, rollDie);
  const fugue = scoreDice(dissonance, rollDie);
  const result = melody < 1 ? "failed" : melody > fugue ? "attacker" : melody < fugue ? "defender" : "draw";

  const telemetry = {
    ...state.telemetry,
    combatTotals: state.telemetry.combatTotals + 1,
    attackerWins: state.telemetry.attackerWins + (result === "attacker" ? 1 : 0),
    defenderWins: state.telemetry.defenderWins + (result === "defender" || result === "failed" ? 1 : 0),
    draws: state.telemetry.draws + (result === "draw" ? 1 : 0)
  };

  if (result === "attacker") {
    return log(
      {
        ...state,
        telemetry,
        tiles: {
          ...state.tiles,
          [defender.id]: { ...defender, ownerId: attacker.ownerId, counters: { ...defender.counters, recentlyCaptured: true } }
        }
      },
      `${attacker.id} captured ${defender.id}.`
    );
  }

  if (result === "defender" || result === "failed") {
    const { [attacker.id]: _removed, ...remainingTiles } = state.tiles;
    return log({ ...state, telemetry, tiles: remainingTiles }, `${defender.id} repelled ${attacker.id}.`);
  }

  return log({ ...state, telemetry }, `${attacker.id} and ${defender.id} fought to a draw.`);
}

function sharesUnusFactor(attacker: Tile, defender: Tile): boolean {
  return sharesFactor(factorList(attacker.unus), factorList(defender.unus));
}

function factorList(value: number): number[] {
  const factors: number[] = [];
  for (let factor = 2; factor <= value; factor += 1) {
    if (value % factor === 0) factors.push(factor);
  }
  return factors;
}

function scoreDice(count: number, rollDie: DieRoller): number {
  let score = 0;
  for (let index = 0; index < count; index += 1) {
    let rolling = true;
    while (rolling) {
      const roll = rollDie();
      if (roll === 1) score -= 1;
      if (roll === 4) score += 1;
      if (roll >= 5) score += 1;
      rolling = roll >= 5;
    }
  }
  return score;
}

function d6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function log(state: GameState, message: string): GameState {
  return { ...state, eventLog: [...state.eventLog, { round: state.round, message }] };
}
