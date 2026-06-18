import { gameAssetAtlas, gameAssetGroups, gameAssetSprites } from "../skins/gameAssetAtlas";
import { SpriteIcon } from "./SpriteIcon";

export function GameAssetAtlasPreview() {
  return (
    <section className="token-atlas" aria-label="Game asset sprite atlas">
      <div className="panel-heading">
        <h2>Game Asset Atlas</h2>
        <span>{gameAssetSprites.length} sprites</span>
      </div>
      {gameAssetGroups.map((group) => {
        const sprites = gameAssetSprites.filter((sprite) => sprite.kind === group.kind);

        return (
          <div className="sprite-group" key={group.kind}>
            <h3>{group.title}</h3>
            <div className="sprite-grid">
              {sprites.map((sprite) => (
                <div className="sprite-chip" key={sprite.id}>
                  <SpriteIcon atlas={gameAssetAtlas} sprite={sprite} size={group.kind === "anchor" || group.kind === "tile" ? 50 : 42} />
                  <span>{sprite.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
