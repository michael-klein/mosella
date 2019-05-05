import { operator } from "./operator";
import { stream } from "./stream";
export const filter = operator((predicate, stream$) => {
  const newStream$ = stream();
  stream$.on(value => {
    let shouldEmit = predicate(value);
    if (shouldEmit instanceof Promise) {
      shouldEmit.then(v => {
        if (shouldEmit) {
          newStream$(value);
        }
      });
    } else {
      if (shouldEmit) {
        newStream$(value);
      }
    }
    return shouldEmit;
  });
  return newStream$;
});
