export default function HandleState(state, action) {
  switch (action.type) {
    case "test":
      return { ...state, test: "testing" };
    case "count-increment":
      return { ...state, count: state.count + 1 };
    case "count-decrement":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return { ...state };
      }
    case "count-clear":
      return { ...state, count: 0 };

    default:
      return { ...state, error: `Do not have type '${action.type}'` };
  }
}
