/**
 * Created by wakedafuckup on 12.06.17.
 */

export const initial = Object.freeze({
  lives: 3,
  correctAnswers: 0,
  time: 0,
  gameLimit: 120000,
  levelLimit: 30000
});

export const Screen = Object.freeze({
  GAME: `game`,
  WIN: `win`,
  DEFEAT: `defeat`
});
