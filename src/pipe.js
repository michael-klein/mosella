import { operator } from "./operator";
export const pipe = operator((...operators) => {
  let stream$ = operators.pop();
  for (const operator of operators) {
    stream$ = operator(stream$);
  }
  return stream$;
});
