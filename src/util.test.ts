import { elapsedSecondsToTimerTime } from "./util";

describe("elapsedSecondsToTimerTime", () => {
  it("formats seconds like a timer", () => {
    expect(elapsedSecondsToTimerTime(0)).toBe("00:00");
    expect(elapsedSecondsToTimerTime(5)).toBe("00:05");
    expect(elapsedSecondsToTimerTime(45)).toBe("00:45");
    expect(elapsedSecondsToTimerTime(60)).toBe("01:00");
    expect(elapsedSecondsToTimerTime(75)).toBe("01:15");
    expect(elapsedSecondsToTimerTime(120)).toBe("02:00");
    expect(elapsedSecondsToTimerTime(600)).toBe("10:00");
  });
});
