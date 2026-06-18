import type { GameState, Tile } from "../engine";

interface BoardViewProps {
  state: GameState;
}

export function BoardView({ state }: BoardViewProps) {
  const radius = state.boardRadius;
  const tilesByPosition = new Map(Object.values(state.tiles).map((tile) => [`${tile.position.x},${tile.position.y}`, tile]));

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${radius * 2 + 1}, minmax(34px, 1fr))` }}>
      {Array.from({ length: radius * 2 + 1 }, (_, yIndex) =>
        Array.from({ length: radius * 2 + 1 }, (_, xIndex) => {
          const x = xIndex - radius;
          const y = yIndex - radius;
          const tile = tilesByPosition.get(`${x},${y}`);
          const anchor = Object.values(state.anchors).find(
            (candidate) =>
              x >= candidate.origin.x - 1 &&
              x <= candidate.origin.x + 1 &&
              y >= candidate.origin.y - 1 &&
              y <= candidate.origin.y + 1
          );

          return <Cell key={`${x},${y}`} tile={tile} anchorOwner={anchor?.ownerId} />;
        })
      )}
    </div>
  );
}

function Cell({ tile, anchorOwner }: { tile?: Tile; anchorOwner?: string }) {
  const className = ["cell", tile?.ownerId, anchorOwner ? "anchor" : ""].filter(Boolean).join(" ");

  return (
    <div className={className}>
      {tile ? (
        <>
          <strong>{tile.unus}</strong>
          <span>{tile.duae.map((duae) => duae.factors.join("x")).join(" | ")}</span>
        </>
      ) : anchorOwner ? (
        <span>{anchorOwner === "player-1" ? "A1" : "A2"}</span>
      ) : null}
    </div>
  );
}
