import { striqtEquals } from "../index.js";

describe("Given a striqtEquals function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      const firstValue = 1;
      const secondValue = 1;
      const expectedResult = true;

      const booleanResult = striqtEquals(firstValue, secondValue);

      expect(booleanResult).toBe(expectedResult);
    });
  });
});
