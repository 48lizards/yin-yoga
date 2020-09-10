import React from "react";
import styled from "styled-components";
import { secondsToTimerTime } from "./util";
import { SequencePose } from "./types";

const Wrapper = styled.div`
  font-size: 36px;
`;

export default function CurrentPose({ pose }: { pose: SequencePose }) {
  return (
    <Wrapper>
      {pose.name} - {secondsToTimerTime(pose.durationSeconds)}
    </Wrapper>
  );
}
