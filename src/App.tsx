import React, { useState, useEffect, useCallback } from "react";
import useSound from "use-sound";
import CurrentPose from "./CurrentPose";
import Timer from "./Timer";
import { SequencePose, Sequence } from "./types";
import { generateSequence, useTimer } from "./util";
import "./App.css";
const beep = require("./sounds/beep.mp3");

const SEQUENCE_DURATION_MINUTES = 18;

function App() {
  const [elapsedSeconds, isRunning, startPause, resetTimer] = useTimer(
    SEQUENCE_DURATION_MINUTES * 60
  );
  const [sequence, setSequence] = useState<Sequence>(
    generateSequence(SEQUENCE_DURATION_MINUTES)
  );
  const [currentPose, setCurrentPose] = useState<SequencePose>(sequence[0]);
  const [playBeep] = useSound(beep);

  useEffect(() => {
    if (isRunning) {
      for (let i = 0; i < sequence.length; i++) {
        const pose = sequence[i];
        if (
          pose !== currentPose &&
          elapsedSeconds >= pose.startTime &&
          elapsedSeconds < pose.endTime
        ) {
          setCurrentPose(pose);
          playBeep();
        } else if (
          i === sequence.length - 1 &&
          elapsedSeconds >= pose.endTime
        ) {
          playBeep();
        }
      }
    }
  }, [elapsedSeconds, isRunning, sequence, currentPose, playBeep]);

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
