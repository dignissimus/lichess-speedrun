export enum PerfKey {
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

export interface Perf {
  key: PerfKey;
  name: string;
  display: string;
}

const createPerf = (key: PerfKey, name: string, display: string) => ({ key, name, display});

export const UltraBullet = createPerf(PerfKey.UltraBullet, "ultrabullet", "UltraBullet");
export const Bullet = createPerf(PerfKey.Bullet, "bullet", "Bullet");
export const Blitz = createPerf(PerfKey.Blitz, "blitz", "Blitz");
export const Rapid = createPerf(PerfKey.Rapid, "rapid", "Rapid");
export const Classical = createPerf(PerfKey.Classical, "classical", "Classical");
export const Correspondence = createPerf(PerfKey.Correspondence, "correspondence", "Correspondence");
export const Standard = createPerf(PerfKey.Standard, "standard", "Standard");
export const Crazyhouse = createPerf(PerfKey.Crazyhouse, "crazyhouse", "Crazyhouse");
export const Chess960 = createPerf(PerfKey.Chess960, "chess960", "Chess960");
export const KingOfTheHill = createPerf(PerfKey.KingOfTheHill, "kingOfTheHill", "King of the Hill");
export const ThreeCheck = createPerf(PerfKey.ThreeCheck, "threeCheck", "Three Check");
export const Antichess = createPerf(PerfKey.Antichess, "antichess", "Antichess");
export const Atomic = createPerf(PerfKey.Atomic, "atomic", "Atomic");
export const Horde = createPerf(PerfKey.Horde, "horde", "Horde");
export const RacingKings = createPerf(PerfKey.RacingKings, "racingKings", "Racing Kings");

export const perfs: Perf[] = [
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

export interface PerfEntry {
  perf: Perf;
  rating: number;
}

export interface PerfContainerProps {
  entry: PerfEntry;
}

export interface PerfListProps {
  entries: PerfEntry[];
}


