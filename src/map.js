import { operator } from "./operator";
import { stream } from "./stream";
export const map = operator((cb, stream$) => {
  const newStream$ = stream();
  stream$.on(value => {
    let mappedValue = cb.apply(cb, [value]);
    if (mappedValue instanceof Promise) {
      mappedValue.then(v => newStream$(v));
    } else {
      newStream$(mappedValue);
    }
    return mappedValue;
  });
  return newStream$;
});
