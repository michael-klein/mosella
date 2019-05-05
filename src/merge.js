import { stream } from "./stream";
export const merge = (...streams$) => {
  const newStream$ = stream();
  for (const stream$ of streams$) {
    stream$.on(value => newStream$(value));
  }
  return newStream$;
};
