import { stream, RESET, STOP } from "./stream";
export const combine = (...streams$) => {
  const values = Array(streams$.length).fill(undefined);

  streams$.forEach((stream$, index) => {
    values[index] = stream$();
  });

  const newStream$ = stream(values);
  streams$.forEach((stream$, index) => {
    stream$.on(value => {
      if (value === RESET || value === STOP) {
        newStream$(value);
      } else {
        values[index] = value;
        newStream$([...values]);
      }
    });
  });
  return newStream$;
};
