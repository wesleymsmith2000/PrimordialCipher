import { spriteGroups, tokenSprites } from "../skins/tokenAtlas";
import { SpriteIcon } from "./SpriteIcon";

export function TokenAtlasPreview() {
  return (
    <section className="token-atlas" aria-label="Token sprite atlas">
      <div className="panel-heading">
        <h2>Token Atlas</h2>
        <span>{tokenSprites.length} sprites</span>
      </div>
      {spriteGroups.map((group) => {
        const sprites = tokenSprites.filter((sprite) => sprite.kind === group.kind);

        return (
          <div className="sprite-group" key={group.kind}>
            <h3>{group.title}</h3>
            <div className="sprite-grid">
              {sprites.map((sprite) => (
                <div className="sprite-chip" key={sprite.id}>
                  <SpriteIcon sprite={sprite} size={group.kind === "die" ? 42 : 40} />
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
