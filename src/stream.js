export const STREAM = Symbol("stream");
export const STOP = Symbol("stop");
export const stream = currentValue => {
  const listeners = [];
  let queuedValues = [];
  if (currentValue !== undefined) {
    queuedValues.push(currentValue);
  }
  let emitPromise = Promise.resolve();

  const emit = (value, listeners) => {
    listeners = [...listeners];
    const doEmit = () => {
      if (listeners.length > 0) {
        const result = listeners.shift()(value);
        if (result instanceof Promise) {
          return result.then(() => doEmit());
        }
        return doEmit();
      }
    };
    return doEmit();
  };

  const stream$ = function(value) {
    if (currentValue !== STOP) {
      if (value !== undefined) {
        currentValue = value;
      }
      if (listeners.length > 0) {
        emitPromise = emitPromise.then(() => emit(value, listeners));
      } else {
        queuedValues.push(value);
      }
      if (value === STOP) {
        listeners.length = 0;
        queuedValues.length = 0;
      }
    }
    return currentValue;
  };

  stream$.on = listener => {
    if (currentValue !== STOP) {
      listeners.push(listener);
      if (queuedValues.length > 0) {
        queuedValues = queuedValues.filter(value => {
          emitPromise = emitPromise.then(() => emit(value, listeners));
          return false;
        });
      }
      return () => {
        listeners.splice(listeners.indexOf(listener), 1);
      };
    }
  };

  stream$.stop = () => {
    stream$(STOP);
  };

  stream$.hasListeners = () => listeners.length > 0;

  stream$.is = STREAM;

  return stream$;
};
