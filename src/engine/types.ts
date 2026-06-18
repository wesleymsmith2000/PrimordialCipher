import type { Factor } from "./math";

export type PlayerId = "player-1" | "player-2";
export type TileId = string;
export type AnchorId = string;

export interface Position {
  x: number;
  y: number;
}

export interface Duae {
  id: "a" | "b";
  factors: Factor[];
  product: number;
  revealed: boolean;
}

export interface Tile {
  id: TileId;
  ownerId: PlayerId;
  position: Position;
  unus: number;
  duae: [Duae, Duae];
  counters: {
    retromorphosis: boolean;
    recentlyPlayed: boolean;
    recentlyAttacked: boolean;
    recentlyDefended: boolean;
    recentlyCaptured: boolean;
  };
}

export interface Anchor {
  id: AnchorId;
  ownerId: PlayerId;
  origin: Position;
  edgePrimes: Record<"north" | "east" | "south" | "west", Factor>;
  lockedSides: Record<"north" | "east" | "south" | "west", boolean>;
  coreResonance: number;
  coreActive: boolean;
  eliminated: boolean;
  latticeSuperPrimes: Factor[];
}

export interface PlayerState {
  id: PlayerId;
  resonance: number;
  retainedPrimes: Factor[];
  factorPool: Factor[];
  unlockTokens: Record<number, number>;
}

export interface PrimeBag {
  remaining: Factor[];
  discard: Factor[];
}

export interface EventLogEntry {
  round: number;
  message: string;
}

export interface Telemetry {
  roundsPlayed: number;
  firstCaptureRound?: number;
  firstRetromorphosisRound?: number;
  firstSuperPrimeRound?: number;
  firstLockRound?: number;
  firstEliminationRound?: number;
  combatTotals: number;
  attackerWins: number;
  defenderWins: number;
  draws: number;
  retromorphoses: number;
  boardExpansions: number;
}

export interface GameState {
  round: number;
  activePlayerId: PlayerId;
  players: Record<PlayerId, PlayerState>;
  primeBag: PrimeBag;
  tiles: Record<TileId, Tile>;
  anchors: Record<AnchorId, Anchor>;
  boardRadius: number;
  stalledRoundStart?: number;
  eventLog: EventLogEntry[];
  telemetry: Telemetry;
}

export type GameAction =
  | { type: "draw-prime"; playerId: PlayerId }
  | { type: "place-tile"; playerId: PlayerId; tile: Tile }
  | { type: "attack"; attackerTileId: TileId; defenderTileId: TileId }
  | { type: "retromorphose"; playerId: PlayerId; tileId: TileId; duaeId: "a" | "b"; factor: Factor }
  | { type: "end-turn"; playerId: PlayerId };
