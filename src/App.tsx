import React, { useState, useEffect, useCallback } from "react";
import useSound from "use-sound";
import CurrentPose from "./CurrentPose";
import Timer from "./Timer";
import { SequencePose, Sequence } from "./types";
import { generateSequence } from "./util";
import "./App.css";
const beep = require("./sounds/beep.mp3");

const SEQUENCE_DURATION_MINUTES = 20;

function App() {
  const durationSeconds = 180;

  const [isRunning, setIsRunning] = useState(false);
  const [currentPose, setCurrentPose] = useState<SequencePose | void>(
    undefined
  );
  const [sequence, setSequence] = useState<Sequence>(
    generateSequence(SEQUENCE_DURATION_MINUTES)
  );
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [play] = useSound(beep);

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
      for (const pose of sequence) {
        if (elapsedSeconds >= pose.startTime && elapsedSeconds < pose.endTime) {
          if (pose !== currentPose) {
            setCurrentPose(pose);
            play();
          }
        }
      }
    }
  }, [elapsedSeconds, isRunning, sequence, currentPose, play]);

  const reset = useCallback(() => {
    setSequence(generateSequence(SEQUENCE_DURATION_MINUTES));
    setCurrentPose(undefined);
    setElapsedSeconds(0);
    setIsRunning(false);
  }, []);

  return (
    <div className="App">
      {sequence ? (
        <div>
          {sequence.map(pose => (
            <div key={pose.name}>
              {pose.name} - {pose.durationSeconds} sec
            </div>
          ))}
        </div>
      ) : null}
      {isRunning ? (
        <button onClick={() => setIsRunning(false)}>Pause</button>
      ) : (
        <button onClick={() => setIsRunning(true)}>Start</button>
      )}
      <button onClick={reset}>Reset</button>
      {currentPose ? <CurrentPose pose={currentPose} /> : null}
      <Timer elapsedSeconds={elapsedSeconds} />
    </div>
  );
}

export default App;
