import groupBy from "lodash.groupby";
import yinYogaPoses from "./yinYogaPoses";
import { Pose, PoseArchetype, Sequence } from "./types";
const { Shoelace, Saddle, Caterpillar, Dragonfly } = PoseArchetype;

function asTwoDigits(integer: number): string {
  const integerString = `${integer}`;
  return integerString.length === 1 ? `0${integerString}` : integerString;
}

export function elapsedSecondsToTimerTime(elapsedSeconds: number): string {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  return `${asTwoDigits(minutes)}:${asTwoDigits(seconds)}`;
}

export function elapsedSecondsToRemainingTimerTime(
  elapsedSeconds: number,
  totalDurationSeconds: number
): string {
  const remainingSeconds = totalDurationSeconds - elapsedSeconds;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  return `${asTwoDigits(minutes)}:${asTwoDigits(seconds)}`;
}

export function secondsToTimerTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${asTwoDigits(seconds)}`;
}

function randomInteger(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

function randomElement<T>(array: Array<T>): T {
  return array[randomInteger(array.length - 1)];
}

function pickOneRandomPoseFromEachArchetype(allPoses: Pose[]) {
  const poses: Pose[] = [];
  const posesByArchetype = groupBy(allPoses, "archetype");
  for (const archetype in posesByArchetype) {
    const posesForArchetype = posesByArchetype[archetype];
    const pose = randomElement(posesForArchetype);
    poses.push(pose);
    if (
      [
        Shoelace.toString(),
        Saddle.toString(),
        Caterpillar.toString(),
        Dragonfly.toString(),
      ].includes(archetype)
    ) {
      let extraPose = randomElement(posesForArchetype);
      while (extraPose === pose) {
        extraPose = randomElement(posesForArchetype);
      }
      // poses.push(extraPose);
    }
  }
  return poses;
}

class SequencePose {
  constructor(
    public name: string,
    public imageUrl: string,
    public startTime: number,
    public durationSeconds: number
  ) {}

  get endTime(): number {
    return this.startTime + this.durationSeconds;
  }
}

export function pickPoses(): Pose[] {
  return pickOneRandomPoseFromEachArchetype(yinYogaPoses);
}

export function generateSequence(
  poses: Pose[],
  poseDurationSeconds: number
): Sequence {
  // const totalDurationSeconds = totalDurationMinutes * 60;
  // const poseDurationSeconds = totalDurationSeconds / poses.length;
  // const halfPoseDurationSeconds = poseDurationSeconds / 2;
  // const poseDurationSeconds = 240;
  const halfPoseDurationSeconds = poseDurationSeconds;

  const sequence = [];
  let poseStartTime = 0;
  for (const pose of poses) {
    if (pose.isSymmetrical) {
      sequence.push(
        new SequencePose(
          pose.name,
          pose.imageUrl,
          poseStartTime,
          poseDurationSeconds
        )
      );
      poseStartTime += poseDurationSeconds;
    } else {
      sequence.push(
        new SequencePose(
          `${pose.name} (Right)`,
          pose.imageUrl,
          poseStartTime,
          halfPoseDurationSeconds
        )
      );
      poseStartTime += halfPoseDurationSeconds;
      sequence.push(
        new SequencePose(
          `${pose.name} (Left)`,
          pose.imageUrl,
          poseStartTime,
          halfPoseDurationSeconds
        )
      );
      poseStartTime += halfPoseDurationSeconds;
    }
  }
  return sequence;
}

export function speak(text: string): void {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  window.speechSynthesis.speak(utterance);
}
