import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";
import { useCallback } from "react";

type TimerContext = {
  elapsedSeconds: number;
};

const runTimerCallbackHandler = () => (
  callback: (eventType: string) => void
) => {
  setInterval(() => {
    callback("TICK");
  }, 1000);
};

const timerMachine = Machine<TimerContext>({
  id: "timer",
  initial: "paused",
  context: {
    elapsedSeconds: 0,
  },
  states: {
    running: {
      invoke: {
        id: "runTimer",
        src: runTimerCallbackHandler,
      },
      on: {
        TOGGLE_RUNNING: "paused",
        TICK: {
          actions: assign({
            elapsedSeconds: (context) => context.elapsedSeconds + 1,
          }),
        },
      },
    },
    paused: {
      on: {
        TOGGLE_RUNNING: "running",
      },
    },
  },
  on: {
    RESET: {
      target: "paused",
      actions: assign({
        elapsedSeconds: 0,
      }),
    },
  },
});

export default function useTimer() {
  const [timerState, sendTimer] = useMachine(timerMachine);
  const { elapsedSeconds } = timerState.context;
  const isRunning = timerState.value === "running";

  const startPause = useCallback(() => {
    sendTimer("TOGGLE_RUNNING");
  }, [sendTimer]);

  const resetTimer = useCallback(() => {
    sendTimer("RESET");
  }, [sendTimer]);

  return [elapsedSeconds, isRunning, startPause, resetTimer] as const;
}
