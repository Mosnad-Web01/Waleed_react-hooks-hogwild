// app.test.js
test("passing", async () => {
  const result = await new Promise((resolve) => {
    resolve(true);
  });
  expect(result).toBe(true);
});