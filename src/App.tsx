import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { Sequence } from "./types";
import { generateSequence, pickPoses, speak } from "./util";
import useTimer from "./useTimer";
import "./App.css";
const banner = require("./assets/bannerlogo.png");

const Button = styled.button`
  margin-right: 8px;
  font-size: 16px;
  padding: 5px;
`;

const AppWrapper = styled.div`
  background-color: #eaf9ca;
  height: 100vh;
`;

const SequenceWrapper = styled.div`
  margin: 10px;
  text-align: right;
  font-family: "Noto Sans", sans-serif;
`;

const SequenceAndImageWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const TimerWrapper = styled.div`
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin: 25px;
`;

const ButtonsWrapper = styled.div`
  margin-left: 10px;
`;

const SettingsWrapper = styled.span`
  margin: 10px;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 6px;
`;

const Select = styled.select``;

const Banner = styled.div`
  height: 40px;
  padding: 5px;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: 180px 44px;
  background-position: center;
  background-color: black;
  font-size: 24px;
  font-weight: 500;
`;

function useSelect(
  initialValue: string
): [string, React.ChangeEventHandler<HTMLSelectElement>] {
  const [value, setValue] = useState(initialValue);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setValue(event.target.value);
  }

  return [value, onChange];
}

function App() {
  const [elapsedSeconds, isRunning, startPause, resetTimer] = useTimer();
  const [value, onChange] = useSelect("3");
  const [poses, setPoses] = useState(pickPoses());
  const poseDurationSeconds = parseInt(value) * 60;

  const [sequence, setSequence] = useState<Sequence>(
    generateSequence(poses, poseDurationSeconds)
  );
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const currentPose = sequence[currentPoseIndex];
  const totalDurationSeconds = sequence.reduce(
    (duration, pose) => duration + pose.durationSeconds,
    0
  );

  const reset = useCallback(() => {
    setCurrentPoseIndex(0);
    resetTimer();
  }, [resetTimer]);

  const nextSequence = useCallback(() => {
    const nextPoses = pickPoses();
    setPoses(nextPoses);
    setSequence(generateSequence(nextPoses, poseDurationSeconds));
    reset();
  }, [reset, poseDurationSeconds]);

  useEffect(() => {
    setSequence(generateSequence(poses, poseDurationSeconds));
    reset();
  }, [poses, poseDurationSeconds, reset]);

  useEffect(() => {
    if (isRunning) {
      if (elapsedSeconds === 0) {
        speak(currentPose.name);
      }
      for (let i = 0; i < sequence.length; i++) {
        const pose = sequence[i];
        if (
          pose !== currentPose &&
          elapsedSeconds >= pose.startTime &&
          elapsedSeconds < pose.endTime
        ) {
          speak(pose.name);
          setCurrentPoseIndex(i);
        } else if (
          i === sequence.length - 1 &&
          elapsedSeconds >= pose.endTime
        ) {
          speak("shavasana");
          reset();
        }
      }
    }
  }, [elapsedSeconds, isRunning, sequence, currentPose, reset]);

  return (
    <AppWrapper>
      <Banner />
      <ContentWrapper>
        <TimerWrapper>
          <Timer
            elapsedSeconds={elapsedSeconds}
            totalDurationSeconds={totalDurationSeconds}
            isCountdown={true}
          />
          <ButtonsWrapper>
            <Button onClick={startPause}>
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={nextSequence}>Next Sequence</Button>
            <SettingsWrapper>
              <Label htmlFor="poseDuration">Pose Duration</Label>
              <Select id="poseDuration" value={value} onChange={onChange}>
                <option value="1">1 min</option>
                <option value="2">2 min</option>
                <option value="3">3 min</option>
                <option value="4">4 min</option>
                <option value="5">5 min</option>
                <option value="6">6 min</option>
              </Select>
            </SettingsWrapper>
          </ButtonsWrapper>
        </TimerWrapper>
        <SequenceAndImageWrapper>
          <div>
            <SequenceWrapper>
              {sequence.map((pose, index) => (
                <PoseWrapper
                  key={pose.name}
                  isCurrentPose={index === currentPoseIndex}
                  isPastPose={index < currentPoseIndex}
                >
                  {pose.name}
                </PoseWrapper>
              ))}
            </SequenceWrapper>
          </div>
          <ImageWrapper>
            <img
              src={currentPose.imageUrl}
              alt={currentPose.name}
              width={550}
            />
          </ImageWrapper>
        </SequenceAndImageWrapper>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
