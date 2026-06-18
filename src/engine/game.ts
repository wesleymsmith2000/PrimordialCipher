import { resolveCombat } from "./combat";
import { storageLimit } from "./math";
import { applyNetworkCheck } from "./network";
import { drawPrime } from "./primeBag";
import { retromorphoseTile } from "./retromorphosis";
import type { GameAction, GameState, PlayerId } from "./types";

export function applyAction(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "draw-prime":
      return drawForPlayer(state, action.playerId);
    case "place-tile":
      return applyNetworkCheck({
        ...state,
        tiles: { ...state.tiles, [action.tile.id]: action.tile },
        eventLog: [...state.eventLog, { round: state.round, message: `${action.playerId} placed ${action.tile.id}.` }]
      });
    case "attack": {
      const attacker = state.tiles[action.attackerTileId];
      const defender = state.tiles[action.defenderTileId];
      if (!attacker || !defender) return state;
      return applyNetworkCheck(resolveCombat(state, attacker, defender));
    }
    case "retromorphose": {
      const tile = state.tiles[action.tileId];
      if (!tile) return state;
      return applyNetworkCheck(retromorphoseTile(state, tile, action.duaeId, action.factor));
    }
    case "end-turn":
      return endTurn(state, action.playerId);
    default:
      return state;
  }
}

function drawForPlayer(state: GameState, playerId: PlayerId): GameState {
  const { bag, prime } = drawPrime(state.primeBag);
  if (!prime) return { ...state, eventLog: [...state.eventLog, { round: state.round, message: "The prime bag is empty." }] };

  const player = state.players[playerId];
  const retainedPrimes = [...player.retainedPrimes, prime];
  const limit = storageLimit(retainedPrimes.length);

  return {
    ...state,
    primeBag: bag,
    players: {
      ...state.players,
      [playerId]: {
        ...player,
        retainedPrimes: retainedPrimes.slice(-Math.max(1, limit))
      }
    },
    eventLog: [...state.eventLog, { round: state.round, message: `${playerId} drew prime ${prime}.` }]
  };
}

function endTurn(state: GameState, playerId: PlayerId): GameState {
  const nextPlayerId: PlayerId = playerId === "player-1" ? "player-2" : "player-1";
  const nextRound = nextPlayerId === "player-1" ? state.round + 1 : state.round;

  return {
    ...state,
    round: nextRound,
    activePlayerId: nextPlayerId,
    telemetry: { ...state.telemetry, roundsPlayed: nextRound },
    eventLog: [...state.eventLog, { round: state.round, message: `${playerId} ended their turn.` }]
  };
}
