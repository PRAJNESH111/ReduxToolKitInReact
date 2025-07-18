export function mycreateStore(reducer) {
  let state;
  let listeners = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        const listernerIndex = listeners.findIndex((regilisterner) => {
          return regilisterner === listener;
        });
        listeners.splice(listernerIndex, 1);
      };
    },
  };
  store.dispatch({ type: "@@INIT" });
  return store;
}
