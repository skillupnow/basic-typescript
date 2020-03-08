const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

(async function() {
  console.log("Hello");
  await delay(2000);
  console.log("Hello again!");
})();

const laterValue = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve("World"), ms));

(async function() {
  console.log("hello");
  const value = await laterValue(1000);
  console.log(`Hello, ${value}`);
})();
