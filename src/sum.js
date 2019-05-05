import { map } from "./map";

export const sum = map(function(value) {
  if (this.sum === undefined) {
    this.sum = 0;
  }
  return (this.sum += value);
});
