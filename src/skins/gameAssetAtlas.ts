import gameAssetsSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/GameAssetsSheet.png";

export type GameAssetSpriteKind = "anchor" | "tile" | "combat" | "combat-result" | "highlight";

export interface GameAssetSprite {
  id: string;
  label: string;
  kind: GameAssetSpriteKind;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const gameAssetAtlas = {
  src: gameAssetsSheetUrl,
  width: 1448,
  height: 1086
};

export const gameAssetSprites: GameAssetSprite[] = [
  { id: "anchor-board", label: "Anchor Board", kind: "anchor", x: 40, y: 132, width: 318, height: 312 },
  { id: "anchor-core", label: "Core / Lattice", kind: "anchor", x: 405, y: 134, width: 162, height: 162 },
  { id: "anchor-side-top", label: "Side Top", kind: "anchor", x: 374, y: 333, width: 76, height: 101 },
  { id: "anchor-side-right", label: "Side Right", kind: "anchor", x: 466, y: 333, width: 76, height: 101 },
  { id: "anchor-side-bottom", label: "Side Bottom", kind: "anchor", x: 557, y: 333, width: 76, height: 101 },
  { id: "anchor-side-left", label: "Side Left", kind: "anchor", x: 650, y: 333, width: 76, height: 101 },
  { id: "anchor-active", label: "Anchor Active", kind: "anchor", x: 745, y: 157, width: 153, height: 153 },
  { id: "anchor-locked", label: "Anchor Locked", kind: "anchor", x: 912, y: 157, width: 153, height: 153 },
  { id: "anchor-vulnerable", label: "Anchor Vulnerable", kind: "anchor", x: 1078, y: 157, width: 153, height: 153 },
  { id: "anchor-eliminated", label: "Anchor Eliminated", kind: "anchor", x: 1246, y: 157, width: 153, height: 153 },

  { id: "tile-public-unus", label: "Public Tile", kind: "tile", x: 42, y: 534, width: 172, height: 172 },
  { id: "tile-concealed-duae", label: "Concealed Tile Back", kind: "tile", x: 238, y: 534, width: 172, height: 172 },
  { id: "tile-revealed-duae", label: "Revealed Tile Face", kind: "tile", x: 438, y: 534, width: 172, height: 172 },
  { id: "tile-player-1", label: "Player 1 Ownership", kind: "tile", x: 648, y: 534, width: 172, height: 172 },
  { id: "tile-player-2", label: "Player 2 Ownership", kind: "tile", x: 856, y: 534, width: 172, height: 172 },
  { id: "tile-captured", label: "Captured Tile", kind: "tile", x: 1064, y: 534, width: 172, height: 172 },
  { id: "tile-disconnected", label: "Disconnected Tile", kind: "tile", x: 1246, y: 534, width: 172, height: 172 },

  { id: "combat-attacker", label: "Attacker", kind: "combat", x: 34, y: 805, width: 62, height: 62 },
  { id: "combat-defender", label: "Defender", kind: "combat", x: 109, y: 805, width: 62, height: 62 },
  { id: "combat-support", label: "Support", kind: "combat", x: 184, y: 805, width: 62, height: 62 },
  { id: "combat-harmony", label: "Harmony", kind: "combat", x: 260, y: 805, width: 62, height: 62 },
  { id: "combat-dissonance", label: "Dissonance", kind: "combat", x: 335, y: 805, width: 62, height: 62 },
  { id: "combat-melody", label: "Melody", kind: "combat", x: 412, y: 805, width: 62, height: 62 },
  { id: "combat-fugue", label: "Fugue", kind: "combat", x: 487, y: 805, width: 62, height: 62 },
  { id: "combat-result-win", label: "Combat Win", kind: "combat-result", x: 145, y: 946, width: 76, height: 76 },
  { id: "combat-result-draw", label: "Combat Draw", kind: "combat-result", x: 244, y: 946, width: 76, height: 76 },
  { id: "combat-result-fail", label: "Combat Fail", kind: "combat-result", x: 342, y: 946, width: 76, height: 76 },

  { id: "highlight-legal-placement", label: "Legal Placement", kind: "highlight", x: 576, y: 805, width: 120, height: 151 },
  { id: "highlight-illegal-placement", label: "Illegal Placement", kind: "highlight", x: 711, y: 805, width: 120, height: 151 },
  { id: "highlight-selected-tile", label: "Selected Tile", kind: "highlight", x: 854, y: 805, width: 120, height: 151 },
  { id: "highlight-attackable-enemy", label: "Attackable Enemy", kind: "highlight", x: 987, y: 805, width: 120, height: 151 },
  { id: "highlight-network-connected", label: "Network Connected", kind: "highlight", x: 1114, y: 805, width: 154, height: 154 },
  { id: "highlight-disconnected-danger", label: "Disconnected Danger", kind: "highlight", x: 1282, y: 805, width: 154, height: 154 }
];

export const gameAssetGroups: Array<{ kind: GameAssetSpriteKind; title: string }> = [
  { kind: "anchor", title: "Anchors" },
  { kind: "tile", title: "Tiles" },
  { kind: "combat", title: "Combat Markers" },
  { kind: "combat-result", title: "Combat Results" },
  { kind: "highlight", title: "Highlights" }
];
