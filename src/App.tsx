import { Brain, Dices, FlaskConical, StepForward } from "lucide-react";
import { useMemo, useState } from "react";
import { heuristicAi } from "./ai/heuristicAi";
import { applyAction, createInitialState, createTile } from "./engine";
import { primordialArtAssets, primordialBoardTemplate } from "./skins/primordialArt";
import { ArtGallery } from "./ui/ArtGallery";
import { BoardView } from "./ui/BoardView";
import { GameAssetAtlasPreview } from "./ui/GameAssetAtlasPreview";
import { TokenAtlasPreview } from "./ui/TokenAtlasPreview";
import { UiAssetAtlasPreview } from "./ui/UiAssetAtlasPreview";

export default function App() {
  const [state, setState] = useState(createInitialState);
  const activePlayer = state.players[state.activePlayerId];
  const latestEvents = useMemo(() => state.eventLog.slice(-8).reverse(), [state.eventLog]);

  return (
    <main className="app-shell">
      <section className="control-panel">
        <div>
          <p className="eyebrow">Round {state.round}</p>
          <h1>Primordial Cipher</h1>
        </div>

        <div className="toolbar" aria-label="Game actions">
          <button onClick={() => setState((current) => applyAction(current, { type: "draw-prime", playerId: current.activePlayerId }))}>
            <Dices size={18} />
            Draw
          </button>
          <button
            onClick={() =>
              setState((current) =>
                applyAction(current, {
                  type: "place-tile",
                  playerId: current.activePlayerId,
                  tile: createTile(current.activePlayerId, current.activePlayerId === "player-1" ? { x: -2, y: 0 } : { x: 2, y: 0 }, [2, 3], [3, 5])
                })
              )
            }
          >
            <FlaskConical size={18} />
            Seed
          </button>
          <button onClick={() => setState((current) => applyAction(current, heuristicAi.chooseAction(current, current.activePlayerId)))}>
            <Brain size={18} />
            AI
          </button>
          <button onClick={() => setState((current) => applyAction(current, { type: "end-turn", playerId: current.activePlayerId }))}>
            <StepForward size={18} />
            End
          </button>
        </div>

        <div className="status-grid">
          <div>
            <span>Active</span>
            <strong>{state.activePlayerId}</strong>
          </div>
          <div>
            <span>Resonance</span>
            <strong>{activePlayer.resonance}</strong>
          </div>
          <div>
            <span>Retained</span>
            <strong>{activePlayer.retainedPrimes.join(", ") || "none"}</strong>
          </div>
          <div>
            <span>Bag</span>
            <strong>{state.primeBag.remaining.length}</strong>
          </div>
        </div>
      </section>

      <BoardView state={state} boardTemplateSrc={primordialBoardTemplate} />

      <aside className="event-log">
        <div className="panel-heading">
          <h2>Event Log</h2>
          <span>{state.eventLog.length} entries</span>
        </div>
        {latestEvents.map((entry, index) => (
          <p key={`${entry.round}-${index}`}>
            <span>R{entry.round}</span>
            {entry.message}
          </p>
        ))}
        <TokenAtlasPreview />
        <GameAssetAtlasPreview />
        <UiAssetAtlasPreview />
        <ArtGallery assets={primordialArtAssets} />
      </aside>
    </main>
  );
}
