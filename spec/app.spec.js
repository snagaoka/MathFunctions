describe("Math Functions", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("should add two numbers", function() {
  	var sum = add(3, 4);
  	expect(sum).toBe(7);
  });

  it("should subtract two numbers", function() {
  	var sum = subtract(10, 4);
  	expect(sum).toBe(6);
  });

  it("should multiply two numbers", function() {
  	var sum = multiply(10, 4);
  	expect(sum).toBe(40);
  });

  it("should divide two numbers", function() {
  	var sum = divide(10, 5);
  	expect(sum).toBe(2);
  });


});

