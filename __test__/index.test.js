import { striqtEquals } from "./utils";

describe("Given a striqtEquals function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      //Arrange
      const firstValue = 1;
      const secondValue = 1;
      const expectedResult = true;
      //Act
      const booleanResult = Object.is(firstValue, secondValue);
      //Assert
      expect(booleanResult).toBe(expectedResult);
    });
  });
});
