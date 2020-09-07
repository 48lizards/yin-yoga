import React, { useState, useEffect, useCallback } from "react";
import useSound from "use-sound";
import CurrentPose from "./CurrentPose";
import Timer from "./Timer";
import { SequencePose, Sequence } from "./types";
import { generateSequence, useTimer } from "./util";
import "./App.css";
const beep = require("./sounds/beep.mp3");

const SEQUENCE_DURATION_MINUTES = 2;

function App() {
  const [elapsedSeconds, isRunning, startPause, resetTimer] = useTimer(
    SEQUENCE_DURATION_MINUTES * 60
  );
  const [sequence, setSequence] = useState<Sequence>(
    generateSequence(SEQUENCE_DURATION_MINUTES)
  );
  const [currentPose, setCurrentPose] = useState<SequencePose>(sequence[0]);
  const [play] = useSound(beep);

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

  const nextSequence = useCallback(() => {
    setSequence(generateSequence(SEQUENCE_DURATION_MINUTES));
  }, []);

  const reset = useCallback(() => {
    setCurrentPose(sequence[0]);
    resetTimer();
  }, [sequence]);

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
      <button onClick={nextSequence}>Generate New Sequence</button>
      {isRunning ? (
        <button onClick={startPause}>Pause</button>
      ) : (
        <button onClick={startPause}>Start</button>
      )}
      <button onClick={reset}>Reset</button>
      {currentPose ? <CurrentPose pose={currentPose} /> : null}
      <Timer elapsedSeconds={elapsedSeconds} />
    </div>
  );
}

export default App;
