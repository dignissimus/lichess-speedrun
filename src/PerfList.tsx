import React from "react";
import { PerfListProps } from "./interfaces";
import PerfContainer from "./PerfContainer";

function PerfList(props: PerfListProps) {
  return (
    <div className="perf-list">
      {props.entries.map((entry) => (
        <PerfContainer entry={entry} />
      ))}
    </div>
  );
}

export default PerfList;
