describe('First test', () => {
  let testVariable: any;
  beforeEach(() => {
    testVariable = {};
  });
  it('Should return true if a is true', () => {
    //arrange
    testVariable.a = false;

    //act
    testVariable.a = true;

    //assert
    expect(testVariable.a).toBe(true);
  })
})
describe('Array', () => {
  let arr: ArrayBuffer = new ArrayBuffer(10);
  it('Array length should be 10', function () {
      expect(arr.byteLength).toEqual(10);
  });
})
