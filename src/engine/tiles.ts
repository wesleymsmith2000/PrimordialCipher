import { lcm, product } from "./math";
import type { Duae, PlayerId, Position, Tile } from "./types";

let nextTileNumber = 1;

export function createDuae(id: "a" | "b", factors: number[], revealed = false): Duae {
  return {
    id,
    factors,
    product: product(factors),
    revealed
  };
}

export function createTile(ownerId: PlayerId, position: Position, duaeA: number[], duaeB: number[]): Tile {
  const a = createDuae("a", duaeA);
  const b = createDuae("b", duaeB);

  return {
    id: `tile-${nextTileNumber++}`,
    ownerId,
    position,
    unus: lcm(a.product, b.product),
    duae: [a, b],
    counters: {
      retromorphosis: false,
      recentlyPlayed: true,
      recentlyAttacked: false,
      recentlyDefended: false,
      recentlyCaptured: false
    }
  };
}

export function revealTouchingDuae(tile: Tile, duaeId: "a" | "b"): Tile {
  return {
    ...tile,
    duae: tile.duae.map((duae) => (duae.id === duaeId ? { ...duae, revealed: true } : duae)) as [Duae, Duae]
  };
}
