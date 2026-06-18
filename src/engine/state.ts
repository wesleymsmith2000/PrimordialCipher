import { createPrimeBag } from "./primeBag";
import type { Anchor, GameState, PlayerId, PlayerState, Telemetry } from "./types";

export function createInitialState(): GameState {
  const playerIds: PlayerId[] = ["player-1", "player-2"];
  const players = Object.fromEntries(playerIds.map((id) => [id, createPlayer(id)])) as Record<PlayerId, PlayerState>;

  return {
    round: 1,
    activePlayerId: "player-1",
    players,
    primeBag: createPrimeBag(playerIds.length),
    tiles: {},
    anchors: {
      "anchor-player-1": createAnchor("player-1", { x: -4, y: 0 }),
      "anchor-player-2": createAnchor("player-2", { x: 4, y: 0 })
    },
    boardRadius: 6,
    eventLog: [{ round: 1, message: "Primordial Cipher begins." }],
    telemetry: createTelemetry()
  };
}

function createPlayer(id: PlayerId): PlayerState {
  return {
    id,
    resonance: 0,
    retainedPrimes: [],
    factorPool: [],
    unlockTokens: {}
  };
}

function createAnchor(ownerId: PlayerId, origin: { x: number; y: number }): Anchor {
  return {
    id: `anchor-${ownerId}`,
    ownerId,
    origin,
    edgePrimes: {
      north: 2,
      east: 3,
      south: 5,
      west: 7
    },
    lockedSides: {
      north: false,
      east: false,
      south: false,
      west: false
    },
    coreResonance: 0,
    coreActive: false,
    eliminated: false,
    latticeSuperPrimes: [11, 13]
  };
}

function createTelemetry(): Telemetry {
  return {
    roundsPlayed: 1,
    combatTotals: 0,
    attackerWins: 0,
    defenderWins: 0,
    draws: 0,
    retromorphoses: 0,
    boardExpansions: 0
  };
}
