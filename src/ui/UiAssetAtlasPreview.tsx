import { uiAssetAtlas, uiAssetGroups, uiAssetSprites } from "../skins/uiAssetAtlas";
import { SpriteIcon } from "./SpriteIcon";

export function UiAssetAtlasPreview() {
  return (
    <section className="token-atlas" aria-label="UI asset sprite atlas">
      <div className="panel-heading">
        <h2>UI Asset Atlas</h2>
        <span>{uiAssetSprites.length} sprites</span>
      </div>
      {uiAssetGroups.map((group) => {
        const sprites = uiAssetSprites.filter((sprite) => sprite.kind === group.kind);

        return (
          <div className="sprite-group" key={group.kind}>
            <h3>{group.title}</h3>
            <div className="sprite-grid">
              {sprites.map((sprite) => (
                <div className="sprite-chip" key={sprite.id}>
                  <SpriteIcon atlas={uiAssetAtlas} sprite={sprite} size={group.kind === "panel" || group.kind === "toolbar" ? 74 : 44} />
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
