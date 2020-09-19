import React from "react";
import styled from "styled-components";
import {
  elapsedSecondsToTimerTime,
  elapsedSecondsToRemainingTimerTime,
} from "./util";

const TimerWrapper = styled.div`
  font-size: 128px;
  font-family: "Roboto Mono", monospace;
`;

export default function Timer({
  elapsedSeconds,
  totalDurationSeconds,
  isCountdown,
}: {
  elapsedSeconds: number;
  totalDurationSeconds: number;
  isCountdown: boolean;
}) {
  const timerTime = isCountdown
    ? elapsedSecondsToRemainingTimerTime(elapsedSeconds, totalDurationSeconds)
    : elapsedSecondsToTimerTime(elapsedSeconds);

  return <TimerWrapper>{timerTime}</TimerWrapper>;
}
