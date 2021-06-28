import { uuid } from "./utility";

test("renders Footer component", () => {
  const newUuid = uuid();
  expect(newUuid).toBeDefined();
});
