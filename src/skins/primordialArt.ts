import additionalUiAssetsSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/AdditionalUIAssetsSheet.png";
import arcanePuzzleBoardAssetSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/ArcanePuzzleBoardAssetSheet.png";
import boardGameComponentsUrl from "../../assets/CipherBreydenArt/PrimordialCipher/BoardGameComponents.png";
import dicePrimesAndOtherTokenIconsUrl from "../../assets/CipherBreydenArt/PrimordialCipher/DicePrimesAndOtherTokenIcons.png";
import fiveFoldArchivistUrl from "../../assets/CipherBreydenArt/PrimordialCipher/FiveFoldArchivist.png";
import gameAssetsSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/GameAssetsSheet.png";
import gameInterfaceOverviewUrl from "../../assets/CipherBreydenArt/PrimordialCipher/GameInterfaceOverview.png";
import gameUiConceptUrl from "../../assets/CipherBreydenArt/PrimordialCipher/GameUIConcept.png";
import goldenTriadUrl from "../../assets/CipherBreydenArt/PrimordialCipher/GoldenTriad.png";
import markerComponentsUrl from "../../assets/CipherBreydenArt/PrimordialCipher/MarkerComponents.png";
import playingBoardTemplateUrl from "../../assets/CipherBreydenArt/PrimordialCipher/PlayingBoardTemplate.png";
import shevaTheDreamingEagleUrl from "../../assets/CipherBreydenArt/PrimordialCipher/ShevaTheDreamingEagle.png";
import superPrimeTilesStyleSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/SuperPrimeTilesStyleSheet.png";
import twinPulseTileUrl from "../../assets/CipherBreydenArt/PrimordialCipher/TwinPulseTile.png";
import uiAssetSheetUrl from "../../assets/CipherBreydenArt/PrimordialCipher/UIAssetSheet.png";

export type PrimordialArtKind =
  | "board"
  | "card"
  | "component"
  | "interface"
  | "marker"
  | "tile"
  | "token"
  | "style-sheet";

export interface PrimordialArtAsset {
  id: string;
  title: string;
  kind: PrimordialArtKind;
  aspect: "landscape" | "portrait" | "square";
  src: string;
}

export interface PrimeCardArt {
  prime: 2 | 3 | 5 | 7;
  title: string;
  src: string;
}

export const primordialBoardTemplate = playingBoardTemplateUrl;

export const primeCardArt: Record<PrimeCardArt["prime"], PrimeCardArt> = {
  2: {
    prime: 2,
    title: "Twin Pulse Tile",
    src: twinPulseTileUrl
  },
  3: {
    prime: 3,
    title: "Golden Triad",
    src: goldenTriadUrl
  },
  5: {
    prime: 5,
    title: "Five Fold Archivist",
    src: fiveFoldArchivistUrl
  },
  7: {
    prime: 7,
    title: "Sheva the Dreaming Eagle",
    src: shevaTheDreamingEagleUrl
  }
};

export const primeCardArtList = Object.values(primeCardArt).sort((left, right) => left.prime - right.prime);

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
    id: "game-assets-sheet",
    title: "Game Assets Sheet",
    kind: "component",
    aspect: "landscape",
    src: gameAssetsSheetUrl
  },
  {
    id: "dice-primes-and-other-token-icons",
    title: "Dice, Primes, and Other Token Icons",
    kind: "token",
    aspect: "landscape",
    src: dicePrimesAndOtherTokenIconsUrl
  },
  {
    id: "game-interface-overview",
    title: "Game Interface Overview",
    kind: "interface",
    aspect: "landscape",
    src: gameInterfaceOverviewUrl
  },
  {
    id: "game-ui-concept",
    title: "Game UI Concept",
    kind: "interface",
    aspect: "landscape",
    src: gameUiConceptUrl
  },
  {
    id: "marker-components",
    title: "Marker Components",
    kind: "marker",
    aspect: "landscape",
    src: markerComponentsUrl
  },
  {
    id: "ui-asset-sheet",
    title: "UI Asset Sheet",
    kind: "interface",
    aspect: "landscape",
    src: uiAssetSheetUrl
  },
  {
    id: "additional-ui-assets-sheet",
    title: "Additional UI Assets Sheet",
    kind: "interface",
    aspect: "landscape",
    src: additionalUiAssetsSheetUrl
  },
  {
    id: "twin-pulse-tile",
    title: "Twin Pulse Tile",
    kind: "card",
    aspect: "portrait",
    src: twinPulseTileUrl
  },
  {
    id: "golden-triad",
    title: "Golden Triad",
    kind: "card",
    aspect: "portrait",
    src: goldenTriadUrl
  },
  {
    id: "five-fold-archivist",
    title: "Five Fold Archivist",
    kind: "card",
    aspect: "portrait",
    src: fiveFoldArchivistUrl
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
