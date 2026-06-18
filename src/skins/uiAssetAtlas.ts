import additionalUiAssetsSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/AdditionalUIAssetsSheet.png";

export type UiAssetSpriteKind = "panel" | "border" | "button" | "card" | "toolbar";

export interface UiAssetSprite {
  id: string;
  label: string;
  kind: UiAssetSpriteKind;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const uiAssetAtlas = {
  src: additionalUiAssetsSheetUrl,
  width: 1448,
  height: 1086
};

export const uiAssetSprites: UiAssetSprite[] = [
  { id: "panel-prime-hand", label: "Prime Hand Panel", kind: "panel", x: 34, y: 108, width: 454, height: 177 },
  { id: "panel-tile-builder", label: "Tile Builder Panel", kind: "panel", x: 514, y: 108, width: 402, height: 177 },
  { id: "panel-combat-resolver", label: "Combat Resolver Panel", kind: "panel", x: 941, y: 108, width: 468, height: 177 },
  { id: "panel-retromorphosis", label: "Retromorphosis Panel", kind: "panel", x: 34, y: 327, width: 410, height: 201 },
  { id: "panel-anchor-status", label: "Anchor Status Panel", kind: "panel", x: 474, y: 327, width: 326, height: 201 },
  { id: "panel-resonance", label: "Resonance Panel", kind: "panel", x: 836, y: 327, width: 300, height: 201 },
  { id: "panel-turn-round", label: "Turn / Round Tracker", kind: "panel", x: 1163, y: 327, width: 244, height: 201 },
  { id: "panel-unlock-token", label: "Unlock-Token Panel", kind: "panel", x: 35, y: 569, width: 365, height: 101 },
  { id: "panel-telemetry-debug", label: "Telemetry / Debug Panel", kind: "panel", x: 428, y: 569, width: 535, height: 101 },
  { id: "panel-scenario-controls", label: "Scenario Controls", kind: "panel", x: 991, y: 569, width: 418, height: 101 },

  { id: "border-bar-long", label: "Long Border Bar", kind: "border", x: 34, y: 730, width: 203, height: 19 },
  { id: "border-bar-medium", label: "Medium Border Bar", kind: "border", x: 35, y: 760, width: 193, height: 18 },
  { id: "border-bar-short", label: "Short Border Bar", kind: "border", x: 35, y: 793, width: 166, height: 18 },
  { id: "border-corner-teal", label: "Teal Corner", kind: "border", x: 325, y: 730, width: 42, height: 42 },
  { id: "border-corner-gold", label: "Gold Corner", kind: "border", x: 381, y: 785, width: 42, height: 42 },
  { id: "border-connector-small", label: "Small Connector", kind: "border", x: 36, y: 871, width: 27, height: 27 },
  { id: "border-connector-long", label: "Long Connector", kind: "border", x: 93, y: 872, width: 91, height: 19 },
  { id: "border-edge-cap", label: "Edge Cap", kind: "border", x: 346, y: 865, width: 60, height: 18 },

  { id: "button-confirm", label: "Confirm Button", kind: "button", x: 468, y: 727, width: 180, height: 38 },
  { id: "button-warning", label: "Warning Button", kind: "button", x: 674, y: 727, width: 186, height: 38 },
  { id: "button-toggle-off", label: "Toggle Off", kind: "button", x: 467, y: 789, width: 83, height: 36 },
  { id: "button-toggle-on", label: "Toggle On", kind: "button", x: 568, y: 789, width: 83, height: 36 },
  { id: "button-icon-round-unlock", label: "Round Icon Button", kind: "button", x: 469, y: 865, width: 52, height: 52 },
  { id: "button-icon-round-combat", label: "Combat Icon Button", kind: "button", x: 527, y: 865, width: 52, height: 52 },
  { id: "button-icon-square-eye", label: "Square Icon Button", kind: "button", x: 648, y: 866, width: 47, height: 47 },

  { id: "card-info-portrait", label: "Portrait Info Card", kind: "card", x: 922, y: 712, width: 126, height: 151 },
  { id: "card-info-landscape", label: "Landscape Info Card", kind: "card", x: 1064, y: 712, width: 180, height: 123 },
  { id: "card-dark-log", label: "Dark Log Card", kind: "card", x: 1253, y: 712, width: 155, height: 123 },
  { id: "card-dark-strip", label: "Dark Strip", kind: "card", x: 921, y: 870, width: 176, height: 48 },
  { id: "card-light-pill", label: "Light Pill", kind: "card", x: 1112, y: 870, width: 126, height: 48 },
  { id: "card-teal-pill", label: "Teal Pill", kind: "card", x: 1263, y: 870, width: 145, height: 48 },

  { id: "toolbar-action-mode", label: "Action Mode Toolbar", kind: "toolbar", x: 21, y: 946, width: 1402, height: 93 }
];

export const uiAssetGroups: Array<{ kind: UiAssetSpriteKind; title: string }> = [
  { kind: "panel", title: "Panels" },
  { kind: "border", title: "Borders" },
  { kind: "button", title: "Buttons" },
  { kind: "card", title: "Cards" },
  { kind: "toolbar", title: "Toolbar" }
];
