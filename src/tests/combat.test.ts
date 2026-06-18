import { describe, expect, it } from "vitest";
import { resolveCombat, createInitialState, createTile } from "../engine";

describe("combat", () => {
  it("captures a defender when melody beats fugue", () => {
    const state = createInitialState();
    const attacker = createTile("player-1", { x: 0, y: 0 }, [2, 3], [3]);
    const defender = createTile("player-2", { x: 1, y: 0 }, [3], [5]);
    const withTiles = {
      ...state,
      tiles: {
        [attacker.id]: attacker,
        [defender.id]: defender
      }
    };

    const next = resolveCombat(withTiles, attacker, defender, () => 4);

    expect(next.tiles[defender.id].ownerId).toBe("player-1");
    expect(next.telemetry.attackerWins).toBe(1);
  });
});
