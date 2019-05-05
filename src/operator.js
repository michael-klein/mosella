import { stream, STREAM, STOP } from "./stream";

const wrapStream = (op, args, streamIn$) => {
  const stream$ = streamIn$ || args.pop();
  const valueStream$ = stream();
  let outStream$;
  stream$.on(value => {
    if (value !== STOP) {
      valueStream$(value);
    } else {
      outStream$(value);
    }
  });
  outStream$ = op.apply(op, [...args, valueStream$]);
  return outStream$;
};

export const operator = op => {
  return (...args) => {
    const lastArg = args[args.length - 1];
    if (typeof lastArg === "function" && lastArg.is === STREAM) {
      return wrapStream(op, args);
    } else {
      return stream$ => wrapStream(op, args, stream$);
    }
  };
};
