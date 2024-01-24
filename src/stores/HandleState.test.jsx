import HandleState from "./HandleState";

describe("functional test", () => {
  test("Send action.type 'error' should return 'Dot not have type 'error'", () => {
    const value = HandleState({ count: 0 }, { type: "error" });
    expect(value.error).toBe("Do not have type 'error'");
  });

  test("Send action.type 'test' should return 'testing'", () => {
    const value = HandleState({ count: 0 }, { type: "test" });
    expect(value.test).toBe("testing");
  });

  test("Send action.type 'count-increment' should return 1", () => {
    const value = HandleState({ count: 1 }, { type: "count-increment" });
    expect(value.count).toBe(2);
  });

  test("Send action.type 'count-decrement' when default count=2 should return 1", () => {
    const value = HandleState({ count: 2 }, { type: "count-decrement" });
    expect(value.count).toBe(1);
  });

  test("Send action.type 'count-decrement' when default count=0 should return 0", () => {
    const value = HandleState({ count: 0 }, { type: "count-decrement" });
    expect(value.count).toBe(0);
  });

  test("Send action.type 'count-clear' when default count=99 should return 0", () => {
    const value = HandleState({ count: 99 }, { type: "count-clear" });
    expect(value.count).toBe(0);
  });
});
