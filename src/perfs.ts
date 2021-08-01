import { browser } from "webextension-polyfill-ts"

const PROFILE_BASE_URL = "https://lichess.org/@";

function createPerf(perfType: PerfType, perfKey: string, perfName: string): Perf {
  return {
    type: perfType,
    key: perfKey,
    name: perfName
  };
}

export enum PerfType {
    UltraBullet,
    Bullet,
    Blitz,
    Rapid,
    Classical,
    Correspondence,
    Standard,
    Crazyhouse,
    Chess960,
    KingOfTheHill,
    ThreeCheck,
    Antichess,
    Atomic,
    Horde,
    RacingKings,
}

export type Perf = {
  type: PerfType,
  key: string,
  name: string
}

export let UltraBullet = createPerf(PerfType.UltraBullet, "ultrabullet", "UltraBullet") // TODO: Check name is correct
export let Bullet = createPerf(PerfType.Bullet, "bullet", "Bullet")
export let Blitz = createPerf(PerfType.Blitz, "blitz", "Blitz")
export let Rapid = createPerf(PerfType.Rapid, "rapid", "Rapid")
export let Classical = createPerf(PerfType.Classical, "classical", "Classical")
export let Correspondence = createPerf(PerfType.Correspondence, "correspondence", "Correspondence")
export let Standard = createPerf(PerfType.Standard, "standard", "Standard")
export let Crazyhouse = createPerf(PerfType.Crazyhouse, "crazyhouse", "Crazyhouse")
export let Chess960 = createPerf(PerfType.Chess960, "chess960", "Chess960")
export let KingOfTheHill = createPerf(PerfType.KingOfTheHill, "kingofthehill", "King Of The Hill") // Check case of name is correct
export let ThreeCheck = createPerf(PerfType.ThreeCheck, "threeCheck", "Three Check") // Check case of name is correct
export let Antichess = createPerf(PerfType.Antichess, "antichess", "Antichess")
export let Atomic = createPerf(PerfType.Atomic, "atomic", "Atomic")
export let Horde = createPerf(PerfType.Horde, "horde", "Horde")
export let RacingKings = createPerf(PerfType.RacingKings, "racingkings", "Racing Kings") // Check case of name is correct

export let perfs: Perf[] = [
    UltraBullet,  
    Bullet,
    Blitz,
    Rapid,
    Classical,
    Correspondence,
    Standard,
    Crazyhouse,
    Chess960,
    KingOfTheHill,
    ThreeCheck,
    Antichess,
    Atomic,
    Horde,
    RacingKings,
]

export function perfPageUrl(username:string, perf: Perf): string {
  return `${PROFILE_BASE_URL}/${username}/perf/${perf.key}`;
}
