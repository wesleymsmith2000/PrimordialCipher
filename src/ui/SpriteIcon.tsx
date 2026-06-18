import type { CSSProperties } from "react";
import { tokenAtlas, type TokenSprite } from "../skins/tokenAtlas";

interface SpriteAtlas {
  src: string;
  width: number;
  height: number;
}

interface SpriteFrame {
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SpriteIconProps {
  atlas?: SpriteAtlas;
  sprite: SpriteFrame | TokenSprite;
  size?: number;
}

export function SpriteIcon({ atlas = tokenAtlas, sprite, size = 44 }: SpriteIconProps) {
  const scale = size / Math.max(sprite.width, sprite.height);

  return (
    <span
      aria-label={sprite.label}
      className="sprite-icon"
      role="img"
      style={{ width: `${sprite.width * scale}px`, height: `${sprite.height * scale}px` }}
      title={sprite.label}
    >
      <span
        className="sprite-icon-image"
        style={
          {
            "--sprite-x": `-${sprite.x}px`,
            "--sprite-y": `-${sprite.y}px`,
            "--sprite-scale": scale,
            "--sprite-atlas-width": `${atlas.width}px`,
            "--sprite-atlas-height": `${atlas.height}px`,
            backgroundImage: `url(${atlas.src})`,
            height: `${sprite.height}px`,
            width: `${sprite.width}px`
          } as CSSProperties
        }
      />
    </span>
  );
}
