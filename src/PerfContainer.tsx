import React from "react";
import { PerfContainerProps } from "./interfaces";

function PerfContainer(props: PerfContainerProps) {
  return (
    <div className="perf-container">
      <span className="perf-name">{props.entry.perf.display}</span>
      <span className="perf-rating">{props.entry.rating}</span>
    </div>
  );
}

export default PerfContainer;
