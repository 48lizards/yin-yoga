import React from "react";
import { elapsedSecondsToTimerTime } from "./util";

export default function Timer({ elapsedSeconds }: { elapsedSeconds: number }) {
  return (
    <div>
      <div>{elapsedSecondsToTimerTime(elapsedSeconds)}</div>
    </div>
  );
}
