import arcanePuzzleBoardAssetSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/ArcanePuzzleBoardAssetSheet.png";
import boardGameComponentsUrl from "../../assets/CipherBreydenArt/PrimordialCipher/BoardGameComponents.png";
import fiveFoldArchivistUrl from "../../assets/CipherBreydenArt/PrimordialCipher/FiveFoldArchivist.png";
import goldenTriadUrl from "../../assets/CipherBreydenArt/PrimordialCipher/GoldenTriad.png";
import markerComponentsUrl from "../../assets/CipherBreydenArt/PrimordialCipher/MarkerComponents.png";
import playingBoardTemplateUrl from "../../assets/CipherBreydenArt/PrimordialCipher/PlayingBoardTemplate.png";
import shevaTheDreamingEagleUrl from "../../assets/CipherBreydenArt/PrimordialCipher/ShevaTheDreamingEagle.png";
import superPrimeTilesStyleSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/SuperPrimeTilesStyleSheet.png";
import twinPulseTileUrl from "../../assets/CipherBreydenArt/PrimordialCipher/TwinPulseTile.png";

export type PrimordialArtKind = "board" | "card" | "component" | "marker" | "tile" | "style-sheet";

export interface PrimordialArtAsset {
  id: string;
  title: string;
  kind: PrimordialArtKind;
  aspect: "landscape" | "portrait" | "square";
  src: string;
}

export const primordialBoardTemplate = playingBoardTemplateUrl;

export const primordialArtAssets: PrimordialArtAsset[] = [
  {
    id: "playing-board-template",
    title: "Playing Board Template",
    kind: "board",
    aspect: "landscape",
    src: playingBoardTemplateUrl
  },
  {
    id: "arcane-puzzle-board-asset-sheet",
    title: "Arcane Puzzle Board Asset Sheet",
    kind: "board",
    aspect: "landscape",
    src: arcanePuzzleBoardAssetSheetUrl
  },
  {
    id: "board-game-components",
    title: "Board Game Components",
    kind: "component",
    aspect: "landscape",
    src: boardGameComponentsUrl
  },
  {
    id: "marker-components",
    title: "Marker Components",
    kind: "marker",
    aspect: "landscape",
    src: markerComponentsUrl
  },
  {
    id: "five-fold-archivist",
    title: "Five Fold Archivist",
    kind: "card",
    aspect: "portrait",
    src: fiveFoldArchivistUrl
  },
  {
    id: "golden-triad",
    title: "Golden Triad",
    kind: "card",
    aspect: "portrait",
    src: goldenTriadUrl
  },
  {
    id: "twin-pulse-tile",
    title: "Twin Pulse Tile",
    kind: "tile",
    aspect: "portrait",
    src: twinPulseTileUrl
  },
  {
    id: "sheva-the-dreaming-eagle",
    title: "Sheva the Dreaming Eagle",
    kind: "card",
    aspect: "square",
    src: shevaTheDreamingEagleUrl
  },
  {
    id: "super-prime-tiles-style-sheet",
    title: "Super Prime Tiles Style Sheet",
    kind: "style-sheet",
    aspect: "square",
    src: superPrimeTilesStyleSheetUrl
  }
];
