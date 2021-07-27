function createPerf(perfType: PerfType, perfId: string, perfName: string): Perf {
  return {
    type: perfType,
    id: perfId,
    name: perfName
  };
}

export enum PerfType {
  Rapid,
  Blitz,
  Bullet
}

export type Perf = {
  type: PerfType,
  id: string,
  name: string
}

export let Rapid = createPerf(PerfType.Rapid, "rapid", "Rapid")
export let Blitz = createPerf(PerfType.Blitz, "blitz", "Blitz")
export let Bullet = createPerf(PerfType.Bullet, "bullet", "Bullet")

export let perfs: Perf[] = [Rapid, Blitz, Bullet]

export function getRating(perf: Perf): (number | undefined) {
 return 2; 
}

// let ratings: {[perf: string]: (number | undefined)} = {}
