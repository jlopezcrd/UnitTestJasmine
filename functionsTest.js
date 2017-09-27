describe("Check sum function", function() {
  var result;

  it("with 5 + 5 and your result is 10", function() {
    result = sum(5, 5);

    expect(result).toBe(10);
  });

  it("with 5 + 4 and your result is not 10", function() {
    result = sum(5, 4);

    expect(result).not.toBe(10);
  });
});