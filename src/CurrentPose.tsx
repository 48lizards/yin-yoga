import React from "react";
import { SequencePose } from "./types";

export default function CurrentPose({ pose }: { pose: SequencePose }) {
  return (
    <div>
      <span>
        {pose.name} - {pose.durationSeconds / 60} min
      </span>
    </div>
  );
}
