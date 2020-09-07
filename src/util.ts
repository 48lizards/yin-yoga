import groupBy from "lodash.groupby";
import yinYogaPoses from "./yinYogaPoses";
import { Pose, Sequence } from "./types";

function asTwoDigits(integer: number): string {
  const integerString = `${integer}`;
  return integerString.length === 1 ? `0${integerString}` : integerString;
}

export function elapsedSecondsToTimerTime(elapsedSeconds: number): string {
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  return `${asTwoDigits(minutes)}:${asTwoDigits(seconds)}`;
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
  }
  return poses;
}

export function generateSequence(totalDurationMinutes: number): Sequence {
  const poses = pickOneRandomPoseFromEachArchetype(yinYogaPoses);

  const totalDurationSeconds = totalDurationMinutes * 60;
  const poseDurationSeconds = totalDurationSeconds / poses.length;
  const halfPoseDurationSeconds = poseDurationSeconds / 2;

  const sequence = [];
  let poseStartTime = 0;
  for (const pose of poses) {
    if (pose.isSymmetrical) {
      sequence.push({
        name: pose.name,
        startTime: poseStartTime,
        endTime: poseStartTime + poseDurationSeconds,
        durationSeconds: poseDurationSeconds
      });
      poseStartTime += poseDurationSeconds;
    } else {
      sequence.push({
        name: `${pose.name} (Right)`,
        startTime: poseStartTime,
        endTime: poseStartTime + halfPoseDurationSeconds,
        durationSeconds: halfPoseDurationSeconds
      });
      poseStartTime += halfPoseDurationSeconds;
      sequence.push({
        name: `${pose.name} (Left)`,
        startTime: poseStartTime,
        endTime: poseStartTime + halfPoseDurationSeconds,
        durationSeconds: halfPoseDurationSeconds
      });
      poseStartTime += halfPoseDurationSeconds;
    }
  }
  return sequence;
}
