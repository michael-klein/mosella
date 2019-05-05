import { stream } from "./stream";
export const combine = (...streams$) => {
  const values = Array(streams$.length).fill(undefined);
  const newStream$ = stream();

  streams$.forEach((stream$, index) => {
    values[index] = stream$();
  });
  newStream$(values);
  streams$.forEach((stream$, index) => {
    stream$.on(value => {
      values[index] = value;
      newStream$(values);
    });
  });
  return newStream$;
};
