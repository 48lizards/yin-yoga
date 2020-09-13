import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import useSound from "use-sound";
import Timer from "./Timer";
import { Sequence } from "./types";
import { generateSequence, secondsToTimerTime } from "./util";
import useTimer from "./useTimer";
import "./App.css";
const beep = require("./assets/beep.mp3");
const background = require("./assets/background.jpg");

const SEQUENCE_DURATION_MINUTES = 30;

const Button = styled.button`
  margin-right: 8px;
  font-size: 16px;
  padding: 5px;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-image: url(${background});
  height: 100vh;
`;

const SequenceWrapper = styled.div`
  margin: 10px;
`;

type PoseWrapperProps = {
  isCurrentPose: boolean;
  isPastPose: boolean;
};

const PoseWrapper = styled.div`
  font-size: ${({ isCurrentPose }: PoseWrapperProps) =>
    isCurrentPose ? "48px" : "24px"};
  color: ${({ isPastPose }: PoseWrapperProps) =>
    isPastPose ? "gray" : "black"};
  line-height: 1.3;
`;

const ImageWrapper = styled.div`
  margin-top: 25px;
`;

const ButtonsWrapper = styled.div`
  margin-left: 10px;
`;

function App() {
  const [elapsedSeconds, isRunning, startPause, resetTimer] = useTimer();

  const [sequence, setSequence] = useState<Sequence>(
    generateSequence(SEQUENCE_DURATION_MINUTES)
  );
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const currentPose = sequence[currentPoseIndex];
  const [playBeep] = useSound(beep);

  const reset = useCallback(() => {
    setCurrentPoseIndex(0);
    resetTimer();
  }, [resetTimer]);

  const nextSequence = useCallback(() => {
    setSequence(generateSequence(SEQUENCE_DURATION_MINUTES));
    reset();
  }, [reset]);

  useEffect(() => {
    if (isRunning) {
      for (let i = 0; i < sequence.length; i++) {
        const pose = sequence[i];
        if (
          pose !== currentPose &&
          elapsedSeconds >= pose.startTime &&
          elapsedSeconds < pose.endTime
        ) {
          setCurrentPoseIndex(i);
          playBeep();
        } else if (
          i === sequence.length - 1 &&
          elapsedSeconds >= pose.endTime
        ) {
          playBeep();
          reset();
        }
      }
    }
  }, [elapsedSeconds, isRunning, sequence, currentPose, playBeep, reset]);

  return (
    <AppWrapper>
      <div>
        <div>
          <Timer elapsedSeconds={elapsedSeconds} />
          <SequenceWrapper>
            {sequence.map((pose, index) => (
              <PoseWrapper
                key={pose.name}
                isCurrentPose={index === currentPoseIndex}
                isPastPose={index < currentPoseIndex}
              >
                {pose.name} - {secondsToTimerTime(pose.durationSeconds)}
              </PoseWrapper>
            ))}
          </SequenceWrapper>
          <ButtonsWrapper>
            <Button onClick={startPause}>
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={nextSequence}>Next Sequence</Button>
          </ButtonsWrapper>
        </div>
      </div>
      <ImageWrapper>
        <img src={currentPose.imageUrl} alt={currentPose.name} width={550} />
      </ImageWrapper>
    </AppWrapper>
  );
}

export default App;
