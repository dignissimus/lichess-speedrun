import { PerfKey } from "./interfaces";

export function readPerfEntries() {
  return [
    {
      perf: {
        "key": PerfKey.Rapid,
        display: "Rapid",
        name: "rapid",
      },
      rating: 1500,
    },
  ];
}
