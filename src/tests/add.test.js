const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(1, 6);
  expect(result).toBe(7);
});

test("should generate greeting from name", () => {
  const result = generateGreeting("Varun");
  expect(result).toBe(`Hello Varun!`);
});

test("should generate greeting from no name", () => {
  const result = generateGreeting();
  expect(result).toBe(`Hello Anonymous!`);
});
