import { describe, expect, it } from "vitest";
import { applyAction, createInitialState, createTile } from "../engine";

describe("network checks", () => {
  it("keeps tiles that touch their anchor", () => {
    const state = createInitialState();
    const tile = createTile("player-1", { x: -2, y: 0 }, [2], [2, 3]);
    const next = applyAction(state, { type: "place-tile", playerId: "player-1", tile });

    expect(next.tiles[tile.id]).toBeDefined();
  });

  it("discards disconnected tiles", () => {
    const state = createInitialState();
    const tile = createTile("player-1", { x: 0, y: 0 }, [2], [2, 3]);
    const next = applyAction(state, { type: "place-tile", playerId: "player-1", tile });

    expect(next.tiles[tile.id]).toBeUndefined();
  });
});
