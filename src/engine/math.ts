export type Factor = number;

export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a / gcd(a, b)) * b);
}

export function product(factors: Factor[]): number {
  return factors.reduce((total, factor) => total * factor, 1);
}

export function factorize(value: number): Factor[] {
  const factors: Factor[] = [];
  let remaining = Math.max(1, Math.round(value));
  let divisor = 2;

  while (remaining > 1 && divisor * divisor <= remaining) {
    while (remaining % divisor === 0) {
      factors.push(divisor);
      remaining /= divisor;
    }
    divisor += divisor === 2 ? 1 : 2;
  }

  if (remaining > 1) factors.push(remaining);
  return factors;
}

export function sharesFactor(a: Factor[], b: Factor[]): boolean {
  const seen = new Set(a);
  return b.some((factor) => seen.has(factor));
}

export function storageLimit(cardCount: number): number {
  if (cardCount <= 1) return 0;
  return Math.floor(Math.log2(cardCount));
}

export function countOverlappingFactors(source: Factor[], target: Factor[]): number {
  const targetSet = new Set(target);
  return source.filter((factor) => targetSet.has(factor)).length;
}

export function countAbsentFactors(source: Factor[], blockers: Factor[]): number {
  const blockerSet = new Set(blockers);
  return source.filter((factor) => !blockerSet.has(factor)).length;
}
