import { PerfKey } from "./interfaces";

export function readPerfEntries() {
  return [
    {
      perf: {
        key: PerfKey.Rapid,
        display: "Rapid",
        name: "rapid",
      },
      rating: 1500,
    },
  ];
}

export const getRating = (key: string) => "1500";
export const getEnabled = () => true;
