export function fetchData() {
  const error = new Error("rejected promise");
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000); // Simulate a 1-second delay
    reject(error);
  });
}
(async () => {
  const result = await fetchData().catch((error) => console.log(error.message));
})();
