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

let UltraBullet = createPerf(PerfType.UltraBullet, "ultrabullet", "UltraBullet") // TODO: Check name is correct
let Bullet = createPerf(PerfType.Bullet, "bullet", "Bullet")
let Blitz = createPerf(PerfType.Blitz, "blitz", "Blitz")
let Rapid = createPerf(PerfType.Rapid, "rapid", "Rapid")
let Classical = createPerf(PerfType.Classical, "classical", "Classical")
let Correspondence = createPerf(PerfType.Correspondence, "correspondence", "Correspondence")
let Standard = createPerf(PerfType.Standard, "standard", "Standard")
let Crazyhouse = createPerf(PerfType.Crazyhouse, "crazyhouse", "Crazyhouse")
let Chess960 = createPerf(PerfType.Chess960, "chess960", "Chess960")
let KingOfTheHill = createPerf(PerfType.KingOfTheHill, "kingofthehill", "King Of The Hill") // Check case of name is correct
let ThreeCheck = createPerf(PerfType.ThreeCheck, "threeCheck", "Three Check") // Check case of name is correct
let Antichess = createPerf(PerfType.Antichess, "antichess", "Antichess")
let Atomic = createPerf(PerfType.Atomic, "atomic", "Atomic")
let Horde = createPerf(PerfType.Horde, "horde", "Horde")
let RacingKings = createPerf(PerfType.RacingKings, "racingkings", "Racing Kings") // Check case of name is correct

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

export function getRating(perf: Perf): Promise<number> {
  return browser.storage.local.get(perf.key).then(obj => obj[perf.key]!); 
}

export function displayRating(perfType: Perf): Promise<string> {
  return getRating(perfType).then(rating => rating.toString()).catch(_=>"?");
}

export function perfPageUrl(username:string, perf: Perf): string {
  return `${PROFILE_BASE_URL}/${username}/perf/${perf.key}`;
}
