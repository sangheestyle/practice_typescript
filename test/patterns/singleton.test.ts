import { MySingleton } from "../../src/patterns/singleton";

it("singleton should create only one instance", () => {
  const singleton1 = MySingleton.getInstance();
  const singleton2 = MySingleton.getInstance();
  // toEqual: value equality
  // toBe: === tests identity
  expect(singleton1).toBe(singleton2);
});