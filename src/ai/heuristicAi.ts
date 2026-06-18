import type { GameAction, GameState, PlayerId } from "../engine";

export interface AiPlayerPlugin {
  id: string;
  name: string;
  chooseAction(state: GameState, playerId: PlayerId): GameAction;
}

export const heuristicAi: AiPlayerPlugin = {
  id: "mvp-heuristic",
  name: "MVP Heuristic AI",
  chooseAction(state, playerId) {
    const enemy = Object.values(state.tiles).find((tile) => tile.ownerId !== playerId);
    const allied = Object.values(state.tiles).find((tile) => tile.ownerId === playerId);

    if (allied && enemy) {
      return { type: "attack", attackerTileId: allied.id, defenderTileId: enemy.id };
    }

    if (state.primeBag.remaining.length > 0) {
      return { type: "draw-prime", playerId };
    }

    return { type: "end-turn", playerId };
  }
};
