import React, { useState, useEffect, useCallback } from "react";
import CurrentPose from "./CurrentPose";
import Timer from "./Timer";
import { SequencePose, Sequence } from "./types";
import { generateSequence } from "./util";
import "./App.css";

const poseDurationSeconds = 180;

function App() {
  const durationSeconds = 180;

  const [isRunning, setIsRunning] = useState(false);
  const [currentPose, setCurrentPose] = useState<SequencePose | void>(
    undefined
  );
  const [sequence, setSequence] = useState<Sequence | void>(undefined);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && elapsedSeconds < durationSeconds) {
        setElapsedSeconds(elapsedSeconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [elapsedSeconds, durationSeconds, isRunning]);

  useEffect(() => {
    if (isRunning && sequence) {
      const poseIndex = Math.floor(elapsedSeconds / poseDurationSeconds);
      const pose = sequence[poseIndex];
      setCurrentPose(pose);
    }
  }, [elapsedSeconds, isRunning, sequence]);

  const getNextSequence = useCallback(() => {
    const sequence = generateSequence(20);
    setSequence(sequence);
  }, []);

  const reset = useCallback(() => {
    setSequence(undefined);
    setCurrentPose(undefined);
    setElapsedSeconds(0);
    setIsRunning(false);
  }, []);

  return (
    <div className="App">
      {sequence ? (
        <ul>
          {sequence.map(pose => (
            <li key={pose.name}>
              {pose.name} - {pose.durationSeconds / 60} min
            </li>
          ))}
        </ul>
      ) : null}
      <button onClick={getNextSequence}>Generate Sequence</button>
      {sequence ? (
        isRunning ? (
          <button onClick={() => setIsRunning(false)}>Pause</button>
        ) : (
          <button onClick={() => setIsRunning(true)}>Start</button>
        )
      ) : null}
      {sequence ? <button onClick={reset}>Reset</button> : null}
      {currentPose ? <CurrentPose pose={currentPose} /> : null}
      <Timer elapsedSeconds={elapsedSeconds} />
    </div>
  );
}

export default App;
