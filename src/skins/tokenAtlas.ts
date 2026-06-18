import dicePrimesAndOtherTokenIconsUrl from "../../assets/CipherBreydenArt/PrimordialCipher/DicePrimesAndOtherTokenIcons.png";

export type TokenSpriteKind =
  | "prime"
  | "resource"
  | "counter"
  | "timing"
  | "event"
  | "die"
  | "die-result";

export interface TokenSprite {
  id: string;
  label: string;
  kind: TokenSpriteKind;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const tokenAtlas = {
  src: dicePrimesAndOtherTokenIconsUrl,
  width: 1448,
  height: 1086
};

export const tokenSprites: TokenSprite[] = [
  { id: "prime-2", label: "Prime 2", kind: "prime", x: 48, y: 181, width: 132, height: 142 },
  { id: "prime-3", label: "Prime 3", kind: "prime", x: 192, y: 181, width: 132, height: 142 },
  { id: "prime-5", label: "Prime 5", kind: "prime", x: 336, y: 181, width: 132, height: 142 },
  { id: "prime-7", label: "Prime 7", kind: "prime", x: 481, y: 181, width: 132, height: 142 },
  { id: "super-prime-11", label: "Super-Prime 11", kind: "prime", x: 630, y: 181, width: 132, height: 142 },
  { id: "super-prime-13", label: "Super-Prime 13", kind: "prime", x: 754, y: 181, width: 132, height: 142 },
  { id: "super-prime-17", label: "Super-Prime 17", kind: "prime", x: 878, y: 181, width: 132, height: 142 },
  { id: "resonance", label: "Resonance", kind: "resource", x: 1026, y: 178, width: 152, height: 152 },
  { id: "unlock", label: "Unlock", kind: "resource", x: 1217, y: 179, width: 152, height: 152 },

  { id: "counter-recently-played", label: "Recently Played", kind: "counter", x: 56, y: 443, width: 122, height: 122 },
  { id: "counter-attacked", label: "Attacked", kind: "counter", x: 211, y: 443, width: 122, height: 122 },
  { id: "counter-defended", label: "Defended", kind: "counter", x: 368, y: 443, width: 122, height: 122 },
  { id: "counter-captured", label: "Captured", kind: "counter", x: 523, y: 443, width: 122, height: 122 },
  { id: "counter-retromorphosis", label: "Retromorphosis", kind: "counter", x: 678, y: 443, width: 122, height: 122 },

  { id: "timing-current-player", label: "Current Player", kind: "timing", x: 815, y: 455, width: 106, height: 106 },
  { id: "timing-round", label: "Round Marker", kind: "timing", x: 942, y: 455, width: 106, height: 106 },
  { id: "timing-action-used", label: "Action Used", kind: "timing", x: 1070, y: 455, width: 106, height: 106 },
  { id: "timing-stall-warning", label: "Stall Warning", kind: "timing", x: 1199, y: 455, width: 106, height: 106 },
  { id: "timing-board-expansion", label: "Board Expansion", kind: "timing", x: 1326, y: 455, width: 106, height: 106 },

  { id: "event-draw", label: "Draw", kind: "event", x: 68, y: 680, width: 100, height: 100 },
  { id: "event-place", label: "Place", kind: "event", x: 238, y: 680, width: 100, height: 100 },
  { id: "event-combat", label: "Combat", kind: "event", x: 410, y: 680, width: 100, height: 100 },
  { id: "event-capture", label: "Capture", kind: "event", x: 584, y: 680, width: 100, height: 100 },
  { id: "event-retromorphosis", label: "Retromorphosis", kind: "event", x: 753, y: 680, width: 100, height: 100 },
  { id: "event-discovery", label: "Discovery", kind: "event", x: 919, y: 680, width: 100, height: 100 },
  { id: "event-expansion", label: "Expansion", kind: "event", x: 1080, y: 680, width: 100, height: 100 },
  { id: "event-anchor-lock", label: "Anchor Lock", kind: "event", x: 1240, y: 680, width: 100, height: 100 },

  { id: "die-1", label: "Die 1", kind: "die", x: 82, y: 880, width: 103, height: 112 },
  { id: "die-2", label: "Die 2", kind: "die", x: 213, y: 880, width: 103, height: 112 },
  { id: "die-3", label: "Die 3", kind: "die", x: 344, y: 880, width: 103, height: 112 },
  { id: "die-4", label: "Die 4", kind: "die", x: 477, y: 880, width: 103, height: 112 },
  { id: "die-5", label: "Die 5", kind: "die", x: 610, y: 880, width: 103, height: 112 },
  { id: "die-6", label: "Die 6", kind: "die", x: 742, y: 880, width: 103, height: 112 },

  { id: "die-result-success", label: "Success", kind: "die-result", x: 947, y: 890, width: 116, height: 116 },
  { id: "die-result-failure", label: "Failure", kind: "die-result", x: 1090, y: 890, width: 116, height: 116 },
  { id: "die-result-reroll", label: "Reroll", kind: "die-result", x: 1236, y: 890, width: 116, height: 116 }
];

export const spriteGroups: Array<{ kind: TokenSpriteKind; title: string }> = [
  { kind: "prime", title: "Prime Tokens" },
  { kind: "resource", title: "Resources" },
  { kind: "counter", title: "Counters" },
  { kind: "timing", title: "Timing" },
  { kind: "event", title: "Event Log" },
  { kind: "die", title: "Dice" },
  { kind: "die-result", title: "Dice Results" }
];

export function getTokenSprite(id: string): TokenSprite | undefined {
  return tokenSprites.find((sprite) => sprite.id === id);
}
