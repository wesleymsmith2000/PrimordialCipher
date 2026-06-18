import type { Factor } from "./math";
import type { PrimeBag } from "./types";

export const STANDARD_PRIMES: Factor[] = [2, 3, 5, 7];
export const SUPER_PRIMES: Factor[] = [11, 13, 17];
export const PLAYER_PRIME_CONTRIBUTION: Record<Factor, number> = {
  2: 5,
  3: 3,
  5: 2,
  7: 3
};

export function createPrimeBag(playerCount: number): PrimeBag {
  const remaining = Object.entries(PLAYER_PRIME_CONTRIBUTION).flatMap(([prime, count]) =>
    Array.from({ length: count * playerCount }, () => Number(prime))
  );

  return { remaining: shuffle(remaining), discard: [] };
}

export function drawPrime(bag: PrimeBag): { bag: PrimeBag; prime?: Factor } {
  const [prime, ...remaining] = bag.remaining;
  return { prime, bag: { ...bag, remaining } };
}

function shuffle<T>(values: T[]): T[] {
  return values
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
