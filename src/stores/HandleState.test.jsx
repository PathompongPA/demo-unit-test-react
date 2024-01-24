import HandleState from "./HandleState";

describe("functional test", () => {
  test("1 : Send action.type 'error' should return 'Dot not have type 'error'", () => {
    const value = HandleState({ count: 0 }, { type: "error" });
    expect(value.error).toBe("Do not have type 'error'");
  });

  test("2 : Send action.type 'test' should return 'testing'", () => {
    const value = HandleState({ count: 0 }, { type: "test" });
    expect(value.test).toBe("testing");
  });

  test("3 : Send action.type 'count-increment' should return 1", () => {
    const value = HandleState({ count: 1 }, { type: "count-increment" });
    expect(value.count).toBe(2);
  });

  test("4 : Send action.type 'count-increment-5' should return 1", () => {
    const value = HandleState({ count: 1 }, { type: "count-increment-5" });
    expect(value.count).toBe(6);
  });

  test("5 : Send action.type 'count-decrement' when default count=2 should return 6", () => {
    const value = HandleState({ count: 2 }, { type: "count-decrement" });
    expect(value.count).toBe(1);
  });

  test("6 : Send action.type 'count-decrement-5' when default count=2 should return 0", () => {
    const value = HandleState({ count: 2 }, { type: "count-decrement-5" });
    expect(value.count).toBe(0);
  });
  test("7 : Send action.type 'count-decrement' when default count=0 should return 0", () => {
    const value = HandleState({ count: 0 }, { type: "count-decrement" });
    expect(value.count).toBe(0);
  });

  test("8 : Send action.type 'count-clear' when default count=99 should return 0", () => {
    const value = HandleState({ count: 99 }, { type: "count-clear" });
    expect(value.count).toBe(0);
  });
});
