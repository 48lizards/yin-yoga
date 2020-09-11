import React from "react";
import styled from "styled-components";
import { elapsedSecondsToTimerTime } from "./util";

const TimerWrapper = styled.div`
  font-size: 128px;
  font-family: "Roboto Mono", monospace;
`;

export default function Timer({ elapsedSeconds }: { elapsedSeconds: number }) {
  const timerTime = elapsedSecondsToTimerTime(elapsedSeconds);

  return <TimerWrapper>{timerTime}</TimerWrapper>;
}
