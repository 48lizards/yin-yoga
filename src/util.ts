import groupBy from "lodash.groupby";
import { useCallback, useEffect, useState } from "react";
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

export function generateSequence(totalDurationMinutes: number): Sequence {
  const poses = pickOneRandomPoseFromEachArchetype(yinYogaPoses);

  // const totalDurationSeconds = totalDurationMinutes * 60;
  // const poseDurationSeconds = totalDurationSeconds / poses.length;
  // const halfPoseDurationSeconds = poseDurationSeconds / 2;
  const poseDurationSeconds = 3;
  const halfPoseDurationSeconds = 2;

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
