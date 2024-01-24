export default function HandleState(state, action) {
  var valueForCheck;
  switch (action.type) {
    case "test":
      return { ...state, test: "testing" };

    case "count-increment":
      return { ...state, count: state.count + 1 };

    case "count-increment-5":
      return { ...state, count: state.count + 5 };

    case "count-increment-10":
      return { ...state, count: state.count + 10 };

    case "count-decrement":
      if (state.count - 1 <= 0) {
        return { ...state, const: 0 };
      } else {
        return { ...state, count: state.count - 1 };
      }

    case "count-decrement-5":
      if (state.count - 5 <= 0) {
        return { ...state, count: 0 };
      } else {
        return { ...state, count: state.count - 5 };
      }

    case "count-decrement-10":
      if (state.count - 10 <= 0) {
        return { ...state, count: 0 };
      } else {
        return { ...state, count: state.count - 10 };
      }

    case "count-clear":
      return { ...state, count: 0 };

    default:
      return { ...state, error: `Do not have type '${action.type}'` };
  }
}
