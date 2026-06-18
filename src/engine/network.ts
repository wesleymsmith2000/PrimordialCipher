import { sharesFactor } from "./math";
import type { GameState, Position, Tile } from "./types";

export function areOrthogonallyAdjacent(a: Position, b: Position): boolean {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) === 1;
}

export function tilesCanConnect(a: Tile, b: Tile): boolean {
  if (a.ownerId !== b.ownerId) return false;
  if (!areOrthogonallyAdjacent(a.position, b.position)) return false;
  return a.duae.some((left) => b.duae.some((right) => sharesFactor(left.factors, right.factors)));
}

export function applyNetworkCheck(state: GameState): GameState {
  let current = state;
  let changed = true;

  while (changed) {
    const connectedIds = new Set<string>();
    const tiles = Object.values(current.tiles);

    for (const anchor of Object.values(current.anchors)) {
      if (anchor.eliminated) continue;

      const frontier = tiles.filter(
        (tile) => tile.ownerId === anchor.ownerId && touchesAnchor(tile.position, anchor.origin)
      );

      for (const tile of frontier) connectedIds.add(tile.id);

      let expanded = true;
      while (expanded) {
        expanded = false;
        for (const tile of tiles) {
          if (connectedIds.has(tile.id) || tile.ownerId !== anchor.ownerId) continue;
          const connects = tiles.some((other) => connectedIds.has(other.id) && tilesCanConnect(tile, other));
          if (connects) {
            connectedIds.add(tile.id);
            expanded = true;
          }
        }
      }
    }

    const discarded = tiles.filter((tile) => !connectedIds.has(tile.id));
    changed = discarded.length > 0;
    if (changed) {
      current = {
        ...current,
        tiles: Object.fromEntries(tiles.filter((tile) => connectedIds.has(tile.id)).map((tile) => [tile.id, tile])),
        eventLog: [
          ...current.eventLog,
          ...discarded.map((tile) => ({
            round: current.round,
            message: `${tile.id} was discarded after losing its anchor network.`
          }))
        ]
      };
    }
  }

  return current;
}

function touchesAnchor(position: Position, origin: Position): boolean {
  const minX = origin.x - 1;
  const maxX = origin.x + 1;
  const minY = origin.y - 1;
  const maxY = origin.y + 1;
  const clampedX = Math.min(Math.max(position.x, minX), maxX);
  const clampedY = Math.min(Math.max(position.y, minY), maxY);

  return Math.abs(position.x - clampedX) + Math.abs(position.y - clampedY) === 1;
}
